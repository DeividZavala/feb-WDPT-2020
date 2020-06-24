import axios from "axios";

const LOADING = "ironcommerce/products/LOADING";
const GET_PRODUCTS_SUCCESS = "ironcommerce/products/GET_PRODUCTS_SUCCESS";
const GET_PRODUCTS_ERROR = "ironcommerce/products/GET_PRODUCTS_ERROR";

const initialState = {
  items: {},
  status: "",
  error: undefined,
};

export default function reducer(state = initialState, action) {
  switch (action.key) {
    case LOADING:
      return { ...state, status: "pending" };

    case GET_PRODUCTS_SUCCESS:
      return { ...state, status: "success", items: action.payload };

    case GET_PRODUCTS_ERROR:
      return { ...state, status: "error", error: action.error };

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

export const fetchProducts = () => (dispatch) => {
  dispatch(loadingProducts());
  return axios
    .get("http://localhost:3000/products")
    .then((res) => {
      dispatch(getProductsSuccess(res.data.result));
    })
    .catch((err) => {
      dispatch(getProductsError(err));
    });
};
