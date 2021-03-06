import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// createAsyncThunk function creates catch block and error handling for us
export const updateUser2 = createAsyncThunk("users/update", async (user) => {
  const res = await axios.post(
    "http://localhost:8800/api/users/1/update",
    user
  );
  return res.data;
});

export const deleteUser = createAsyncThunk("users/update", async (user) => {
  const res = await axios.post(
    "http://localhost:8800/api/users/1/update",
    user
  );
  return res.data;
});

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: {
      name: "john",
      email: "john@gmail.com",
    },
    pending: null,
    error: false,
  },
  reducers: {
    // updateStart: (state) => {
    //   state.pending = true;
    // },
    // updateSuccess: (state, action) => {
    //   state.pending = false;
    //   state.userInfo = action.payload;
    // },
    // updateError: (state) => {
    //   state.error = true;
    //   state.pending = false;
    // },
    // update: (state, action) => {
    //   state.name = action.payload.name;
    //   state.email = action.payload.email;
    // },
    // remove: (state) => (state = {}),
    // addHello: (state, action) => {
    //   state.name = "Hello " + action.payload.name;
    // },
  },
  extraReducers: {
    [updateUser2.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [updateUser2.fulfilled]: (state, action) => {
      state.pending = false;
      state.userInfo = action.payload;
    },
    [updateUser2.rejected]: (state) => {
      state.pending = null;
      state.error = true;
    },
  },
  extraReducers: {
    [deleteUser.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [deleteUser.fulfilled]: (state, action) => {
      state.pending = false;
      state.userInfo = action.payload;
    },
    [deleteUser.rejected]: (state) => {
      state.pending = null;
      state.error = true;
    },
  },
});

export const { updateStart, updateSuccess, updateError } = userSlice.actions;
export default userSlice.reducer;
