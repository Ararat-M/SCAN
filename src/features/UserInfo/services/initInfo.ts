import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "shared/const";
import { headers } from "api";

interface ResponseData {
  eventFiltersInfo: {
    usedCompanyCount: number;
    companyLimit: number;
  }
}

export const initInfo = createAsyncThunk<ResponseData, void, { rejectValue: string }>(
  "user/info",
  async (requestData, thunkAPI) => {
    try {
      const response = await axios<ResponseData>(API_URL + "/account/info", {
        headers
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