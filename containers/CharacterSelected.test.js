import { render } from "@testing-library/react";

import * as comicsReducers from "reducers/comics";
import * as useStore from "store/hooks/useStore";
import userEvent from "@testing-library/user-event";
import CharacterSelected from "./CharacterSelected";

jest.mock("store/hooks/useDispatch", () => jest.fn());
const useDispatch = require("store/hooks/useDispatch");

const dispatch = jest.fn();
useDispatch.mockReturnValue(dispatch);

const character = {
  thumbnail: "http://example.com/",
  name: "name",
  description: "description",
};

describe("<CharacterSelected/>", () => {
  it("Render base component", () => {
    jest.spyOn(useStore, "default").mockReturnValue({ character });

    const { getByText, container } = render(<CharacterSelected />);
    const img = container.querySelector("img");

    expect(getByText(character.name)).toBeInTheDocument();
    expect(getByText(character.description)).toBeInTheDocument();

    expect(img).toBeInTheDocument();
    expect(img.src).toBe(character.thumbnail);
  });

  it("Shouldn't render component if hasn't character in store", () => {
    jest.spyOn(useStore, "default").mockReturnValue({});
    const { container } = render(<CharacterSelected />);
    expect(container.firstChild).toBeNull();
  });

  it("Should dispatch find function for reducer remove character", () => {
    jest.spyOn(useStore, "default").mockReturnValue({ character });
    const find = jest.spyOn(comicsReducers, "find");
    const { getByText } = render(<CharacterSelected />);
    const btn = getByText("Remover");

    expect(btn).toBeInTheDocument();
    userEvent.click(btn);

    expect(find).toBeCalledWith();
    expect(dispatch).toBeCalled();
  });
});
