import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import UserForm from "./UserForm";

test("It shows two inputs and a button", () => {
  // 1. render the component
  render(<UserForm />);

  // 2. Manipulate a component or find an element in it.
  const inputs = screen.getAllByRole("textbox");
  const button = screen.getByRole("button");

  // 3. Assertion: make sure component is doing what we expected.
  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});
