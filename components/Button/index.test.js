import { render } from "@testing-library/react";
import Button, { colors } from "./";

describe("<Button/>", () => {
  it("Render a base button", () => {
    const { getByText } = render(<Button>Welcome to Next.js!</Button>);
    expect(getByText("Welcome to Next.js!")).toBeInTheDocument();
  });

  it("Render a button with variants [color]", () => {
    Object.keys(colors).forEach((color) => {
      const { getByText } = render(
        <Button color={color}>Welcome to Next.js!</Button>
      );
      expect(getByText("Welcome to Next.js!")).toBeInTheDocument();
    });
  });
});
