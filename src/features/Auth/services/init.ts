import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { userSlice } from "enteties/User";
import { UserSchema } from "enteties/User";
import { API_URL } from "shared/const";
import { headers } from "api";

export const init = createAsyncThunk<UserSchema, void, { rejectValue: string }>(
  "auth/init",
  async (requestData, thunkAPI) => {
    try {  
      const response = await axios<UserSchema>(API_URL + "/account/balance", {
        headers
      });

      if (response.data == null) {
        throw new Error();
      }

      thunkAPI.dispatch(userSlice.actions.setUserData(response.data))

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);