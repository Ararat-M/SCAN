import { createAsyncThunk } from "@reduxjs/toolkit";
import { HistogramSchema } from "../types/HistogramSchema";
import axios from "axios";
import { API_URL } from "shared/const";
import { headers } from "api";
import { FilterSchema } from "enteties/Filter";

interface ResponseData {
  data: [{
    data: [{
      date: string;
      value: number;
    }],
    histogramType: "totalDocuments" | "riskFactors";
  }]
}

export const getHistogram = createAsyncThunk<ResponseData, FilterSchema, { rejectValue: string} >(
  "histogram/getHistogram",
  async (requestData, thunAPI) => {
    try {
      const response = await axios.post<ResponseData>(API_URL + "/objectsearch/histograms", {
        intervalType: requestData.intervalType,
        histogramTypes: requestData.histogramTypes,
        issueDateInterval: requestData.issueDateInterval,
        searchContext: requestData.searchContext,
        similarMode: requestData.similarMode,
        limit: requestData.limit,
        sortType: requestData.sortType,
        sortDirectionType: requestData.sortDirectionType,
        attributeFilters: requestData.attributeFilters
      }, {headers});

      if (response.data == null) {
        throw new Error();
      }

      return response.data;
    } catch (error) {
      return thunAPI.rejectWithValue(error.message)
    }
  }
)