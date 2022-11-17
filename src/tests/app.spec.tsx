import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "../App";

describe("TodoApp", () => {
  it("renders app", () => {
    const app = render(<App />);
    expect(app).not.toBeUndefined();
  });

  it("renders initial items", () => {
    render(<App />);

    expect(screen.getByText("Buy milk")).toBeDefined();
    const buyMilkTodo = screen.getByTestId("toggle0");
    expect(buyMilkTodo).toBeChecked();

    expect(screen.getByText("Buy bread")).toBeDefined();
    const buyBreadTodo = screen.getByTestId("toggle1");
    expect(buyBreadTodo).not.toBeChecked();
  });

  it("can add new item", () => {
    render(<App />);

    const todoInput = screen.getByTestId("todoInput");
    fireEvent.change(todoInput, { target: { value: "Do stuff" } });
    const todoSubmit = screen.getByTestId("todoSubmit");
    fireEvent.click(todoSubmit);

    expect(screen.getByText("Do stuff")).toBeDefined();
  });

  it("can delete item", () => {
    render(<App />);

    const deleteItem = screen.queryByTestId("delete0");
    fireEvent.click(deleteItem as HTMLElement);

    expect(screen.queryByText("Buy milk")).not.toBeInTheDocument();
  });

  it("can check item", () => {
    render(<App />);

    const buyBreadTodo = screen.getByTestId("toggle1");
    expect(buyBreadTodo).not.toBeChecked();

    fireEvent.click(buyBreadTodo);
    expect(buyBreadTodo).toBeChecked();
  });
});
