import React from 'react'

const genres = [
  "African Fiction",
  "Historical Fiction",
  "Afrofuturism",
  "Poetry",
  "Fantasy",
  "Mystery",
  "Romance",
  "Biography",
  "Business",
  "Politics",
  "Children's Literature",
  "Self Help"
];


const Preferences = ({ nextStep, previousStep, formData, setFormData }) => {
    const toggleGenre = (genre)=>{
        const exists = formData.interests.includes(genre);

        if(exists){
            setFormData({
                ...formData,
                interests: formData.interests.filter(item => item !== genre)
            })
        }else{
            setFormData({
                ...formData,
                interests: [...formData.interests, genre]
            })
        }
    };
  return (
  <div className="preferences-step">

      <h2>Choose Your Favorite Genres</h2>

      <p>
        Select as many as you like.
      </p>

      <div className="genre-container">

        {genres.map((genre) => (

          <button
            key={genre}
            type="button"
            onClick={() => toggleGenre(genre)}
            className={
              formData.interests.includes(genre)
                ? "genre-chip active"
                : "genre-chip"
            }
          >

            {genre}

          </button>

        ))}

      </div>

      <div className="step-buttons">

        <button
          className="secondary-btn"
          onClick={previousStep}
        >
          Back
        </button>

        <button
          className="primary-btn"
          onClick={nextStep}
          disabled={formData.interests.length === 0}
        >
          Continue
        </button>

      </div>

    </div>
  )
}

export default Preferences
