/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import * as charactersReducers from "reducers/characters";
import * as comicsReducers from "reducers/comics";

import * as useStore from "store/hooks/useStore";
import characters from "mock/characters";
import { act } from "react-dom/test-utils";
import Search, { TIME_HIDDEN, TIME_SEARCH } from "./";

const waitTime = (TIME) => new Promise((resolve) => setTimeout(resolve, TIME));

jest.mock("store/hooks/useDispatch", () => jest.fn());
jest.mock("next/link", () => ({ children }) => <> {children}</>);
const useDispatch = require("store/hooks/useDispatch");

const dispatch = jest.fn();
useDispatch.mockReturnValue(dispatch);

const [char] = characters;
const { name } = char;

describe("<Search/>", () => {
  it("Should remove list after selected item", async () => {
    jest
      .spyOn(useStore, "default")
      .mockReturnValue({ characters: { data: characters } });
    const { container, queryByText } = render(<Search />);
    const input = container.querySelector("input");

    expect(queryByText(name)).not.toBeInTheDocument();

    userEvent.type(input, name);
    const listItem = queryByText(name);

    expect(listItem).toBeInTheDocument();
    userEvent.click(listItem);

    await act(async () => {
      await waitTime(TIME_HIDDEN);
      expect(queryByText(name)).not.toBeInTheDocument();
    });
  });
  it("Should search character list when typing", async () => {
    const findCharacters = jest.spyOn(charactersReducers, "find");
    jest
      .spyOn(useStore, "default")
      .mockReturnValue({ characters: { data: characters } });
    const { container, queryByText } = render(<Search />);
    const input = container.querySelector("input");

    expect(container).toBeInTheDocument();
    expect(queryByText(name)).not.toBeInTheDocument();
    userEvent.type(input, name);

    await act(async () => {
      await waitTime(TIME_SEARCH);
      expect(dispatch).toBeCalled();
      expect(findCharacters).toBeCalledWith(name);
    });
  });

  it("Should search for character comics when selecting him", async () => {
    const findComics = jest.spyOn(comicsReducers, "find");
    jest
      .spyOn(useStore, "default")
      .mockReturnValue({ characters: { data: characters } });
    const { queryByText } = render(<Search />);

    expect(queryByText(name)).not.toBeInTheDocument();
    userEvent.click(queryByText("Buscar Herói"));

    await act(async () => {
      await waitTime(TIME_SEARCH);
      const listItem = queryByText(name);
      userEvent.click(listItem);
      expect(dispatch).toBeCalled();
      expect(findComics).toBeCalledWith(char);
    });
  });
});
