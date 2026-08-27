import React, { useState, useEffect } from 'react';
import { useSocket } from '../../context/SocketContext';
import API from '../../services/api';
import './ReadingTracker.css';
import Cookies from 'universal-cookie';

const ReadingTracker = ({
    book,
    myProgress,
    membersProgress = [],
    clubId,
    onProgressUpdate,
    isAdmin,
    schedule = []
}) => {
    const { socket } = useSocket();

    // Dynamic chapter count fallback to book model or default 10
    const totalChapters = book?.totalChapters || book?.chaptersCount || 12;

    const [currentChapter, setCurrentChapter] = useState(
        myProgress?.lastChapterRead || myProgress?.currentChapter || 0
    );
    const [showUpdateModal, setShowUpdateModal] = useState(false);

    // Keep internal chapter state synced if myProgress updates externally
    useEffect(() => {
        if (myProgress) {
            setCurrentChapter(myProgress.lastChapterRead || myProgress.currentChapter || 0);
        }
    }, [myProgress]);

    const percentComplete = myProgress?.percentComplete || Math.round((currentChapter / totalChapters) * 100);

    const handleSaveProgress = async () => {
        const percent = Math.round((currentChapter / totalChapters) * 100);

        // 1. Emit Socket Event for real-time room updates
        if (socket) {
            socket.emit('update-progress', {
                clubId,
                bookId: book._id,
                chapter: currentChapter,
                percentComplete: percent
            });
        }

        // 2. Persist to API via centralized Axios client
        try {
            const token = new Cookies().get("token");

            await API.put(
                `/api/clubs/progress/${clubId}`,
                {
                    bookId: book._id,
                    chapter: currentChapter,
                    percentComplete: percent,
                },
                { headers: { Authorization: `Bearer ${token}` } }
            );

            if (onProgressUpdate) {
                onProgressUpdate(currentChapter, percent);
            }
        } catch (err) {
            console.error('Failed to update reading progress:', err);
        } finally {
            setShowUpdateModal(false);
        }
    };

    const getMemberStatus = (memberProgress) => {
        if (!memberProgress) return { label: 'Not started', color: '#999' };
        if (memberProgress.status === 'completed' || memberProgress.percentComplete === 100) {
            return { label: 'Finished', color: '#4CAF50' };
        }
        if (memberProgress.percentComplete > 50) return { label: 'On track', color: '#2196F3' };
        return { label: 'Reading', color: '#FF9800' };
    };

    if (!book) return <div className="reading-tracker">No active book selected.</div>;

    return (
        <div className="reading-tracker">
            <div className="tracker-book">
                {book.coverImage && (
                    <img src={book.coverImage} alt={book.title} className="tracker-cover" />
                )}
                <div className="tracker-info">
                    <h3>📖 Currently Reading</h3>
                    <h4>{book.title}</h4>
                    <p>{Array.isArray(book.authors) ? book.authors.join(', ') : book.author}</p>
                </div>
            </div>

            <div className="tracker-progress">
                <div className="my-progress">
                    <div className="progress-header">
                        <span>Your Progress</span>
                        <span className="progress-percent">{percentComplete}%</span>
                    </div>
                    <div className="progress-bar">
                        <div className="progress-fill" style={{ width: `${percentComplete}%` }} />
                    </div>
                    <p className="progress-detail">
                        Chapter {currentChapter} of {totalChapters}
                    </p>
                    <button className="btn-update" onClick={() => setShowUpdateModal(true)}>
                        Update Progress
                    </button>
                </div>

                <div className="members-progress">
                    <h4>Club Progress</h4>
                    <div className="members-list">
                        {membersProgress.map((mp, index) => {
                            const status = getMemberStatus(mp);
                            const userObj = mp.userId || mp.user || {};

                            return (
                                <div key={mp._id || index} className="member-progress-item">
                                    <img
                                        src={userObj.avatar || '/default-avatar.png'}
                                        alt={userObj.username || 'Member'}
                                        className="member-avatar"
                                    />
                                    <div className="member-progress-bar">
                                        <div
                                            className="member-fill"
                                            style={{
                                                width: `${mp.percentComplete || 0}%`,
                                                backgroundColor: status.color
                                            }}
                                        />
                                    </div>
                                    <span className="member-status" style={{ color: status.color }}>
                                        {status.label}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {schedule && schedule.length > 0 && (
                <div className="reading-schedule">
                    <h4>📅 Reading Schedule</h4>
                    <div className="schedule-timeline">
                        {schedule.map((item, index) => {
                            const now = new Date();
                            const isActive = now >= new Date(item.startDate) && now <= new Date(item.endDate);
                            const isPast = now > new Date(item.endDate);

                            return (
                                <div key={item._id || index} className={`schedule-item ${isActive ? 'active' : ''} ${isPast ? 'past' : ''}`}>
                                    <div className="schedule-dot" />
                                    <div className="schedule-content">
                                        <span className="schedule-range">
                                            {item.chapterRange?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                                        </span>
                                        <span className="schedule-date">
                                            {new Date(item.startDate).toLocaleDateString()} - {new Date(item.endDate).toLocaleDateString()}
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}

            {showUpdateModal && (
                <div className="modal-overlay" onClick={() => setShowUpdateModal(false)}>
                    <div className="modal" onClick={e => e.stopPropagation()}>
                        <h3>Update Your Progress</h3>
                        <p>{book.title}</p>

                        <div className="chapter-selector">
                            <label>Current Chapter:</label>
                            <input
                                type="range"
                                min="0"
                                max={totalChapters}
                                value={currentChapter}
                                onChange={(e) => setCurrentChapter(parseInt(e.target.value, 10))}
                            />
                            <span className="chapter-display">
                                Chapter {currentChapter} of {totalChapters}
                            </span>
                        </div>

                        <div className="modal-actions">
                            <button className="btn-secondary" onClick={() => setShowUpdateModal(false)}>
                                Cancel
                            </button>
                            <button className="btn-primary" onClick={handleSaveProgress}>
                                Save Progress
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ReadingTracker;