// reducers.js

import { ADD_PURCHASED_PRODUCT } from "../types/products.types";

const initialState = {
  purchasedProducts: [],
};

const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PURCHASED_PRODUCT:
      return {
        ...state,
        purchasedProducts: [...state.purchasedProducts, action.payload],
      };
    default:
      return state;
  }
};

export default ProductReducer;
