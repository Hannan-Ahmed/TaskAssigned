import { AuthTypes } from "../types";

export const login = (data) => (dispatch) => {
  dispatch(load());
  setTimeout(() => {
    dispatch(login_success(data));
  }, 2000);
};

export const login_success = (data) => ({
  type: AuthTypes.LOGIN_SUCCESS,
  payload: data,
});

export const signup_success = (data) => ({
  type: AuthTypes.SIGNUP_SUCCESS,
  payload: data,
});

export const signup = (data) => (dispatch) => {
  dispatch(load());
  setTimeout(() => {
    dispatch(signup_success(data));
  }, 2000);
};

export const load = () => ({
  type: AuthTypes.TOGGLE_LOADING,
});

export const logout = () => ({
  type: AuthTypes.LOGOUT_REQUEST,
});
