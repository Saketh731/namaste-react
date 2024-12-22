import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../Contact";

test("Should load Contact component", () => {
  render(<Contact />);
  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
});

it("Should load the button inside Contact component", () => {
  render(<Contact />);
  //   const button = screen.getByRole("button");
  const button = screen.getByText("Submit");
  expect(button).toBeInTheDocument();
});

describe("Contact page input boxes", () => {
  // beforeAll(() => {
  //   console.log("Before all");
  // });
  // beforeEach(() => {
  //   console.log("Before each");
  // });
  // afterAll(() => {
  //   console.log("After all");
  // });
  // afterEach(() => {
  //   console.log("After each");
  // });
  test("Should load the input name inside Contact component", () => {
    render(<Contact />);
    //   const button = screen.getByRole("button");
    const input = screen.getByPlaceholderText("Message");
    expect(input).toBeInTheDocument();
  });

  it("Should load 2 input boxes inside the Contact component", () => {
    render(<Contact />);
    //   const button = screen.getByRole("button");
    const inputBoxes = screen.getAllByRole("textbox");
    // console.log(inputBoxes);
    expect(inputBoxes.length).toBe(2);
    expect(inputBoxes.length).not.toBe(3);
  });
});
