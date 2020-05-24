export const ADD_ONE = "ADD_ONE";
export const MINUS_ONE = "MINUS_ONE";

export const increase = () => ({
  type: ADD_ONE,
});

export const decrease = () => ({
  type: MINUS_ONE,
});
