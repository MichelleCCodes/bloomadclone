import { render, screen } from "@testing-library/react";
import App from "./App";

test("application renders main component successfully", () => {
  render(<App />);
});

test("main component includes description of developer", () => {
  render(<App />);
  const description = screen.getByText(/Michelle is an ambitious, curious software developer who works closely with React./i);
  expect(description).toBeInTheDocument();
});

test("main message passes spell check", () => {
  render(<App />);
  const cbt = screen.getByText(/cognitive behavioral therapy/i);
  expect(cbt).toBeInTheDocument();
});

test("description suggests a developer who can help", () => {
  render(<App />);
  const linkElement = screen.getByText(/more/i);
  expect(linkElement).toBeInTheDocument();
});
