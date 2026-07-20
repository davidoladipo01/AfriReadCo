import React from 'react'

const WelcomeStep = ({ nextStep }) => {
  return (
        <div className="welcome-step">

            <h1>
                Welcome to AfriReadCo
            </h1>

            <p>

                Let's personalize your reading experience.

            </p>

            <button
                className="primary-btn"
                onClick={nextStep}
            >
                Get Started
            </button>

        </div>
  )
}

export default WelcomeStep
