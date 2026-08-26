import API from "./api";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export const getBooks = () => {
  return API.get("/api/books");
};

export const getBookById = (id) => {
  return API.get(`/api/books/${id}`);
};

export const searchBooks = (query) => {
  return API.get(`/api/books/search?q=${query}`);
};

export const getFeaturedBooks = () => {
  return API.get("/api/books/featured");
};

export const getDiscoverBooks = () => {
  return API.get("/api/books/discover");
};

export const shelveBook = (id, status = "want_to_read") => {
  const token = cookies.get("token");

  return API.post(
    `/api/books/${id}/shelf`,
    { status },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const getShelfStatus = (id) => {
  const token = cookies.get("token");

  return API.get(`/api/books/${id}/shelf`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getShelf = (status) => {
  const token = cookies.get("token");

  return API.get(`/api/books/shelf${status ? `?status=${status}` : ""}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const removeFromShelf = (id) => {
  const token = cookies.get("token");

  return API.delete(`/api/books/${id}/shelf`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};