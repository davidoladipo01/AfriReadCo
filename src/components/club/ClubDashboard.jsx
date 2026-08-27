import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { useSocket } from '../../context/SocketContext';
import ClubLounge from './ClubLounge';
import ChapterRooms from './ChapterRooms';
import ClubVoting from './ClubVoting';
import ClubMembers from './ClubMembers';
import ReadingTracker from './ReadingTracker';
import './ClubDashboard.css';
import API from '../../services/api';
import LoadingState from '../common/LoadingState';


const ClubDashboard = ({ user }) => {
    const { clubId } = useParams();
    const { socket } = useSocket();
    const [club, setClub] = useState(null);
    const [myProgress, setMyProgress] = useState(null);
    const [membersProgress, setMembersProgress] = useState([]);
    const [activeTab, setActiveTab] = useState('lounge');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const token = new Cookies().get("token");


    useEffect(() => {
        if (clubId) {
            const fetchClubData = async () => {
                try {
                    setLoading(true);
                    const res = await API.get(`/api/clubs/getSingleClub/${clubId}`,
                        {
                            headers: {
                                Authorization: `Bearer ${token}`
                            }
                        }
                    );

                    if (res.data.success) {
                        setClub(res.data.club);
                        setMyProgress(res.data.myProgress);
                        setMembersProgress(res.data.membersProgress || []);
                    } else {
                        setError(res.data.message || 'Failed to fetch club');
                    }
                } catch (err) {
                    setError('Failed to load club data from server');
                } finally {
                    setLoading(false);
                }
            };

            fetchClubData();
        }
    }, [clubId]);

    // Real-time progress update listener via Socket
    useEffect(() => {
        if (!socket) return;

        const handleMemberProgressUpdate = (data) => {
            setMembersProgress(prev => {
                const index = prev.findIndex(p => p.userId?._id === data.userId || p.userId === data.userId);
                if (index > -1) {
                    const updated = [...prev];
                    updated[index] = {
                        ...updated[index],
                        currentChapter: data.chapter,
                        percentComplete: data.percentComplete
                    };
                    return updated;
                }
                return prev;
            });
        };

        socket.on('member-progress-update', handleMemberProgressUpdate);

        return () => {
            socket.off('member-progress-update', handleMemberProgressUpdate);
        };
    }, [socket]);


    const handleProgressUpdate = (chapter, percent) => {
        setMyProgress(prev => ({
            ...prev,
            currentChapter: chapter,
            lastChapterRead: chapter,
            percentComplete: percent
        }));
    };

    if (loading) return <LoadingState message="Loading club..." />;
    if (error) return <div className="club-error"><span className="material-symbols-outlined" aria-hidden="true">info</span><p>{error}</p></div>;
    if (!club) return <div className="club-error"><span className="material-symbols-outlined" aria-hidden="true">menu_book</span><p>Club not found</p></div>;

    // Helper for Admin authorization check
    const currentUserId = user?._id || user?.id;
    const isAdmin = club.members?.some(m => {
        const memberId = m.userId?._id || m.userId;
        return memberId?.toString() === currentUserId?.toString() && ['admin', 'moderator'].includes(m.role);
    });

    return (
        <div className="club-dashboard">
            <div className="club-header">
                <div className="club-cover">
                    {club.coverImage ? (
                        <img src={club.coverImage} alt={club.name} />
                    ) : (
                        <div className="club-cover-placeholder" aria-hidden="true"><span className="material-symbols-outlined">menu_book</span></div>
                    )}
                </div>
                <div className="club-info">
                    <h1>{club.name}</h1>
                    <p className="club-description">{club.description}</p>
                    <div className="club-meta">
                        <span className={`privacy-badge ${club.privacy}`}>
                            <span className="material-symbols-outlined" aria-hidden="true">{club.privacy === 'public' ? 'public' : 'lock'}</span>
                            {club.privacy}
                        </span>
                        <span className="club-members"><span className="material-symbols-outlined" aria-hidden="true">groups</span>{club.members?.length || 0} members</span>
                        {club.currentBookId && (
                            <span className="current-book">
                                <span className="material-symbols-outlined" aria-hidden="true">auto_stories</span>
                                <span><small>Currently reading</small>{club.currentBookId.title}</span>
                            </span>
                        )}
                    </div>
                </div>
            </div>

            {club.currentBookId && (
                <ReadingTracker
                    book={club.currentBookId}
                    myProgress={myProgress}
                    membersProgress={membersProgress}
                    clubId={clubId}
                    onProgressUpdate={handleProgressUpdate}
                    isAdmin={isAdmin}
                    schedule={club.schedule}
                />
            )}

            <div className="club-tabs">
                <button
                    className={activeTab === 'lounge' ? 'active' : ''}
                    onClick={() => setActiveTab('lounge')}
                >
                    <span className="material-symbols-outlined" aria-hidden="true">forum</span> Lounge
                </button>
                <button
                    className={activeTab === 'chapters' ? 'active' : ''}
                    onClick={() => setActiveTab('chapters')}
                >
                    <span className="material-symbols-outlined" aria-hidden="true">menu_book</span> Chapters
                </button>
                <button
                    className={activeTab === 'voting' ? 'active' : ''}
                    onClick={() => setActiveTab('voting')}
                >
                    <span className="material-symbols-outlined" aria-hidden="true">how_to_vote</span> Vote
                </button>
                <button
                    className={activeTab === 'members' ? 'active' : ''}
                    onClick={() => setActiveTab('members')}
                >
                    <span className="material-symbols-outlined" aria-hidden="true">groups</span> Members
                </button>
            </div>

            <div className="club-content">
                {activeTab === 'lounge' && (
                    <ClubLounge clubId={clubId} user={user} />
                )}
                {activeTab === 'chapters' && (
                    <ChapterRooms
                        clubId={clubId}
                        user={user}
                        currentBook={club.currentBookId}
                        myProgress={myProgress}
                        schedule={club.schedule}
                    />
                )}
                {activeTab === 'voting' && (
                    <ClubVoting
                        clubId={clubId}
                        user={user}
                        isAdmin={isAdmin}
                    />
                )}
                {activeTab === 'members' && (
                    <ClubMembers members={club.members} />
                )}
            </div>
        </div>
    );
};

export default ClubDashboard;
