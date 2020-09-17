import combineReducers from "helpers/combineReducers";

export const api = "/api/comics";

export const initialState = {
  id: null,
  isLoading: false,
  error: false,
  data: {},
};

export const SET = "SET_COMIC";
export const REQUEST = "REQUEST_COMIC";
export const FAILURE = "FAILURE_COMIC";
export const SUCCESS = "SUCCESS_COMIC";

const id = (state, { type, id }) => (type !== SET ? state : id);

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
    [REQUEST]: {},
    [FAILURE]: state,
  };

  return mapping[type] || state;
};

export const set = (id) => ({
  type: SET,
  id,
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

export const find = (id, params = {}) => (dispatch) => {
  dispatch(set(id));
  dispatch(request(params));
  const queryParams = new URLSearchParams(params).toString();
  return fetch(`${api}/${id}?${queryParams}`)
    .then((response) => {
      if (!response.ok) throw Error(response.statusText);
      return response.json();
    })
    .then((payload) => dispatch(onSuccess(payload)))
    .catch((err) => dispatch(onError(err)));
};

export default combineReducers({
  id,
  isLoading,
  error,
  data,
});
