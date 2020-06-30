import axios from "axios";
import { normalizeData } from "../utils/formatters";

const LOADING = "ironcommerce/products/LOADING";
const GET_PRODUCTS_SUCCESS = "ironcommerce/products/GET_PRODUCTS_SUCCESS";
const GET_PRODUCTS_ERROR = "ironcommerce/products/GET_PRODUCTS_ERROR";

const CREATE_PRODUCTS_SUCCESS = "ironcommerce/products/CREATE_PRODUCTS_SUCCESS";
const CREATE_PRODUCTS_ERROR = "ironcommerce/products/CREATE_PRODUCTS_ERROR";

const initialState = {
  items: {},
  status: "",
  error: undefined,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return { ...state, status: "pending" };

    case GET_PRODUCTS_SUCCESS:
      return { ...state, status: "success", items: { ...action.payload } };

    case GET_PRODUCTS_ERROR:
      return { ...state, status: "error", error: action.error };

    case CREATE_PRODUCTS_SUCCESS:
      return {
        ...state,
        status: "success",
        items: { ...state.items, [action.payload._id]: action.payload },
      };

    case CREATE_PRODUCTS_ERROR:
      // return error
      return state;

    default:
      return state;
  }
}

export const loadingProducts = () => ({
  type: LOADING,
});

export const getProductsSuccess = (payload) => ({
  type: GET_PRODUCTS_SUCCESS,
  payload,
});

export const getProductsError = (error) => ({
  type: GET_PRODUCTS_ERROR,
  error,
});

export const createProductSuccess = (payload) => ({
  type: CREATE_PRODUCTS_SUCCESS,
  payload,
});

export const fetchProducts = () => (dispatch) => {
  dispatch(loadingProducts());
  return axios
    .get("http://localhost:3000/products")
    .then((res) => {
      const items = normalizeData(res.data.result);
      dispatch(getProductsSuccess(items));
    })
    .catch((err) => {
      dispatch(getProductsError(err));
    });
};

export const createProduct = (data, push) => (dispatch) => {
  dispatch(loadingProducts());
  return axios
    .post("http://localhost:3000/products", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => {
      console.log(res.data);
      dispatch(createProductSuccess(res.data.result));
    });
};
