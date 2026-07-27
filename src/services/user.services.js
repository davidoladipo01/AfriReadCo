import Cookies from "universal-cookie";
import API from "./api";

const cookies = new Cookies();

export const completeOnboarding = (formData) => {
    return API.patch(
        "/users/onboard",
        formData,
        {
            headers: {
                Authorization: `Bearer ${cookies.get("token")}`
            },
        }
    );
};