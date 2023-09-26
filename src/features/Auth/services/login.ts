import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

interface AuthData {
  login: string;
  password: string;
}

const URL = "https://gateway.scan-interfax.ru/api/v1/account/login"

interface AuthResponse {
  accessToken: string;
  expire: string;
}

export const login = createAsyncThunk<AuthResponse | undefined, AuthData, { rejectValue: string }>(
  "auth/login",
  async (authData, thunkAPI) => {
    try {
      const response = await axios.post<AuthResponse>(URL, {
        login: authData.login, 
        password: authData.password
      });
      
      if (response.data == null) {
        throw new Error();
      }

      localStorage.setItem("token", JSON.stringify(response.data.accessToken));
      localStorage.setItem("expire", JSON.stringify(response.data.expire));

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);