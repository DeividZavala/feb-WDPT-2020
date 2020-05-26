import { ADD_ONE, MINUS_ONE } from "./actions";
const initialState = {
  counter: 0,
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ONE:
      return {
        counter: state.counter + 1,
      };
    case MINUS_ONE:
      return {
        counter: state.counter - 1,
      };
    default:
      return state;
  }
}
