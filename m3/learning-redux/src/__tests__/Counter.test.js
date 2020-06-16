import React from "react";
import Counter from "../Counter";
import { renderWithProvider } from "../jest/utils";
import { screen, fireEvent } from "@testing-library/react";

describe("Counter component", () => {
  it("should render with initial state", () => {
    renderWithProvider(<Counter />);
    expect(screen.getByRole("heading", { name: "0" })).toBeInTheDocument();
  });

  it("should dispatch increment action", () => {
    renderWithProvider(<Counter />);
    const increment = screen.getByRole("button", { name: "+" });
    fireEvent.click(increment);
    expect(screen.getByRole("heading", { name: "1" })).toBeInTheDocument();
  });

  it("should dispatch decrement action", () => {
    renderWithProvider(<Counter />);
    const decrement = screen.getByRole("button", { name: "-" });
    fireEvent.click(decrement);
    expect(screen.getByRole("heading", { name: "-1" })).toBeInTheDocument();
  });
});
