import characters from "mock/characters";
import reduceCharacters, {
  initialState,
  set,
  request,
  onError,
  onSuccess,
} from "./characters";

describe("characters reducer", () => {
  it("Mount reducer with initial state", () => {
    const state = reduceCharacters(initialState, {});
    expect(state).toMatchObject(initialState);
  });

  it(`Should change state name when SET is called`, () => {
    const state = reduceCharacters(initialState, set("characters"));
    expect(state).toMatchObject({
      ...initialState,
      name: "characters",
    });
  });

  it(`Should change state isLoading when request is called`, () => {
    const state = reduceCharacters(initialState, request(characters));
    expect(state).toMatchObject({
      ...initialState,
      isLoading: true,
    });
  });

  it(`Should change state error when onError is called`, () => {
    const state = reduceCharacters(initialState, onError());
    expect(state).toMatchObject({
      ...initialState,
      isLoading: false,
      error: true,
    });
  });

  it(`Should change state data when onSuccess is called`, () => {
    const state = reduceCharacters(initialState, onSuccess(characters));
    expect(state).toMatchObject({
      ...initialState,
      isLoading: false,
      data: characters,
    });
  });
});
