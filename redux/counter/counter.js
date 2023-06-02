import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0
}
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.value = state.value + 1
    },
    decrement:(state)=>{
      state.value--
    },
    incrementWhiteUserData:(state, action)=>{
    state.value=state.value + action.payload
    },

  }
})


export default counterSlice.reducer
export const {increment,decrement, incrementWhiteUserData}=counterSlice.actions
