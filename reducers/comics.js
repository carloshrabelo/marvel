import combineReducers from "helpers/combineReducers";

export const apiAll = "/api/comics";
export const apiCharacters = (id) => `/api/characters/${id}/comics`;

export const initialState = {
  id: null,
  isLoading: false,
  error: false,
  data: [],
  page: 1,
  pageSize: 6,
  pages: 0,
};

export const SET = "SET_COMICS";
export const REQUEST = "REQUEST_COMICS";
export const FAILURE = "FAILURE_COMICS";
export const SUCCESS = "SUCCESS_COMICS";

const id = (state, { type, payload }) => (type !== SET ? state : payload?.id);

const pages = (state, { type, payload }) =>
  type !== SUCCESS
    ? state
    : (payload && payload.total_pages) || initialState.total;

const page = (state, { type, params }) =>
  type !== REQUEST ? state : (params && params.page) || initialState.page;
const pageSize = (state, { type, params }) =>
  type !== REQUEST
    ? state
    : (params && params.pageSize) || initialState.pageSize;

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
    [SUCCESS]: payload && payload.data,
    [REQUEST]: state,
    [FAILURE]: state,
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

export const find = (character, params = {}) => (dispatch) => {
  dispatch(set(character));
  dispatch(request(params));

  const queryParams = new URLSearchParams(params).toString();
  const api = character ? apiCharacters(character.id) : apiAll;

  return fetch(`${api}?${queryParams}`)
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
  page,
  pageSize,
  pages,
});
