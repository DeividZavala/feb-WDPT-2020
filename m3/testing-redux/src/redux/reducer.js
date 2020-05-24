import { ADD_ONE, MINUS_ONE } from "./actions";
const initialState = {
  counter: 0,
};
function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ONE:
      return {
        counter: state.number + 1,
      };
    case MINUS_ONE:
      return {
        counter: state.number - 1,
      };
    default:
      return state;
  }
}
export default reducer;
