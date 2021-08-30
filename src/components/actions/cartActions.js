import {
  ADD_TO_CART,
  REMOVE_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY,
  ADD_SHIPPING,
  LOAD_PRODUCTS,
  LOAD_PRODUCTS_LOADING,
} from "./action-types/cart-actions";
import { toast } from "react-toastify";
import axios from "axios";

const URL =
  "https://my-json-server.typicode.com/benirvingplt/products/products";
export const loadProducts = () => {
  return (dispatch) => {
    dispatch({ type: LOAD_PRODUCTS_LOADING });
    // Return promise with success and failure actions
    return axios.get(URL).then(
      (products) => {
        console.log(products);
        dispatch({ type: LOAD_PRODUCTS, payload: products.data });
      }
      //   (err) => dispatch({ type: GET_CURRENT_USER_FAILURE, err })
    );
  };
};

//add cart action
export const addToCart = (id) => {
  toast.success("Your product has been added to cart.");
  return {
    type: ADD_TO_CART,
    id,
  };
};
//remove item action
export const removeItem = (id) => {
  return {
    type: REMOVE_ITEM,
    id,
  };
};
//subtract qt action
export const subtractQuantity = (id) => {
  return {
    type: SUB_QUANTITY,
    id,
  };
};
//add qt action
export const addQuantity = (id) => {
  return {
    type: ADD_QUANTITY,
    id,
  };
};
