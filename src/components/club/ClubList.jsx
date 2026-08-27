import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import API from '../../services/api';
import './ClubList.css';
import Cookies from 'universal-cookie';
import LoadingState from '../common/LoadingState';

const ClubList = ({ user }) => {
    const [clubs, setClubs] = useState([]);
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState('all');
    const [loading, setLoading] = useState(true);
    const token = new Cookies().get("token");

    const userId = user?._id || user?.id;

    useEffect(() => {
        fetchClubs();
    }, []);

    const fetchClubs = async () => {
        try {
            const { data } = await API.get('/api/clubs/getClubs',
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
            if (data.success || Array.isArray(data)) {
                setClubs(data.clubs || data);
            }
        } catch (err) {
            console.error('Failed to fetch clubs:', err);
        } finally {
            setLoading(false);
        }
    };

    const joinClub = async (clubId) => {
        try {
            const { data } = await API.post(
                `/api/clubs/joinClub/${clubId}`,
                null,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            if (data.success || data._id) {
                fetchClubs();
            }
        } catch (err) {
            console.error('Failed to join club:', err);
        }
    };

    const filteredClubs = clubs.filter(club => {
        const nameMatch = club.name?.toLowerCase().includes(search.toLowerCase());
        const descMatch = club.description?.toLowerCase().includes(search.toLowerCase());
        const matchesSearch = nameMatch || descMatch;

        const clubPrivacy = club.privacy?.toLowerCase();
        const matchesFilter =
            filter === 'all' ||
            clubPrivacy === filter ||
            (filter === 'invite-only' && clubPrivacy === 'private');

        return matchesSearch && matchesFilter;
    });

    if (loading) return <LoadingState message="Loading clubs..." />;

    return (
        <div className="club-list">
            <div className="clubs-header">
                <div className="clubs-heading">
                    <span className="material-symbols-outlined clubs-heading-icon" aria-hidden="true">menu_book</span>
                    <div><h2>Book Clubs</h2><p>Find your people. Read together.</p></div>
                </div>
                <Link to="/dashboard/communities/create" className="btn-primary">
                    <span className="material-symbols-outlined" aria-hidden="true">add</span> Create Club
                </Link>
            </div>

            <div className="clubs-filters">
                <label className="search-field">
                    <span className="material-symbols-outlined" aria-hidden="true">search</span>
                    <input type="text" placeholder="Search clubs..." value={search} onChange={(e) => setSearch(e.target.value)} className="search-input" />
                </label>
                <label className="filter-field">
                    <span className="material-symbols-outlined" aria-hidden="true">tune</span>
                    <select value={filter} onChange={(e) => setFilter(e.target.value)} aria-label="Filter clubs">
                        <option value="all">All Clubs</option><option value="public">Public</option><option value="invite-only">Invite Only</option>
                    </select>
                </label>
            </div>

            <div className="clubs-grid">
                {filteredClubs.map(club => {
                    const isMember = club.members?.some(m => {
                        const memberId = m.userId?._id || m.userId || m.user?._id || m.user || m;
                        return memberId === userId;
                    });

                    const isPrivate = club.privacy === 'private' || club.privacy === 'invite-only';

                    return (
                        <div key={club._id} className="club-card">
                            <div className="club-card-cover">
                                {club.coverImage ? (
                                    <img src={club.coverImage} alt={club.name} />
                                ) : (
                                    <div className="club-card-placeholder" aria-hidden="true"><span className="material-symbols-outlined">menu_book</span></div>
                                )}
                            </div>
                            <div className="club-card-content">
                                <h3>{club.name}</h3>
                                <p className="club-card-desc">
                                    {club.description
                                        ? `${club.description.substring(0, 100)}${club.description.length > 100 ? '...' : ''}`
                                        : 'No description available.'}
                                </p>

                                <div className="club-card-meta">
                                    <span className={`privacy-tag ${club.privacy}`}>
                                        <span className="material-symbols-outlined" aria-hidden="true">{club.privacy === 'public' ? 'public' : 'lock'}</span>
                                        {club.privacy}
                                    </span>
                                    <span className="members-count"><span className="material-symbols-outlined" aria-hidden="true">groups</span>{club.members?.length || 0} members</span>
                                </div>

                                {(club.currentBookId || club.currentBook) && (
                                    <div className="club-current-book">
                                        <span className="material-symbols-outlined" aria-hidden="true">auto_stories</span>
                                        <small><span>Currently reading</span>{(club.currentBookId || club.currentBook).title}</small>
                                    </div>
                                )}

                                <div className="club-card-actions">
                                    {isMember ? (
                                        <Link to={`/dashboard/communities/${club._id}`} className="btn-enter">
                                            Enter Club <span className="material-symbols-outlined" aria-hidden="true">arrow_forward</span>
                                        </Link>
                                    ) : (
                                        <button
                                            className="btn-join"
                                            onClick={() => joinClub(club._id)}
                                            disabled={isPrivate}
                                        >
                                            {isPrivate ? 'Invite Only' : 'Join Club'}
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            {!filteredClubs.length && (
                <div className="clubs-empty">
                    <span className="material-symbols-outlined" aria-hidden="true">menu_book</span>
                    <h3>No clubs found</h3>
                    <p>Try a different search or browse another club type.</p>
                </div>
            )}
        </div>
    );
};

export default ClubList;
