import API from "./api";

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