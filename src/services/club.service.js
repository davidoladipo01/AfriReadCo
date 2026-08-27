import API from "./api";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export const getMyActiveClub = () => {
  const token = cookies.get("token");
  return API.get("/api/clubs/my-active", { headers: { Authorization: `Bearer ${token}` } });
};