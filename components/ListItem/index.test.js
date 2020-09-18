import { render } from "@testing-library/react";
import ListItem from "components/ListItem";

const props = {
  thumbnail: "http://google.com/",
  name: "name",
  description: "description",
};

describe("<ListItem/>", () => {
  describe("#render", () => {
    it("Render base component", () => {
      const { getByText, container } = render(<ListItem {...props} />);
      const img = container.querySelector("img");

      expect(getByText(props.name)).toBeInTheDocument();
      expect(getByText(props.description)).toBeInTheDocument();

      expect(img).toBeInTheDocument();
      expect(img.src).toBe(props.thumbnail);
    });

    it("Render a variant [button]", () => {
      const { getByText, container } = render(<ListItem button {...props} />);
      const img = container.querySelector("img");

      expect(getByText(props.name)).toBeInTheDocument();
      expect(getByText(props.description)).toBeInTheDocument();

      expect(img).toBeInTheDocument();
      expect(img.src).toBe(props.thumbnail);
    });
  });
});
