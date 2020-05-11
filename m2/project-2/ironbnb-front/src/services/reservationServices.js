import axios from "axios";
import { base_url } from "./variables";

axios.defaults.withCredentials = true;

export const getUserReservations = () => {
  return axios.get(`${base_url}/reservations`);
};

export const createReservation = (reservation) => {
  return axios.post(`${base_url}/reservations`, reservation);
};

export const updateReservation = (reservation) => {
  return axios.patch(
    `${base_url}/reservations/${reservation._id}`,
    reservation
  );
};

export const deleteReservation = (id) => {
  return axios.delete(`${base_url}/reservations/${id}`);
};
