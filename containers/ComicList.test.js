import { render } from "@testing-library/react";

import * as useStore from "store/hooks/useStore";
import characters from "mock/characters";
import comics from "mock/comics";
import ComicList from "./ComicList";

jest.mock("store/hooks/useDispatch", () => jest.fn());
const useDispatch = require("store/hooks/useDispatch");

const dispatch = jest.fn();
useDispatch.mockReturnValue(dispatch);

describe("<ComicList/>", () => {
  it("Should render a list of comics", () => {
    jest.spyOn(useStore, "default").mockReturnValue({
      comics: {
        isLoading: false,
        data: comics,
      },
    });
    const { container } = render(<ComicList />);

    comics.forEach(({ title, thumbnail, creators }, key) => {
      const img = container.querySelectorAll("img")[key];
      const comicsText = img.parentElement.textContent;
      expect(comicsText.includes(title)).toBe(true);
      for (const creator of creators) {
        expect(comicsText.includes(creator)).toBe(true);
      }
      expect(img).toBeInTheDocument();
      expect(img.src).toBe(thumbnail);
    });
  });
  it("Should render placeholder when is loading", () => {
    jest.spyOn(useStore, "default").mockReturnValue({
      comics: {
        isLoading: true,
        data: [],
      },
    });
    const { container } = render(<ComicList />);
    const placeholderThumbnail = container.querySelectorAll(
      ".react-loading-skeleton[class*=Thumbnail]"
    );
    placeholderThumbnail.forEach((placeholder) => {
      expect(placeholder).toBeInTheDocument();
    });
    expect(placeholderThumbnail.length).toBe(7);
  });
  it("Should render display message when hasn't comics", () => {
    const [character] = characters;
    jest.spyOn(useStore, "default").mockReturnValue({
      character,
      comics: {
        isLoading: false,
        data: [],
      },
    });

    const { queryByText } = render(<ComicList />);
    expect(
      queryByText(`Não foram encontradas HQs sobre o ${character?.name}`)
    ).toBeInTheDocument();
  });
});
