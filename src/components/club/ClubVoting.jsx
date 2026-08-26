import React, { useState, useEffect } from 'react';
import { useSocket } from '../../context/SocketContext';
import './ClubVoting.css';
import API from '../../services/api';
import { searchBooksAPI } from '../../services/reading.service';

const ClubVoting = ({ clubId, user, isAdmin }) => {
    const { socket } = useSocket();
    const [voteSession, setVoteSession] = useState(null);
    const [voteCounts, setVoteCounts] = useState([]);
    const [myVote, setMyVote] = useState(null);
    const [totalVotes, setTotalVotes] = useState(0);
    const [loading, setLoading] = useState(true);
    const [showNominateModal, setShowNominateModal] = useState(false);
    const [nominateSearch, setNominateSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        if (clubId) fetchVoteSession();
    }, [clubId]);

    useEffect(() => {
        if (!socket) return;

        const handleVoteUpdate = ({ voteCounts, totalVotes }) => {
            setVoteCounts(voteCounts || []);
            setTotalVotes(totalVotes || 0);
        };

        socket.on('vote-update', handleVoteUpdate);

        return () => {
            socket.off('vote-update', handleVoteUpdate);
        };
    }, [socket]);

    const fetchVoteSession = async () => {
        try {
            setLoading(true);
            const res = await API.get(`/api/clubs/${clubId}/vote-session`);

            if (res.data.success) {
                setVoteSession(res.data.voteSession);
                setVoteCounts(res.data.voteCounts || []);
                setMyVote(res.data.myVote);
                setTotalVotes(res.data.totalVotes || 0);
            }
        } catch (err) {
            console.error('Failed to fetch vote session:', err);
        } finally {
            setLoading(false);
        }
    };

    const castVote = async (bookId) => {
        try {
            const res = await API.post(`/api/clubs/${clubId}/vote`, { bookId });

            if (res.data.success) {
                setMyVote(bookId);
                setVoteCounts(res.data.voteCounts);
            }
        } catch (err) {
            console.error('Vote failed:', err);
        }
    };

    const nominateBook = async (bookId) => {
        try {
            const res = await API.post(`/api/clubs/${clubId}/nominate`, { bookId });

            if (res.data.success) {
                setVoteSession(res.data.voteSession);
                setShowNominateModal(false);
                setNominateSearch('');
                setSearchResults([]);
            }
        } catch (err) {
            console.error('Nomination failed:', err);
        }
    };

    const startVoting = async () => {
        try {
            const res = await API.put(`/api/clubs/${clubId}/vote-session/start-voting`);

            if (res.data.success) {
                setVoteSession(res.data.voteSession);
            }
        } catch (err) {
            console.error('Start voting failed:', err);
        }
    };

    const searchBooks = async (query) => {
        setNominateSearch(query);

        if (query.trim().length < 2) {
            setSearchResults([]);
            return;
        }

        try {
            const response = await searchBooksAPI(query);
            if (response.data.success) {
                setSearchResults(response.data.books || []);
            }
        } catch (err) {
            console.error("Error searching books:", err);
        }
    };
    const getVotePercentage = (bookId) => {
        if (totalVotes === 0) return 0;
        const count = voteCounts.find(v => (v.bookId === bookId || v._id === bookId))?.count || 0;
        return Math.round((count / totalVotes) * 100);
    };

    const getVoteCount = (bookId) => {
        return voteCounts.find(v => (v.bookId === bookId || v._id === bookId))?.count || 0;
    };

    if (loading) return <div className="voting-loading">Loading voting...</div>;

    if (!voteSession) {
        return (
            <div className="club-voting empty">
                <p>No active vote session</p>
                {isAdmin && (
                    <button className="btn-primary" onClick={() => {/* Handle create vote session modal */ }}>
                        Start New Vote
                    </button>
                )}
            </div>
        );
    }

    const isNominating = voteSession.status === 'nominating';
    const isVoting = voteSession.status === 'voting';
    const isClosed = voteSession.status === 'closed';

    return (
        <div className="club-voting">
            <div className="voting-header">
                <h3>🗳️ {isNominating ? 'Nominate Books' : isVoting ? 'Vote for Next Read' : 'Voting Closed'}</h3>

                {isVoting && voteSession.endDate && (
                    <p className="voting-timer">
                        Voting closes: {new Date(voteSession.endDate).toLocaleDateString()}
                    </p>
                )}

                {isAdmin && isNominating && (
                    <button className="btn-primary" onClick={startVoting}>
                        Start Voting Phase
                    </button>
                )}
            </div>

            {isNominating && (
                <>
                    <div className="nominations-list">
                        {voteSession.nominations?.map((nom, index) => {
                            const book = nom.bookId || {};
                            return (
                                <div key={nom._id || index} className="nomination-card">
                                    {book.coverImage && (
                                        <img src={book.coverImage} alt={book.title} />
                                    )}
                                    <div className="nomination-info">
                                        <h4>{book.title || 'Unknown Book'}</h4>
                                        <p>by {book.author || 'Unknown'}</p>
                                        <span className="nominated-by">
                                            Nominated by {nom.nominatedBy?.username || 'Member'}
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <button
                        className="btn-secondary"
                        onClick={() => setShowNominateModal(true)}
                    >
                        + Nominate a Book
                    </button>
                </>
            )}

            {isVoting && (
                <div className="vote-options">
                    {voteSession.nominations?.map((nom, index) => {
                        const bookId = nom.bookId?._id || nom.bookId;
                        const book = nom.bookId || {};
                        const percentage = getVotePercentage(bookId);
                        const count = getVoteCount(bookId);
                        const hasVoted = myVote === bookId;

                        return (
                            <div key={nom._id || index} className={`vote-card ${hasVoted ? 'voted' : ''}`}>
                                <div className="vote-book-info">
                                    {book.coverImage && (
                                        <img src={book.coverImage} alt={book.title} />
                                    )}
                                    <div>
                                        <h4>{book.title || 'Unknown Book'}</h4>
                                        <p>{book.author}</p>
                                    </div>
                                </div>

                                <div className="vote-bar-container">
                                    <div
                                        className="vote-bar"
                                        style={{ width: `${percentage}%` }}
                                    />
                                    <span className="vote-percentage">{percentage}%</span>
                                </div>

                                <div className="vote-footer">
                                    <span>{count} vote{count !== 1 ? 's' : ''}</span>
                                    <button
                                        className={`vote-btn ${hasVoted ? 'voted' : ''}`}
                                        onClick={() => castVote(bookId)}
                                    >
                                        {hasVoted ? '✓ Voted' : 'Vote'}
                                    </button>
                                </div>
                            </div>
                        );
                    })}

                    <p className="total-votes">{totalVotes} total vote{totalVotes !== 1 ? 's' : ''} cast</p>
                </div>
            )}

            {isClosed && voteSession.winnerBookId && (
                <div className="vote-winner">
                    <h4>🏆 Winner</h4>
                    <div className="winner-card">
                        {voteSession.winnerBookId.coverImage && (
                            <img src={voteSession.winnerBookId.coverImage} alt={voteSession.winnerBookId.title} />
                        )}
                        <div>
                            <h3>{voteSession.winnerBookId.title}</h3>
                            <p>{voteSession.winnerBookId.author}</p>
                        </div>
                    </div>
                </div>
            )}

            {showNominateModal && (
                <div className="modal-overlay" onClick={() => setShowNominateModal(false)}>
                    <div className="modal" onClick={(e) => e.stopPropagation()}>
                        <h3>Nominate a Book</h3>
                        <input
                            type="text"
                            placeholder="Search by title or author..."
                            value={nominateSearch}
                            onChange={(e) => searchBooks(e.target.value)}
                        />

                        <div className="search-results">
                            {searchResults.length === 0 && nominateSearch.length >= 2 ? (
                                <p className="no-results">No books found matching "{nominateSearch}"</p>
                            ) : (
                                searchResults.map((book) => {
                                    const authorText = Array.isArray(book.authors)
                                        ? book.authors.join(', ')
                                        : book.author || 'Unknown Author';

                                    return (
                                        <div
                                            key={book._id}
                                            className="search-result"
                                            onClick={() => nominateBook(book._id)}
                                        >
                                            {book.coverImage && <img src={book.coverImage} alt={book.title} />}
                                            <div className="search-result-info">
                                                <span className="search-title">{book.title}</span>
                                                <span className="search-author">{authorText}</span>
                                            </div>
                                        </div>
                                    );
                                })
                            )}
                        </div>
                        <button className="btn-close" onClick={() => setShowNominateModal(false)}>Cancel</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ClubVoting;