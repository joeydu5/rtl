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

test("it may not be the best way to test onUserAdd function", () => {
  // 1. define a mock function
  const mockFunction = jest.fn();

  // 2. render component
  render(<UserForm onUserAdd={mockFunction} />);

  // 3. find two inputs
  //   const [nameInput, emailInput] = screen.getAllByRole("textbox");
  //   const nameInput = screen.getByRole("textbox", { name: /name/i });
  //   const emailInput = screen.getByRole("textbox", { email: /enter email/i });
  const nameInput = screen.getByTestId("name");
  const emailInput = screen.getByTestId("email");

  // 4. simulate typing in a name and email
  user.click(nameInput);
  user.keyboard("jane");

  user.click(emailInput);
  user.keyboard("jane@gmail.com");

  // 5. find the button
  const button = screen.getByRole("button");

  // 6. simulate clicking button submit the form
  user.click(button);

  // 7. write assertion to make sure onUserAdd is called after clicking
  expect(mockFunction).toHaveBeenCalled();
  expect(mockFunction).toHaveBeenCalledWith({
    name: "jane",
    email: "jane@gmail.com",
  });
});
