import React, { createContext, useState, useEffect } from "react";
import { getTodos } from "./services/todosService";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos().then((res) => {
      setTodos(res.data);
    });
  }, []);

  return (
    <AppContext.Provider value={{ todos, setTodos }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
