import { createSlice } from "@reduxjs/toolkit";
import { increment as incrementCounter } from "../counter/counter"
const initialState = {
  numberValue: 0
}
const numberSlice = createSlice({
  name: "number",
  initialState,
  reducers: {
    increment: (state) => {
      state.numberValue++
    },
    decrement: (state) => {
      state.numberValue--
    }
  },
  // extraReducers:{
  //   ["counter/increment"]:(state)=>{
  //     state.numberValue=state.numberValue + 1
  //
  //   }
  // }
  extraReducers: (builder) => {
    builder.addCase(incrementCounter, (state, action) => {
      state.numberValue++
    })
  }
})


export default numberSlice.reducer
export const { increment, decrement } = numberSlice.actions
