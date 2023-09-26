import { createSlice } from "@reduxjs/toolkit";
import type { AuthSchema } from "../types/AuthSchema";
import { login } from "../services/login";
import { init } from "../services/init";

const initialState: AuthSchema = {
  accessToken: localStorage.getItem("token") || "",
  expire: localStorage.getItem("expire") || "",
  isAuth: false,
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
      .addCase(init.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(init.fulfilled, (state) => {
        state.isAuth = true,
        state.isLoading = false,
        state.error= undefined
      })
      .addCase(init.rejected, (state, action) => {
        state.isAuth = false;
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(login.pending, (state) => {
        state.isAuth = false;
        state.isLoading = true;
        state.error = undefined;
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