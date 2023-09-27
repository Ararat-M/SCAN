import { createSlice } from "@reduxjs/toolkit";
import { HistogramSchema } from "../types/HistogramSchema";
import { getHistogram } from "../services/getHistogram";

const initialState: HistogramSchema = {
  data: [{
    data: [{
      data: "",
      value: 0
    }],
    histogramType: ["totalDocuments", "riskFactors"]
  }],
  isLoading: true,
  error: ""
}

export const histogramSlice = createSlice({
  name: "histogram",
  initialState,
  reducers: { },
  extraReducers: (builder) => {
    builder
      .addCase(getHistogram.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getHistogram.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getHistogram.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
  }
})