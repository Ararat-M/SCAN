import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "shared/const";

interface ResponseData {
  eventFiltersInfo: {
    usedCompanyCount: number;
    companyLimit: number;
  }
}

interface RequestData {
  accessToken: string;
}

export const initInfo = createAsyncThunk<ResponseData, RequestData, { rejectValue: string }>(
  "user/info",
  async (requestData, thunkAPI) => {
    try {
      const response = await axios<ResponseData>(API_URL + "/account/info", {
        headers: {
          "Content-type": "application/json",
          "Accept": "application/json",
          "Authorization": `bearer ${requestData.accessToken}`
        }
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