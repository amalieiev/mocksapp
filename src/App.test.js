import { render, screen } from "@testing-library/react";
import App from "./App";
import { Auth } from "./hooks/auth";

it("renders learn react link", async () => {
  render(
    <Auth>
      <App />
    </Auth>
  );
  expect(screen.getByText(/Todo Application/i)).toBeInTheDocument();
  expect(await screen.findAllByRole("listitem")).toBeDefined();
  expect(screen.getByText(/Learn React/)).toBeInTheDocument();
  expect(screen.getByText(/Learn Hooks/)).toBeInTheDocument();
});
