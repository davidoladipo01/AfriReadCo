import API from "./api";

export const completeOnboarding = (formData) => {

    return API.patch(
        "/users/completeOnboarding",
        formData,
        {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }
    );

};