import React, { useRef, useState } from 'react'
import { toast } from 'react-toastify';

const ProfileStep = ({ formData, setFormData, previousStep, finishOnboarding, loading }) => {

  const fileInputRef = useRef(null);
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {

    const file = e.target.files[0];

    if (!file) return;

    if (!file.type.startsWith('image/')) {
      toast.error('Error: Please select an image file only.');
      e.target.value = ''; // Reset the input so they can try again
      return;
    }

    setPreview(URL.createObjectURL(file));

    setFormData({
      ...formData,
      avatar: file
    });

  };

  return (
    <div className="profile-step">

      <h2>You're All Set! 🎉</h2>

      <p>
        Add a profile picture and tell the community a little about yourself.
      </p>

      <div
        className="avatar-container"
        onClick={() => fileInputRef.current.click()}
      >

        {

          preview ?

            <img
              src={preview}
              alt="Profile Preview"
            />

            :

            <div className="avatar-placeholder">

              <span>+</span>

              <small>Add Photo</small>

            </div>

        }

      </div>

      <input
        ref={fileInputRef}
        hidden
        type="file"
        accept="image/*"
        onChange={handleImageChange}
      />

      <textarea
        placeholder="Tell readers about yourself..."
        maxLength={250}
        value={formData.bio}
        onChange={(e) =>
          setFormData({
            ...formData,
            bio: e.target.value
          })
        }
      />

      <p className="bio-count">

        {formData.bio.length}/250

      </p>

      <div className="step-buttons">

        <button
          className="secondary-btn"
          onClick={previousStep}
        >
          Back
        </button>

        <button
          className="primary-btn"
          onClick={finishOnboarding}
          disabled={loading}
        >

          {

            loading ?

              "Finishing..."

              :

              "Finish"

          }

        </button>

      </div>

    </div>
  )
}

export default ProfileStep
