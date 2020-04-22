import axios from "axios";

export const getCharacters = () => {
  return axios.get("https://rickandmortyapi.com/api/character");
};

export const getCharacter = (id) => {
  return axios.get(`https://rickandmortyapi.com/api/character/${id}`);
};
