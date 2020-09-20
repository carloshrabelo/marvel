import comic from "mock/comic";
import reduceComic, {
  initialState,
  set,
  request,
  onError,
  onSuccess,
} from "./comic";

describe("comic reducers", () => {
  it("Mount reducer with initial state", () => {
    const state = reduceComic(initialState, {});
    expect(state).toMatchObject(initialState);
  });

  it(`Should change state name when SET is called`, () => {
    const state = reduceComic(initialState, set(123));
    expect(state).toMatchObject({
      ...initialState,
      id: 123,
    });
  });

  it(`Should change state isLoading when request is called`, () => {
    const state = reduceComic(initialState, request(comic));
    expect(state).toMatchObject({
      ...initialState,
      isLoading: true,
    });
  });

  it(`Should change state error when onError is called`, () => {
    const state = reduceComic(initialState, onError());
    expect(state).toMatchObject({
      ...initialState,
      isLoading: false,
      error: true,
    });
  });

  it(`Should change state data when onSuccess is called`, () => {
    const state = reduceComic(initialState, onSuccess(comic));
    expect(state).toMatchObject({
      ...initialState,
      isLoading: false,
      data: comic,
    });
  });
});
