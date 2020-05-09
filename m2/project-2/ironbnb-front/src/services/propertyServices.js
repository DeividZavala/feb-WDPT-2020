import axios from "axios";

axios.defaults.withCredentials = true;

export const getProperties = () => {
  return axios.get("http://localhost:3000/properties/");
};
