import { render } from "@testing-library/react";
import Button, { colors } from "components/Button";

describe("Button", () => {
  it("renders a button", () => {
    const { getByText } = render(<Button>Welcome to Next.js!</Button>);
    expect(getByText("Welcome to Next.js!")).toBeInTheDocument();
  });

  it("renders a button with colors variants", () => {
    Object.keys(colors).forEach((color) => {
      const { getByText } = render(
        <Button color={color}>Welcome to Next.js!</Button>
      );
      expect(getByText("Welcome to Next.js!")).toBeInTheDocument();
    });
  });
});
