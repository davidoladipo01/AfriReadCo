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

export const getCurrentUser = () => {

    const token = new Cookies().get("token");

    return API.get("/me", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

};