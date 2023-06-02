import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import counterSlice from "./counter/counter"
import logger from "redux-logger";
import numberReducer from "./Number/Number"
const store = configureStore({
  reducer:{
    counter:counterSlice,
    number:numberReducer,
    },
  middleware:(getDefaultMiddleware)=>(getDefaultMiddleware().concat(logger))
})

export default store
