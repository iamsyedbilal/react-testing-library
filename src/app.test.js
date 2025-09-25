import { render, screen } from "@testing-library/react";
// Import that for the toBeInTheDocument() as it is not a in-build method
import "@testing-library/jest-dom";
import App from "./App";

test("render react component", () => {
  render(<App />);
  const element = screen.getByText(/Testing/);
  expect(element).toBeInTheDocument();
});
