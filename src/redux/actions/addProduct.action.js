import { ADD_PURCHASED_PRODUCT } from "../types/products.types";

export const addPurchasedProduct = (product) => ({
  type: ADD_PURCHASED_PRODUCT,
  payload: product,
});