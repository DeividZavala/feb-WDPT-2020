// Action types

const CREATE_TODO = "irontodos/todos/CREATE_TODO";

// initialState
const initialState = {
  loading: false,
  results: [],
  error: null,
};

// reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_TODO:
      return { ...state, results: [...state.results, action.payload] };

    default:
      return state;
  }
}

// Action creators
export const createTodo = (payload) => ({
  type: CREATE_TODO,
  payload,
});
