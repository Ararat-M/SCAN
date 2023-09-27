import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { userSlice } from "enteties/User";
import { UserSchema } from "enteties/User";
import { API_URL } from "shared/const";

interface UserData {
  accessToken: string;
}

export const init = createAsyncThunk<UserSchema, UserData, { rejectValue: string }>(
  "auth/init",
  async (userData, thunkAPI) => {
    try {
      console.log(userData.accessToken);
      
      const response = await axios<UserSchema>(API_URL + "/account/balance", {
        headers: {
          Authorization: `bearer ${userData.accessToken}`
        }
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