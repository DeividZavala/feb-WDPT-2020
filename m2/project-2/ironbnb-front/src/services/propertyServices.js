import axios from "axios";
import { base_url } from "./variables";

axios.defaults.withCredentials = true;

export const getProperties = () => {
  return axios.get(`${base_url}/properties`);
};

export const getPropertiesByUser = (id) => {
  return axios.get(`${base_url}/properties?owner=${id}`);
};

export const getPropertyDetail = (id) => {
  return axios.get(`${base_url}/properties/${id}`);
};

export const createProperty = (params) => {
  return axios.post(`${base_url}/properties`, params.property);
};

export const updateProperty = (params) => {
  return axios.patch(`${base_url}/properties/${params.id}`, params.property);
};

export const deleteProperty = (id) => {
  return axios.delete(`${base_url}/properties/${id}`);
};
