import axios from "axios";

export const getTodos = () => {
  return axios.get("http://localhost:4000/todos");
};

export const createTodo = (data) => {
  return axios.post("http://localhost:4000/todos", data);
};
