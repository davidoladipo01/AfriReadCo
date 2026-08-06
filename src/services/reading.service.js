import API from "./api";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export const getReadingBook = (id) => {
  const token = cookies.get("token");

  return API.get(
    `/api/reading/book/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};