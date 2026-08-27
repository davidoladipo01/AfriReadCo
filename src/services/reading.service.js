import API from "./api";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export const getReadingBook = (id) => {
  const token = cookies.get("token");

  return API.get(`/api/reading/book/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// Add this function for searching books
export const searchBooksAPI = (query) => {
  return API.get(`/api/books/search?q=${encodeURIComponent(query)}`);
};

export const uploadBook = (formData) => {
  const token = cookies.get("token");

  return API.post("/api/reading/upload", formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });
};

export const startReadingBook = (id) => {
  const token = cookies.get("token");

  return API.post(`/api/reading/start/${id}`, null, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getContinueReading = () => {
  const token = cookies.get("token");

  return API.get("/api/reading/continue", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const logReadingActivity = (bookId, minutes) => {
  const token = cookies.get("token");

  return API.post(
    `/api/reading/${bookId}/activity`,
    { minutes },
    { headers: { Authorization: `Bearer ${token}` } }
  );
};

export const getReadingStreak = () => {
  const token = cookies.get("token");

  return API.get("/api/reading/streak", {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const getReadingHeatmap = (days = 364) => {
  const token = cookies.get("token");

  return API.get(`/api/reading/heatmap?days=${days}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const updateReadingProgress = (bookId, data) => {
  const token = cookies.get("token");

  return API.patch(`/api/reading/progress/${bookId}`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const getReadingGoal = () => {
  const token = cookies.get("token");
  return API.get("/api/reading/goal", { headers: { Authorization: `Bearer ${token}` } });
};

export const getTodayActivity = () => {
  const token = cookies.get("token");
  return API.get("/api/reading/today", { headers: { Authorization: `Bearer ${token}` } });
};

export const getProfile = () => {
  const token = cookies.get("token");
  return API.get("/api/reading/profile", {
    headers: { Authorization: `Bearer ${token}` },
  });
};