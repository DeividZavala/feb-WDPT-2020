import axios from "axios";
axios.defaults.withCredentials = true;

const LOADING = "ironcommerce/cart/LOADING";
const ADD_PRODUCT = "ironcommerce/cart/ADD_PRODUCT";
const REMOVE_PRODUCT = "ironcommerce/cart/REMOVE_PRODUCT";
const DELETE_PRODUCT = "ironcommerce/cart/DELETE_PRODUCT";

const CREATE_ORDER_SUCCESS = "ironcommerce/cart/CREATE_ORDER_SUCCESS";
const CREATE_ORDER_ERROR = "ironcommerce/cart/CREATE_ORDER_ERROR";

const initialState = {
  items: {},
  status: "",
  message: undefined,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return { ...state, status: "pending" };
    case ADD_PRODUCT:
      let product = state.items[action.payload._id];
      if (product) {
        product.quantity++;
      } else {
        product = { info: action.payload, quantity: 1 };
      }
      return { items: { ...state.items, [product.info._id]: product } };
    case CREATE_ORDER_SUCCESS:
      return { ...state, status: "success", message: "Order created" };
    case REMOVE_PRODUCT:
    case DELETE_PRODUCT:
    default:
      return state;
  }
}

export const addProduct = (payload) => ({
  type: ADD_PRODUCT,
  payload,
});

export const loading = () => ({
  type: LOADING,
});

export const createOrderSuccess = () => ({
  type: CREATE_ORDER_SUCCESS,
});

export const createOrder = (data) => (dispatch) => {
  dispatch(loading());
  return axios.post("http://localhost:3000/orders", data).then(() => {
    dispatch(createOrderSuccess());
  });
};
