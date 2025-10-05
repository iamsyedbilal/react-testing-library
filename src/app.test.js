import { render, screen } from "@testing-library/react";
// Import that for the toBeInTheDocument() as it is not a in-build method
import "@testing-library/jest-dom";
import App from "./App";

test("render react component", () => {
  render(<App />);
  const element = screen.getByText(/Testing/i); //For case sensitive we add i
  const title = screen.getByTitle(/AI generated image/);
  expect(element).toBeInTheDocument();
  expect(title).toBeInTheDocument();
});

// Test case for input box
test("Input box", () => {
  render(<App />);
  let checkInput = screen.getByRole("textbox");
  let checkInputPlaceholder = screen.getByPlaceholderText(
    "Enter the image name"
  );
  expect(checkInput).toBeInTheDocument();
  expect(checkInputPlaceholder).toBeInTheDocument();
  expect(checkInput).toHaveAttribute("name", "Image name");
  //`value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`.
  expect(checkInput).toHaveAttribute("value", "anime");
});
