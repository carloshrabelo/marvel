import combineReducers from "./combineReducers";

const initialState = {
  name: "name",
  status: "status",
};

const rootReducers = {
  name: (state, { type, payload }) =>
    type !== "CHANGE_NAME" ? state : payload,
  status: (state, { type, payload }) =>
    type !== "CHANGE_STATUS" ? state : payload,
};

const reducerName = jest.spyOn(rootReducers, "name");
const reducerStatus = jest.spyOn(rootReducers, "status");

const changeName = { type: "CHANGE_NAME", payload: "new name" };
const changeNothing = { type: "DO_NOTHING", payload: "Nothing" };
const changeStatus = { type: "CHANGE_STATUS", payload: "new state" };

describe("combineReducers", () => {
  it("Should execute all reducers, but don't change state", () => {
    const reducer = combineReducers(rootReducers);
    const state = reducer(initialState, changeNothing);

    expect(reducerName).toBeCalledWith(initialState.name, changeNothing);
    expect(reducerStatus).toBeCalledWith(initialState.status, changeNothing);

    expect(state).toMatchObject(initialState);
  });

  it("Should execute all reducers and change state of name", () => {
    const reducer = combineReducers(rootReducers);
    const state = reducer(initialState, changeName);

    expect(reducerName).toBeCalledWith(initialState.name, changeName);
    expect(reducerStatus).toBeCalledWith(initialState.status, changeName);

    expect(state).toMatchObject({ ...initialState, name: changeName.payload });
  });

  it("Should execute all reducers and change state of status", () => {
    const reducer = combineReducers(rootReducers);
    const state = reducer(initialState, changeStatus);

    expect(reducerName).toBeCalledWith(initialState.name, changeStatus);
    expect(reducerStatus).toBeCalledWith(initialState.status, changeStatus);

    expect(state).toMatchObject({
      ...initialState,
      status: changeStatus.payload,
    });
  });

  it("Should execute all reducers and change state", () => {
    const reducer = combineReducers(rootReducers);
    const state = reducer(initialState, changeName);
    const state2 = reducer(state, changeStatus);

    expect(reducerName).toBeCalledWith(initialState.name, changeName);
    expect(reducerStatus).toBeCalledWith(initialState.status, changeStatus);

    expect(state2).toMatchObject({
      name: changeName.payload,
      status: changeStatus.payload,
    });
  });
});
