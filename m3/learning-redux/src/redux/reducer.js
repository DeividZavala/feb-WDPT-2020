import { ADD_ONE, MINUS_ONE } from "./actions";

const initialState = 0;

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ONE:
      return state + 1;

    case MINUS_ONE:
      return state - 1;

    default:
      return state;
  }
}
