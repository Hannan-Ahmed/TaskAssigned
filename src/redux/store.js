import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/rootReducer";
// Defining the localStorageMiddleware
const localStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  try {
    const serializedState = JSON.stringify(store.getState());
    localStorage.setItem("reduxState", serializedState);
  } catch (error) {
    console.error("Error saving state to localStorage:", error);
  }
  return result;
};

// Loading state from localStorage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem("reduxState");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    console.error("Error loading state from localStorage:", error);
    return undefined;
  }
};

// Configure the Redux store
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
  preloadedState: loadState(), // Loading the state from localStorage
});

export default store;
