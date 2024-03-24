import { AuthTypes } from "../types";

const initialState = {
  currentUser: null,
  isLoggedIn: false,
  isLoading: false,
  errorMessage: "",
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case AuthTypes.LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        errorMessage: "",
        isLoggedIn: false,
      };
    case AuthTypes.SIGNUP_REQUEST:
      return {
        ...state,
        isLoading: true,
        errorMessage: "",
        isLoggedIn: false,
      };
    case AuthTypes.LOGIN_SUCCESS:
      localStorage.setItem("user", JSON.stringify(action.payload));
      return {
        ...state,
        currentUser: action.payload,
        isLoading: false,
        errorMessage: "",
        isLoggedIn: true,
      };
    case AuthTypes.SIGNUP_SUCCESS:
      // eslint-disable-next-line no-case-declarations
      const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
      // eslint-disable-next-line no-case-declarations
      const updatedUsers = [...existingUsers, action.payload];
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      return {
        ...state,
        currentUser: action.payload,
        isLoading: false,
        errorMessage: "",
        isLoggedIn: true,
      };
    case AuthTypes.LOGIN_ERROR:
      return {
        ...state,
        currentUser: null,
        isLoading: false,
        errorMessage: action.error.message,
        isLoggedIn: false,
      };
    case AuthTypes.LOGOUT_REQUEST:
      localStorage.removeItem("user");
      return {
        ...state,
        currentUser: null,
        errorMessage: "",
        isLoggedIn: false,
      };
    case AuthTypes.TOGGLE_LOADING:
      return {
        ...state,
        currentUser: null,
        errorMessage: "",
        isLoggedIn: false,
        loading: true,
      };
    default:
      return state;
  }
};

export default AuthReducer;
