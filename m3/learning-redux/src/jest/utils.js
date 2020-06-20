import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { rootReducer } from "../redux/store";
import { createStore } from "redux";

export const renderWithProvider = (
  component,
  { store = createStore(rootReducer), ...renderOptions } = {}
) => {
  return render(<Provider store={store}>{component}</Provider>, {
    ...renderOptions,
  });
};

//export const renderWithRouter = (component) => <BrowserRouter>{component}</BrowserRouter>;
