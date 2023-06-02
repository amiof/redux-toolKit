import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import counterSlice from "./counter/counter"
import logger from "redux-logger";
import numberReducer from "./Number/Number"
import usersReducer from "./users/users"
const store = configureStore({
  reducer: {
    counter: counterSlice,
    number: numberReducer,
    users: usersReducer,
  },
  middleware: getDefaultMiddleware => (getDefaultMiddleware().concat(logger))
})

export default store
