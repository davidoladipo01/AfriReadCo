import React, { useState } from 'react'
import ProgressBar from '../components/Onboarding/ProgressBar';
import WelcomeStep from '../components/Onboarding/WelcomeStep';
import Preferences from '../components/Onboarding/Preferences';
import FavouriteStep from '../components/Onboarding/FavouriteStep';
import ReadingStep from '../components/Onboarding/ReadingStep';
import LocationStep from '../components/Onboarding/LocationStep';
import ProfileStep from '../components/Onboarding/ProfileStep';
import { toast } from 'react-toastify';
import { completeOnboarding } from '../services/user.services';
import Celebration from '../components/Onboarding/Celebration';
import { useNavigate } from 'react-router-dom';

const TOTAL_STEPS = 6;

const Onboarding = () => {
    const [loading, setLoading] = useState(false);
    const [showCelebration, setShowCelebration] = useState(false);
    const [step, setstep] = useState(1);
    const navigate = useNavigate()
    const [formData, setFormData] = useState({

        interests: [],

        favoriteAuthors: [],

        favoriteBooks: [],

        readingGoal: "",

        genres: [],

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

    const finishOnboarding = async () => {

        try {

            setLoading(true);

            const data = new FormData();

            data.append("avatar", formData.avatar);

            data.append("bio", formData.bio);

            data.append(
                "genres",
                JSON.stringify(formData.interests)
            );

            data.append(
                "favoriteAuthors",
                JSON.stringify(formData.favoriteAuthors)
            );

            data.append(
                "favoriteBooks",
                JSON.stringify(formData.favoriteBooks)
            );

            data.append(
                "readingGoal",
                formData.readingGoal
            );

            data.append(
                "location",
                formData.location
            );

            data.append(
                "timezone",
                formData.timezone
            );

            await completeOnboarding(data);

            setShowCelebration(true);

            toast.success("Welcome to AfriReadCo!");

            setTimeout(() => {
                navigate("/dashboard");
            }, 2500);

        }

        catch (error) {

            console.error(error);

            toast.error("Unable to complete onboarding.");

        }

        finally {

            setLoading(false);

        }

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

                        loading={loading}

                    />

                )}

                {step === 6 && (

                    <ProfileStep

                        formData={formData}

                        setFormData={setFormData}

                        previousStep={previousStep}

                        finishOnboarding={finishOnboarding}

                        loading={loading}

                    />

                )}
                {

                    showCelebration &&

                    <Celebration />

                }


            </div>

        </section>
    )
}

export default Onboarding
