import { createSlice } from "@reduxjs/toolkit";
import type { AuthSchema } from "../types/AuthSchema";
import { login } from "../services/login";

const initialState: AuthSchema = {
  accessToken: JSON.parse(localStorage.getItem("token") || "{}"),
  expire: JSON.parse(localStorage.getItem("expire") || "{}"),
  isAuth: +new Date() < +new Date(JSON.parse(localStorage.getItem("expire") || "{}")),
  isLoading: false,
  error: ""
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.accessToken = "";
      state.expire = "";
      state.isAuth = false;
      localStorage.removeItem("token");
      localStorage.removeItem("expire");
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isAuth = false;
        state.isLoading = true;
        state.error = "";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.accessToken = action.payload.accessToken;
        state.expire = action.payload.expire;
        state.isAuth = true;
        state.isLoading = false;
      })
      .addCase(login.rejected, (state, action) => {
        state.isAuth = false;
        state.isLoading = false;
        state.error = action.payload;
      });
  }
});

export const { actions: authActions } = authSlice;
export const { reducer: authReducer } = authSlice;