import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: "",
  users: [],
  error: ""
}
const fetchUser = createAsyncThunk("users/fetchUser", () => {
  return fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => data)
})
const userSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.loading = "true",
        state.users = [],
        state.error = ""
    }),
      builder.addCase(fetchUser.rejected, (state, action) => {
        state.loading = "false",
          state.users = [],
          state.error = action.error.message
      }),
      builder.addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = "false",
        state.error = "false",
        state.users=action.payload
    })
  }
})


export default userSlice.reducer
export {fetchUser}
