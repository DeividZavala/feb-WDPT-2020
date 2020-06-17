import React from "react";
import App from "./App";
import { renderWithProvider } from "./jest/utils";
import createStore from "redux-mock-store";
import thunk from "redux-thunk";

// fake create store
const mockStore = createStore([thunk]);

test("renders learn react link", () => {
  const store = mockStore({ todos: { results: {} } });
  const { getByText } = renderWithProvider(<App />, { store });
  const title = getByText(/deivid/i);
  expect(title).toBeInTheDocument();
});
