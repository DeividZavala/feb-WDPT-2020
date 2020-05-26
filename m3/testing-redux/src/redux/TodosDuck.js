import axios from "axios";

// action types
const LOADING = "my-app/todos/LOADING";
const SUCCESS = "my-app/todos/SUCCESS";
const ERROR = "my-app/todos/ERROR";

// initialState
const initialState = {
  loading: false,
  results: [],
  error: undefined,
};

// reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: !state.loading };
    case SUCCESS:
      return { ...state, results: action.payload, loading: false };
    case ERROR:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
}

// action creators
export const getTodosLoading = (payload) => ({
  type: LOADING,
});

export const getTodosSuccess = (payload) => ({
  type: SUCCESS,
  payload,
});

export const getTodosError = (payload) => ({
  type: ERROR,
  payload,
});

// thunks
export const getTodos = () => (dispatch) => {
  dispatch(getTodosLoading());

  axios
    .get("http://localhost:4000/todos")
    .then((res) => {
      dispatch(getTodosSuccess(res.data));
    })
    .catch((res) => dispatch(getTodosError(res.response)));
};
