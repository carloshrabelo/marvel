import comics from "mock/comics";
import reduceComics, {
  initialState,
  set,
  request,
  onError,
  onSuccess,
} from "./comics";

describe("comics reducer", () => {
  it("Mount reducer with initial state", () => {
    const state = reduceComics(initialState, {});
    expect(state).toMatchObject(initialState);
  });

  it(`Should change state id when SET is called`, () => {
    const state = reduceComics(initialState, set({ id: "QQ" }));
    expect(state).toMatchObject({
      ...initialState,
      id: "QQ",
    });
  });

  it(`Should change state isLoading when request is called`, () => {
    const state = reduceComics(initialState, request(comics));
    expect(state).toMatchObject({
      ...initialState,
      isLoading: true,
    });
  });

  it(`Should change state error when onError is called`, () => {
    const state = reduceComics(initialState, onError());
    expect(state).toMatchObject({
      ...initialState,
      isLoading: false,
      error: true,
    });
  });

  it(`Should change state data when onSuccess is called`, () => {
    const pages = 20;
    const state = reduceComics(
      initialState,
      onSuccess({ pages, data: comics })
    );
    expect(state).toMatchObject({
      ...initialState,
      isLoading: false,
      data: comics,
      pages,
    });
  });
});
