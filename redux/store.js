import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import counterSlice from "./counter/counter"
import logger from "redux-logger";
import numberReducer from "./Number/Number"
import usersReducer from "./users/users"
import { productApi }  from "./services/apiSlice"
const store = configureStore({
  reducer: {
    counter: counterSlice,
    number: numberReducer,
    users: usersReducer,
    Api:productApi.reducer
  },
  middleware: getDefaultMiddleware => (getDefaultMiddleware().concat(logger).concat(productApi.middleware))
})

export default store
