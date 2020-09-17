const combineReducers = (slices) => (state, action) =>
  Object.entries(slices).reduce(
    (acc, [prop, fn]) => ({
      ...acc,
      [prop]: fn(acc[prop], action),
    }),
    state
  );

export default combineReducers;
