import React from "react";
import TodoList from "../TodoList";
import { renderWithProvider } from "../jest/utils";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { screen } from "@testing-library/react";

const buildState = (changes) => ({
  todos: {
    loading: false,
    results: {},
    error: null,
    ...changes,
  },
});

const mockStore = configureStore([thunk]);

describe("TodoList test", () => {
  it("should render", () => {
    const initialState = buildState();
    const store = mockStore(initialState);
    renderWithProvider(<TodoList />, { store });
    expect(screen.getByRole("heading", { name: "Todos" }));
  });

  it("should render loader", () => {
    const initialState = buildState({
      loading: true,
    });
    const store = mockStore(initialState);
    renderWithProvider(<TodoList />, { store });
    expect(
      screen.getByRole("heading", { name: /cargando/gi })
    ).toBeInTheDocument();
  });

  it("should list todos", () => {
    const initialState = buildState({
      results: { 1: { id: 1, body: "test", title: "test" } },
    });
    const store = mockStore(initialState);
    renderWithProvider(<TodoList />, { store });
    expect(screen.getAllByRole("listitem").length).toBe(1);
  });
});
