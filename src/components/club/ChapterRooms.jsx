import React, { useState, useEffect, useRef } from 'react';
import { useSocket } from '../../context/SocketContext';
import './ChapterRooms.css';

const ChapterRooms = ({ clubId, user, currentBook, myProgress, schedule }) => {
    const { socket } = useSocket();
    const [activeRoom, setActiveRoom] = useState(null);
    const [roomMessages, setRoomMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [lockedRooms, setLockedRooms] = useState([]);
    const [unlockedRooms, setUnlockedRooms] = useState([]);
    const messagesEndRef = useRef(null);

    // Smooth scroll chat to bottom
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [roomMessages]);

    // Calculate Locked and Unlocked rooms
    useEffect(() => {
        if (!schedule) return;

        const now = new Date();
        const locked = [];
        const unlocked = [];

        schedule.forEach(item => {
            // Safely parse the highest chapter number from range string
            const numbers = item.chapterRange.match(/\d+/g);
            const lastChapter = numbers ? parseInt(numbers[numbers.length - 1], 10) : 0;

            const userProgress = myProgress?.lastChapterRead || 0;
            const isUnlockedByProgress = userProgress >= lastChapter;
            const isUnlockedBySchedule = now >= new Date(item.startDate);

            if (isUnlockedByProgress || isUnlockedBySchedule) {
                unlocked.push({
                    ...item,
                    unlockedBy: isUnlockedByProgress ? 'progress' : 'schedule'
                });
            } else {
                locked.push(item);
            }
        });

        setLockedRooms(locked);
        setUnlockedRooms(unlocked);
    }, [schedule, myProgress]);

    // Socket message & room event handlers
    useEffect(() => {
        if (!socket) return;

        const handleRoomHistory = ({ chapterRange, messages }) => {
            setRoomMessages(messages || []);
            setActiveRoom(chapterRange);
        };

        const handleNewMessage = (msg) => {
            setRoomMessages(prev => [...prev, msg]);
        };

        const handleChapterUnlocked = ({ chapterRange }) => {
            setLockedRooms(prev => prev.filter(r => r.chapterRange !== chapterRange));
            const unlockedItem = schedule?.find(s => s.chapterRange === chapterRange);
            if (unlockedItem) {
                setUnlockedRooms(prev => [...prev, { ...unlockedItem, unlockedBy: 'progress' }]);
            }
        };

        socket.on('chapter-room-history', handleRoomHistory);
        socket.on('new-chapter-message', handleNewMessage);
        socket.on('chapter-unlocked', handleChapterUnlocked);

        return () => {
            socket.off('chapter-room-history', handleRoomHistory);
            socket.off('new-chapter-message', handleNewMessage);
            socket.off('chapter-unlocked', handleChapterUnlocked);
        };
    }, [socket, schedule]);

    const joinRoom = (chapterRange) => {
        if (!socket) return;
        
        // Leave previous active room session if present
        if (activeRoom && activeRoom !== chapterRange) {
            socket.emit('leave-chapter-room', { clubId, chapterRange: activeRoom });
        }

        socket.emit('join-chapter-room', { clubId, chapterRange });
    };

    const sendMessage = (e) => {
        e.preventDefault();
        if (!newMessage.trim() || !socket || !activeRoom) return;

        socket.emit('chapter-message', {
            clubId,
            chapterRange: activeRoom,
            content: newMessage.trim()
        });

        setNewMessage('');
    };

    const formatDate = (date) => {
        return new Date(date).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric'
        });
    };

    if (!currentBook) {
        return (
            <div className="chapter-rooms empty">
                <p>No book is currently being read in this club.</p>
            </div>
        );
    }

    const currentUserId = user?._id || user?.id;

    return (
        <div className="chapter-rooms">
            <div className="rooms-sidebar">
                <h4>📖 {currentBook.title}</h4>
                <p className="reading-schedule">Reading Schedule</p>

                <div className="rooms-list">
                    {unlockedRooms.map(room => (
                        <button
                            key={room.chapterRange}
                            className={`room-btn ${activeRoom === room.chapterRange ? 'active' : ''}`}
                            onClick={() => joinRoom(room.chapterRange)}
                        >
                            <span className="room-name">
                                {room.chapterRange.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                            </span>
                            <span className="room-status unlocked">
                                {room.unlockedBy === 'progress' ? '✅ You' : '🔓 Open'}
                            </span>
                        </button>
                    ))}

                    {lockedRooms.map(room => (
                        <div key={room.chapterRange} className="room-btn locked">
                            <span className="room-name">
                                {room.chapterRange.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                            </span>
                            <span className="room-status locked">
                                🔒 Unlocks {formatDate(room.startDate)}
                            </span>
                        </div>
                    ))}
                </div>

                <div className="progress-info">
                    <p>Your progress: Chapter {myProgress?.lastChapterRead || 0}</p>
                    <div className="progress-bar">
                        <div 
                            className="progress-fill" 
                            style={{ width: `${myProgress?.percentComplete || 0}%` }}
                        />
                    </div>
                </div>
            </div>

            <div className="room-chat">
                {activeRoom ? (
                    <>
                        <div className="room-header">
                            <h4>{activeRoom.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</h4>
                            <span className="spoiler-warning">⚠️ Spoilers ahead!</span>
                        </div>

                        <div className="messages-container">
                            {roomMessages.map((msg, index) => {
                                const senderId = typeof msg.userId === 'object' ? msg.userId?._id : msg.userId;
                                const isMine = String(senderId) === String(currentUserId);

                                return (
                                    <div 
                                        key={msg._id || msg.id || index}
                                        className={`message ${isMine ? 'mine' : ''}`}
                                    >
                                        <div className="message-content">
                                            <span className="message-username">{msg.username || 'Member'}</span>
                                            <div className="message-bubble">
                                                <p>{msg.content}</p>
                                            </div>
                                            <span className="message-time">
                                                {msg.createdAt ? new Date(msg.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : ''}
                                            </span>
                                        </div>
                                    </div>
                                );
                            })}
                            <div ref={messagesEndRef} />
                        </div>

                        <form className="message-input" onSubmit={sendMessage}>
                            <input
                                type="text"
                                value={newMessage}
                                onChange={(e) => setNewMessage(e.target.value)}
                                placeholder={`Discuss ${activeRoom.replace(/-/g, ' ')}...`}
                            />
                            <button type="submit" disabled={!newMessage.trim()}>Send</button>
                        </form>
                    </>
                ) : (
                    <div className="room-placeholder">
                        <p>Select a chapter room to join the discussion</p>
                        <p className="hint">Rooms unlock based on your reading progress or the club schedule</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ChapterRooms;