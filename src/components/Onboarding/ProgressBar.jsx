import React from 'react'

const ProgressBar = ({currentStep, totalSteps}) => {

    const percentage = (currentStep / totalSteps) * 100
  return (
        <div className="progress-wrapper">

            <div className="progress-track">

                <div
                    className="progress-fill"
                    style={{ width: `${percentage}%` }}
                />

            </div>

            <p>
                Step {currentStep} of {totalSteps}
            </p>

        </div>
  )
}

export default ProgressBar
