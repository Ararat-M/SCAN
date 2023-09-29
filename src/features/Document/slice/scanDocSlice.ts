import { createSlice } from "@reduxjs/toolkit";
import { type ScanDocSchema } from "../types/ScanDocSchema";
import { getScanDoc } from "../services/getScanDoc";

const initialState: ScanDocSchema = {
  scanDocArr: [],
  isLoading: false,
  error: ""
};

export const scanDocSlice = createSlice({
  name: "ScanDoc",
  initialState,
  reducers: {
    clear(state) {
      state.scanDocArr = initialState.scanDocArr;
      state.isLoading = initialState.isLoading;
      state.error = initialState.error;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getScanDoc.pending, (state) => {
        state.isLoading = true;
        state.error = initialState.error;
      })
      .addCase(getScanDoc.fulfilled, (state, action) => {
        action.payload.forEach((item) => {
          if (!item.fail) {
            let type = "";

            if (item.ok.attributes.isTechNews) type = "Технические новости";
            if (item.ok.attributes.isDigest) type = "isDigest";
            if (item.ok.attributes.isAnnouncement) type = "isAnnouncement";
            if (item.ok.attributes.isSpeechRecognition) type = "isSpeechRecognition";

            state.scanDocArr.push({
              date: item.ok.issueDate,
              url: item.ok.url,
              source: item.ok.source.name,
              title: item.ok.title.text,
              type,
              img: "",
              description: item.ok.content.markup,
              wordCount: item.ok.attributes.wordCount,
              id: item.ok.id,
              attributes: item.ok.attributes
            });
          }
        });
        state.isLoading = false;
      })
      .addCase(getScanDoc.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  }
});

export const { actions: scanDocActions } = scanDocSlice;
export const { reducer: scanDocReducer } = scanDocSlice;