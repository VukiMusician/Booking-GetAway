import axios from "axios";

const apiClient = axios.create({
  baseURL: `http://localhost:3000`,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getEvents(perPage, page) {
    return apiClient.get();
  },
  getEvent(id) {
    return apiClient.get("/hotels/" + id);
  },
};
