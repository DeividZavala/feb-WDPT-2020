import React from "react";
import App from "../App";
import { renderWithProvider, mockInitialState } from "../jest/utils";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

const mockStore = configureStore([thunk]);

test("render counter component", () => {
  const store = mockStore(mockInitialState);
  const { getByText } = renderWithProvider(<App />, { store });
  const counter = getByText("0");
  expect(counter).toBeInTheDocument();
});
