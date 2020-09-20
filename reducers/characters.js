import combineReducers from "helpers/combineReducers";

export const api = "/api/characters";

export const initialState = {
  name: null,
  isLoading: true,
  error: false,
  data: [],
};

export const SET = "SET_CHARACTERS";
export const REQUEST = "REQUEST_CHARACTERS";
export const FAILURE = "FAILURE_CHARACTERS";
export const SUCCESS = "SUCCESS_CHARACTERS";

const name = (state, { type, payload }) => (type !== SET ? state : payload);

const isLoading = (state, { type }) => {
  const mapping = {
    [SUCCESS]: false,
    [REQUEST]: true,
    [FAILURE]: false,
  };

  return Object.prototype.hasOwnProperty.call(mapping, type)
    ? mapping[type]
    : state;
};

const error = (state, { type, message }) => {
  const mapping = {
    [SUCCESS]: false,
    [REQUEST]: false,
    [FAILURE]: message || true,
  };

  return Object.prototype.hasOwnProperty.call(mapping, type)
    ? mapping[type]
    : state;
};

const data = (state, { type, payload }) => {
  const mapping = {
    [SUCCESS]: payload,
    [REQUEST]: state,
    [FAILURE]: [],
  };

  return mapping[type] || state;
};

export const set = (payload) => ({
  type: SET,
  payload,
});

export const request = (params) => ({
  type: REQUEST,
  params,
});

export const onSuccess = (payload) => ({
  type: SUCCESS,
  payload,
});

export const onError = () => ({
  type: FAILURE,
});

export const find = (name, params = {}) => (dispatch) => {
  dispatch(set(name));
  dispatch(request(params));
  if (!name) {
    return dispatch(onSuccess(initialState.data));
  }
  const queryParams = new URLSearchParams(params).toString();
  return fetch(`${api}/${name}?${queryParams}`)
    .then((response) => {
      if (!response.ok) throw Error(response.statusText);
      return response.json();
    })
    .then((payload) => dispatch(onSuccess(payload)))
    .catch((err) => dispatch(onError(err)));
};

export default combineReducers({
  name,
  isLoading,
  error,
  data,
});
