export const initialState = null;

import { SET } from "reducers/comics";

const getCharacter = (state, { type, payload }) =>
  type !== SET ? state : payload;

export default getCharacter;
