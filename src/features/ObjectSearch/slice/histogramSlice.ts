import { createSlice } from "@reduxjs/toolkit";
import { HistogramSchema } from "../types/HistogramSchema";
import { getHistogram } from "../services/getHistogram";
import { formatDate } from "shared/lib/formatDate/formatDate";

const initialState: HistogramSchema = {
  data: [],
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
        state.data = initialState.data;
        state.isLoading = true;
      })
      .addCase(getHistogram.fulfilled, (state, action) => {
        action.payload.data.forEach((item) => {
          if (item.histogramType === "totalDocuments") {
            item.data.forEach((item) => {
              state.data.push({
                date: formatDate(item.date),
                totalValue: item.value,
                riskValue: 0
              })
            })
          }

          if (item.histogramType === "riskFactors") {
            item.data.forEach((item, index) => {
              state.data[index].riskValue = item.value;
            })
          }
        })

        state.isLoading = false;
      })
      .addCase(getHistogram.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
  }
})


export const {actions: histogramActions} = histogramSlice;
export const {reducer: histogramReducer} = histogramSlice;