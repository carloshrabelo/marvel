import { SET } from "reducers/comics";
import reduceCharacter, { initialState } from "./character";

describe("character reducer", () => {
  it("Mount reducer with initial state", () => {
    const state = reduceCharacter(initialState, {});
    expect(state).toBe(initialState);
  });

  it(`Should change state when ${SET} is called`, () => {
    const [char] = require("mock/characters");
    const state = reduceCharacter(initialState, {
      type: SET,
      payload: char,
    });
    expect(state).toBe(char);
  });
});
