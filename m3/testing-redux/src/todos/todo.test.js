import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Todos from "./index";

describe("TODO component", () => {
  it("should add a todo", () => {
    // rendering component
    render(<Todos />);
    // finding elements
    const input = screen.getByLabelText("Todo:");
    const btn = screen.getByText("Add Todo");

    // simulating the change event on the input
    fireEvent.change(input, { target: { value: "new todo" } });

    // simulating click event on the button
    fireEvent.click(btn);

    // assertions
    expect(screen.getByText("new todo")).toBeInTheDocument();
  });
});
