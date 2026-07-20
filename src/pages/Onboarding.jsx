import React, { useState } from 'react'
import ProgressBar from '../components/Onboarding/ProgressBar';
import WelcomeStep from '../components/Onboarding/WelcomeStep';
import Preferences from '../components/Onboarding/Preferences';
import FavouriteStep from '../components/Onboarding/FavouriteStep';
import ReadingStep from '../components/Onboarding/ReadingStep';
import LocationStep from '../components/Onboarding/LocationStep';

const TOTAL_STEPS = 6;

const Onboarding = () => {
    const [step, setstep] = useState(1);
    const [formData, setFormData] = useState({

        interests: [],

        favoriteAuthors: [],

        favoriteBooks: [],

        readingGoal: "",

        country: "",

        timezone: "",

        bio: "",

        avatar: "",

    });

    const nextStep = () => {
        if (step < TOTAL_STEPS) {
            setstep(step + 1)
        }
    };

    const previousStep = () => {
        if (step > 1) {
            setstep(step - 1)
        };
    }
    return (
        <section className="onboarding">

            <div className="onboarding-card">

                <ProgressBar
                    currentStep={step}
                    totalSteps={TOTAL_STEPS}
                />

                {step === 1 && (
                    <WelcomeStep
                        nextStep={nextStep}
                    />
                )}

                {step === 2 && (

                    <Preferences

                        nextStep={nextStep}

                        previousStep={previousStep}

                        formData={formData}

                        setFormData={setFormData}

                    />

                )}

                {step === 3 && (

                    <FavouriteStep

                        formData={formData}

                        setFormData={setFormData}

                        nextStep={nextStep}

                        previousStep={previousStep}

                    />

                )}

                {step === 4 && (

                    <ReadingStep

                        formData={formData}

                        setFormData={setFormData}

                        nextStep={nextStep}

                        previousStep={previousStep}

                    />

                )}

                {step === 5 && (

                    <LocationStep

                        formData={formData}

                        setFormData={setFormData}

                        nextStep={nextStep}

                        previousStep={previousStep}

                    />

                )}

            </div>

        </section>
    )
}

export default Onboarding
