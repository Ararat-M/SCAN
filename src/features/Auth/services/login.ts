import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "shared/const";
import { headers } from "api";

interface AuthData {
  login: string;
  password: string;
}

interface AuthResponse {
  accessToken: string;
  expire: string;
}

export const login = createAsyncThunk<AuthResponse, AuthData, { rejectValue: string }>(
  "auth/login",
  async (requestData, thunkAPI) => {
    try {
      const response = await axios.post<AuthResponse>(API_URL + "/account/login", {
        login: requestData.login, 
        password: requestData.password
      }, {headers});
      
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