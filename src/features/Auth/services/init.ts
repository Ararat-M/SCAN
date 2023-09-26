import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { userSlice } from "enteties/User";
import { UserSchema } from "enteties/User";

interface UserData {
  accessToken: string;
}

const URL = "https://gateway.scan-interfax.ru/api/v1/account/balance"

export const init = createAsyncThunk<UserSchema | undefined, UserData, { rejectValue: string }>(
  "auth/init",
  async (userData, thunkAPI) => {
    try {
      const response = await axios<UserSchema>(URL, {
        headers: {Authorization: `bearer ${userData.accessToken.replace(/"/g, "")}`}
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