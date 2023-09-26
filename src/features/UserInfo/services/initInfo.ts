import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "shared/const";

interface RequestData {
  accessToken: string;
}

interface ResponseData {
  eventFiltersInfo: {
    usedCompanyCount: number;
    companyLimit: number;
  }
}

export const initInfo = createAsyncThunk<ResponseData, RequestData, { rejectValue: string }>(
  "user/info",
  async (userData, thunkAPI) => {
    try {
      const response = await axios<ResponseData>(API_URL + "/account/info", {
        headers: {Authorization: `bearer ${userData.accessToken.replace(/"/g, "")}`}
      });

      if (response.data == null) {
        throw new Error();
      }

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);