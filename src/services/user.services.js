import Cookies from "universal-cookie";
import API from "./api";

const cookies = new Cookies();

export const completeOnboarding = (formData) => {
    return API.patch(
        "/api/auth/users/onboard",
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

    return API.get("/api/auth/me", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

};

export const logoutUser = async () => {
  try {
    await API.post("/api/auth/logout");
  } catch (error) {
    console.error(error);
  }

  cookies.remove("token", { path: "/" });
};