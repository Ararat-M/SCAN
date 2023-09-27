import { createAsyncThunk } from "@reduxjs/toolkit";
import { HistogramSchema } from "../types/HistogramSchema";
import axios from "axios";
import { API_URL } from "shared/const";
import { axiosConfig } from "api";

interface RequestData {
  accessToken: string;
}

export const getHistogram = createAsyncThunk<HistogramSchema, RequestData, { rejectValue: string} >(
  "histogram/getHistogram",
  async (data, thunAPI) => {
    try {
      const response = await axios.post<HistogramSchema>(API_URL + "/objectsearch/histograms", {
          intervalType: "month"
        },
        {
          headers: {
          "Content-type": "application/json",
          "Accept": "application/json",
          "Authorization": `bearer ${data.accessToken}`,
        }
      });

      if (response.data == null) {
        throw new Error();
      }

      return response.data;
    } catch (error) {
      return thunAPI.rejectWithValue(error.message)
    }
  }
)