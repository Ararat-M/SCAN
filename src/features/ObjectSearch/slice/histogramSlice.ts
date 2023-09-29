import { createSlice } from "@reduxjs/toolkit";
import { type HistogramSchema } from "../types/HistogramSchema";
import { getHistogram } from "../services/getHistogram";
import { formatDate } from "shared/lib/formatDate/formatDate";

const initialState: HistogramSchema = {
  data: [],
  amount: 0,
  isLoading: false,
  error: ""
};

export const histogramSlice = createSlice({
  name: "histogram",
  initialState,
  reducers: { },
  extraReducers: (builder) => {
    builder
      .addCase(getHistogram.pending, (state) => {
        state.amount = 0;
        state.data = initialState.data;
        state.isLoading = true;
      })
      .addCase(getHistogram.fulfilled, (state, action) => {
        action.payload.data.forEach((item) => {
          if (item.histogramType === "totalDocuments") {
            item.data.forEach((item) => {
              state.amount += item.value;
              state.data.push({
                date: formatDate(item.date),
                totalValue: item.value,
                riskValue: 0
              });
            });
          }

          if (item.histogramType === "riskFactors") {
            item.data.forEach((item, index) => {
              state.data[index].riskValue = item.value;
            });
          }
        });

        state.isLoading = false;
      })
      .addCase(getHistogram.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  }
});

export const { actions: histogramActions } = histogramSlice;
export const { reducer: histogramReducer } = histogramSlice;