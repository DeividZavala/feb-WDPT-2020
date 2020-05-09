import axios from "axios";

axios.defaults.withCredentials = true;

export const createReservation = (reservation) => {
  return axios.post("http://localhost:3000/reservations", reservation);
};
