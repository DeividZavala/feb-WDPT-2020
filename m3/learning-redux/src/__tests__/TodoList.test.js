import React from "react";
import TodoList from "../TodoList";
import { renderWithProvider } from "../jest/utils";
import createMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { screen } from "@testing-library/react";

const mockStore = createMockStore([thunk]);

const buildState = (changes) => ({
  todos: {
    results: {},
    loading: false,
    ...changes,
  },
});

describe("TodoList component", () => {
  it("should render", () => {
    const initialState = buildState();
    const store = mockStore(initialState);
    renderWithProvider(<TodoList />, { store });
    expect(screen.getByRole("heading", { name: "Todos" })).toBeInTheDocument();
  });

  it("should render loaders", () => {
    const initialState = buildState({ loading: true });
    const store = mockStore(initialState);
    renderWithProvider(<TodoList />, { store });
    expect(
      screen.getByRole("heading", { name: /cargando/gi })
    ).toBeInTheDocument();
  });

  it("should render todos", () => {
    const initialState = buildState({
      results: { 1: { id: 1, title: "todo title", body: "todo body" } },
    });
    const store = mockStore(initialState);
    renderWithProvider(<TodoList />, { store });
    expect(screen.getAllByRole("listitem").length).toBe(1);
  });
});
