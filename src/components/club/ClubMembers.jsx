import React from 'react';
import './ClubMembers.css';

const ClubMembers = ({ members = [] }) => {
    const getRoleBadge = (role) => {
        switch (role?.toLowerCase()) {
            case 'admin': 
                return <span className="role-badge admin">👑 Admin</span>;
            case 'moderator': 
            case 'mod': 
                return <span className="role-badge moderator">🛡️ Mod</span>;
            default: 
                return <span className="role-badge member">👤 Member</span>;
        }
    };

    const formatDate = (dateString) => {
        if (!dateString) return 'recently';
        const date = new Date(dateString);
        return isNaN(date.getTime()) ? 'recently' : date.toLocaleDateString();
    };

    if (!members.length) {
        return (
            <div className="club-members">
                <h3>👥 Members (0)</h3>
                <p className="no-members">No members found.</p>
            </div>
        );
    }

    return (
        <div className="club-members">
            <h3>👥 Members ({members.length})</h3>
            <div className="members-grid">
                {members.map((member, index) => {
                    // Extract user details whether populated or direct
                    const user = member.userId || member.user || member;
                    const username = user.username || 'Unknown';
                    const avatar = user.avatar;
                    const memberKey = member._id || user._id || index;

                    return (
                        <div key={memberKey} className="member-card">
                            <div className="member-avatar-large">
                                {avatar ? (
                                    <img src={avatar} alt={username} />
                                ) : (
                                    <div className="avatar-placeholder-large">
                                        {username[0]?.toUpperCase() || '?'}
                                    </div>
                                )}
                            </div>
                            <div className="member-info">
                                <h4>{username}</h4>
                                {getRoleBadge(member.role)}
                                <span className="joined-date">
                                    Joined {formatDate(member.joinedAt)}
                                </span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ClubMembers;