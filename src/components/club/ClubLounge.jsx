import React, { useState, useEffect, useRef } from 'react';
import { useSocket } from '../../context/SocketContext';
import './ClubLounge.css';

const ClubLounge = ({ clubId, user }) => {
    const { socket } = useSocket();
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [replyingTo, setReplyingTo] = useState(null);
    const [typingUsers, setTypingUsers] = useState([]);
    const [onlineCount, setOnlineCount] = useState(1);
    const [isConnected, setIsConnected] = useState(socket?.connected || false);

    const messagesEndRef = useRef(null);
    const typingTimeoutRef = useRef(null);
    const isTypingRef = useRef(false);

    // Normalize user object properties safely
    const profile = user?.data || user?.user || user;
    const currentUserId = profile?._id || profile?.id;
    const currentUsername = profile?.userName || profile?.username || profile?.name;

    useEffect(() => {
        if (!socket || !clubId) return;

        const joinLounge = () => {
            setIsConnected(true);
            socket.emit('join-club-lounge', { clubId });
        };

        const onConnect = () => joinLounge();
        const onDisconnect = () => setIsConnected(false);

        socket.on('connect', onConnect);
        socket.on('disconnect', onDisconnect);

        if (socket.connected) {
            joinLounge();
        }

        // --- Socket Event Handlers ---
        const handleHistory = (history) => setMessages(history || []);
        const handleNewMessage = (msg) => setMessages(prev => [...prev, msg]);

        const handleOnlineCount = (data) => {
            if (typeof data === 'number') setOnlineCount(data);
            else if (data?.count) setOnlineCount(data.count);
        };

        const handleUserTyping = (data) => {
            if (data.userId === currentUserId) return;

            if (data.isTyping) {
                setTypingUsers(prev => {
                    const filtered = prev.filter(u => u.userId !== data.userId);
                    return [...filtered, data];
                });
            } else {
                setTypingUsers(prev => prev.filter(u => u.userId !== data.userId));
            }
        };

        const handleReactionUpdated = ({ messageId, reactions }) => {
            setMessages(prev => prev.map(msg =>
                (msg._id === messageId || msg.id === messageId)
                    ? { ...msg, reactions }
                    : msg
            ));
        };

        const handleError = (err) => {
            console.error('Lounge Socket Error:', err);
        };

        socket.on('lounge-history', handleHistory);
        socket.on('new-lounge-message', handleNewMessage);
        socket.on('lounge-online-count', handleOnlineCount);
        socket.on('user-typing', handleUserTyping);
        socket.on('message-reaction-updated', handleReactionUpdated);
        socket.on('error', handleError);

        return () => {
            socket.emit('leave-club-lounge', { clubId });
            socket.off('connect', onConnect);
            socket.off('disconnect', onDisconnect);
            socket.off('lounge-history', handleHistory);
            socket.off('new-lounge-message', handleNewMessage);
            socket.off('lounge-online-count', handleOnlineCount);
            socket.off('user-typing', handleUserTyping);
            socket.off('message-reaction-updated', handleReactionUpdated);
            socket.off('error', handleError);
        };
    }, [socket, clubId, currentUserId]);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const sendMessage = (e) => {
        e.preventDefault();

        if (!newMessage.trim() || !socket || !isConnected) {
            console.warn('ClubLounge: Cannot send message - disconnected or empty payload.');
            return;
        }

        socket.emit('lounge-message', {
            clubId,
            content: newMessage.trim(),
            replyTo: replyingTo?._id || replyingTo?.id || null
        });

        setNewMessage('');
        setReplyingTo(null);

        if (isTypingRef.current) {
            isTypingRef.current = false;
            socket.emit('typing', { clubId, room: 'lounge', isTyping: false, username: currentUsername });
        }
        clearTimeout(typingTimeoutRef.current);
    };

    const handleInputChange = (e) => {
        setNewMessage(e.target.value);
        if (!socket || !isConnected) return;

        if (!isTypingRef.current) {
            isTypingRef.current = true;
            socket.emit('typing', { clubId, room: 'lounge', isTyping: true, username: currentUsername });
        }

        clearTimeout(typingTimeoutRef.current);
        typingTimeoutRef.current = setTimeout(() => {
            isTypingRef.current = false;
            socket.emit('typing', { clubId, room: 'lounge', isTyping: false, username: currentUsername });
        }, 2000);
    };

    const addReaction = (messageId, emoji) => {
        if (!socket || !isConnected) return;
        socket.emit('add-reaction', { messageId, emoji });
    };

    const formatTime = (date) => {
        if (!date) return '';
        return new Date(date).toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    return (
        <div className="club-lounge">
            <div className="lounge-header">
                <div className="lounge-heading">
                    <span className="material-symbols-outlined" aria-hidden="true">chat_bubble</span>
                    <div><h3>Club Lounge</h3><p>Your reading room</p></div>
                </div>
                <span className={`online-count ${isConnected ? 'connected' : 'disconnected'}`}>
                    <span className="status-dot" aria-hidden="true" />
                    <span className="material-symbols-outlined" aria-hidden="true">{isConnected ? 'groups' : 'cloud_off'}</span>
                    {isConnected ? `${onlineCount} online` : 'Disconnected'}
                </span>
            </div>

            <div className="messages-container">
                {!messages.length && !typingUsers.length && (
                    <div className="lounge-empty">
                        <span className="material-symbols-outlined" aria-hidden="true">auto_stories</span>
                        <p>Start the conversation around your current read.</p>
                    </div>
                )}
                {messages.map((msg, index) => {
                    const msgUserId = msg.userId?._id || msg.userId;
                    const isMine = msgUserId?.toString() === currentUserId?.toString();
                    const msgUsername = msg.userName || msg.username || msg.userId?.userName || msg.userId?.username || 'User';

                    const prevMsg = messages[index - 1];
                    const prevUserId = prevMsg?.userId?._id || prevMsg?.userId;
                    const showAvatar = index === 0 || prevUserId !== msgUserId;

                    return (
                        <div
                            key={msg._id || msg.id || index}
                            className={`message ${isMine ? 'mine' : ''}`}
                        >
                            {showAvatar && !isMine && (
                                <div className="message-avatar">
                                    {msg.avatar ? (
                                        <img src={msg.avatar} alt={msgUsername} />
                                    ) : (
                                        <div className="avatar-placeholder">
                                            {msgUsername[0]?.toUpperCase() || '?'}
                                        </div>
                                    )}
                                </div>
                            )}

                            <div className="message-content">
                                {showAvatar && !isMine && (
                                    <span className="message-username">{msgUsername}</span>
                                )}

                                {msg.replyTo && (
                                    <div className="reply-preview">
                                        Replying to {msg.replyTo.userName || msg.replyTo.username}: {msg.replyTo.content?.substring(0, 50)}...
                                    </div>
                                )}

                                <div className="message-bubble">
                                    <p>{msg.content}</p>
                                </div>

                                <div className="message-meta">
                                    <span className="message-time">{formatTime(msg.createdAt)}</span>

                                    <div className="message-actions">
                                        <button
                                            className="reply-btn"
                                            onClick={() => setReplyingTo(msg)}
                                        >
                                            <span className="material-symbols-outlined" aria-hidden="true">reply</span> Reply
                                        </button>
                                        <div className="reactions">
                                            {['❤️', '👍', '🔥', '😂'].map(emoji => {
                                                const count = msg.reactions?.filter(r => r.emoji === emoji).length || 0;
                                                const hasReacted = msg.reactions?.some(r => {
                                                    const rUserId = r.userId?._id || r.userId;
                                                    return r.emoji === emoji && rUserId?.toString() === currentUserId?.toString();
                                                });

                                                return (
                                                    <button
                                                        key={emoji}
                                                        className={`reaction-btn ${hasReacted ? 'active' : ''}`}
                                                        onClick={() => addReaction(msg._id || msg.id, emoji)}
                                                    >
                                                        {emoji} {count > 0 && count}
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}

                {typingUsers.length > 0 && (
                    <div className="typing-indicator">
                        {typingUsers.map(u => u.userName || u.username).join(', ')}
                        {typingUsers.length === 1 ? ' is' : ' are'} writing<span className="typing-dots" aria-hidden="true"><i /><i /><i /></span>
                    </div>
                )}

                <div ref={messagesEndRef} />
            </div>

            {replyingTo && (
                <div className="replying-to-bar">
                    <span>Replying to <strong>{replyingTo.userName || replyingTo.username}</strong></span>
                    <button onClick={() => setReplyingTo(null)} aria-label="Cancel reply"><span className="material-symbols-outlined" aria-hidden="true">close</span></button>
                </div>
            )}

            <form className="message-input" onSubmit={sendMessage}>
                <input
                    type="text"
                    value={newMessage}
                    onChange={handleInputChange}
                    placeholder={isConnected ? "Type a message..." : "Connecting to lounge..."}
                    disabled={!isConnected}
                />
                <button type="submit" disabled={!newMessage.trim() || !isConnected}>
                    <span>Send</span><span className="material-symbols-outlined" aria-hidden="true">send</span>
                </button>
            </form>
        </div>
    );
};

export default ClubLounge;
