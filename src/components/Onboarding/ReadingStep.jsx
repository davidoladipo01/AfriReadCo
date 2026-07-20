import React from 'react'

const goals = [
    2,
    4,
    6,
    12,
    18,
    24,
    36,
    52
];

const ReadingStep = ({ formData,setFormData, nextStep, previousStep }) => {

    const selectGoal = (goal) => {
        setFormData({
            ...formData,
            readingGoal: goal
        });
    }

    return (
         <div className="reading-goal-step">

            <h2>
                Reading Goal
            </h2>

            <p>

                How many books would you like to finish this year?

            </p>

            <div className="goal-grid">

                {goals.map(goal => (

                    <button
                        key={goal}
                        type="button"
                        onClick={() => selectGoal(goal)}
                        className={
                            formData.readingGoal === goal
                                ? "goal-card active"
                                : "goal-card"
                        }
                    >

                        <h3>{goal}</h3>

                        <span>Books</span>

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
                    disabled={!formData.readingGoal}
                    onClick={nextStep}
                >
                    Continue
                </button>

            </div>

        </div>
    )
}

export default ReadingStep
