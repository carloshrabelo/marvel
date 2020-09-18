import { render } from "@testing-library/react";
import Comic from "./";

const props = {
  id: 1,
  title: "title",
  thumbnail: "http://google.com/",
};

describe("<Comic/>", () => {
  it("renders a Comic component", () => {
    const { getByText, container } = render(<Comic {...props} />);
    const img = container.querySelector("img");

    expect(getByText(props.title)).toBeInTheDocument();

    expect(img).toBeInTheDocument();
    expect(img.src).toBe(props.thumbnail);
  });
});
