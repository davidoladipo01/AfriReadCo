const countries = [
    "Nigeria",
    "Ghana",
    "Kenya",
    "South Africa",
    "Uganda",
    "Rwanda",
    "Cameroon",
    "Other"
];

 const LocationStep =({ formData, setFormData, nextStep, previousStep }) =>{

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

    };

    return (

        <div className="location-step">

            <h2>
                Where are you reading from?
            </h2>

            <p>
                This helps us recommend clubs and schedule live discussions.
            </p>

            <div className="field">

                <label>Country</label>

                <select
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                >

                    <option value="">
                        Select your country
                    </option>

                    {countries.map(country => (

                        <option
                            key={country}
                            value={country}
                        >

                            {country}

                        </option>

                    ))}

                </select>

            </div>

            <div className="field">

                <label>Timezone</label>

                <select
                    name="timezone"
                    value={formData.timezone}
                    onChange={handleChange}
                >

                    <option value="">
                        Select timezone
                    </option>

                    <option value="Africa/Lagos">
                        Africa/Lagos (UTC +1)
                    </option>

                    <option value="Africa/Accra">
                        Africa/Accra (UTC +0)
                    </option>

                    <option value="Africa/Nairobi">
                        Africa/Nairobi (UTC +3)
                    </option>

                    <option value="Africa/Johannesburg">
                        Africa/Johannesburg (UTC +2)
                    </option>

                </select>

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
                    disabled={
                        !formData.location ||
                        !formData.timezone
                    }
                    onClick={nextStep}
                >
                    Continue
                </button>

            </div>

        </div>

    );

 }

export default LocationStep;