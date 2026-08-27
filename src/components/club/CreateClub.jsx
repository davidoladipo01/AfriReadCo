import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../../services/api';
import './CreateClub.css';
import Cookies from 'universal-cookie';

const CreateClub = ({ user }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        privacy: 'public',
        coverImage: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const token = new Cookies().get("token");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        // Sanitize payload to omit empty strings for optional URL fields
        const payload = {
            name: formData.name.trim(),
            description: formData.description.trim(),
            privacy: formData.privacy,
            ...(formData.coverImage.trim() && { coverImage: formData.coverImage.trim() })
        };

        try {
            const { data } = await API.post('/api/clubs/createClub', payload,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            const newClubId = data.club?._id || data._id;
            if (newClubId) {
                navigate(`/dashboard/communities/${newClubId}`);
                // path="communities/:clubId"

            } else {
                throw new Error('Club created, but no ID returned.');
            }
        } catch (err) {
            console.error('Failed to create club:', err);
            setError(err.response?.data?.message || err.message || 'Failed to create club. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="create-club">
            <h2>Create a New Book Club</h2>

            {error && <div className="error-banner">{error}</div>}

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Club Name *</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g., Nigerian Lit Lovers"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="description">Description *</label>
                    <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="What is this club about? What kind of books will you read?"
                        rows={4}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="privacy">Privacy Level</label>
                    <select
                        id="privacy"
                        name="privacy"
                        value={formData.privacy}
                        onChange={handleChange}
                    >
                        <option value="public">Public — Anyone can join</option>
                        <option value="private">Invite Only / Private — Requires approval</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="coverImage">Cover Image URL</label>
                    <input
                        id="coverImage"
                        name="coverImage"
                        type="url"
                        value={formData.coverImage}
                        onChange={handleChange}
                        placeholder="https://example.com/image.jpg"
                    />
                </div>

                <div className="form-actions">
                    <button
                        type="button"
                        className="btn-secondary"
                        onClick={() => navigate('/dashboard/communities')}
                        disabled={loading}
                    >
                        Cancel
                    </button>
                    <button type="submit" className="btn-primary" disabled={loading}>
                        {loading ? 'Creating...' : 'Create Club'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateClub;