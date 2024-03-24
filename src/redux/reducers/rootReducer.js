// rootReducer.js
import { combineReducers } from "redux";
import AuthReducer from "./auth.reducer";
import ProductReducer from "./product.reducer";

const rootReducer = combineReducers({
  auth: AuthReducer,
  product: ProductReducer,
});

export default rootReducer;
