import { createSlice } from "@reduxjs/toolkit";
import { ScanDocSchema } from "../types/ScanDocSchema";
import { ResponceData, getScanDoc } from "../services/getScanDoc";

const initialState: ScanDocSchema = {
  scanDocArr: [],
  isLoading: true,
  error: ""
}

export const scanDocSlice = createSlice({
  name: "ScanDoc",
  initialState,
  reducers: { },
  extraReducers: (builder) => {
    builder
      .addCase(getScanDoc.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getScanDoc.fulfilled, (state, action) => {

        action.payload.forEach((item) => {
          if (!item.fail) {
            let type = ""

            if (item.ok.attributes.isTechNews) type = "Технические новости"
            if (item.ok.attributes.isDigest) type = "isDigest"
            if (item.ok.attributes.isAnnouncement) type = "isAnnouncement"
            if (item.ok.attributes.isSpeechRecognition) type = "isSpeechRecognition"

            state.scanDocArr.push({
              date: item.ok.issueDate,
              url: item.ok.url,
              source: item.ok.source.name,
              title: item.ok.title.text,
              type: type,
              img: "",
              description: item.ok.content.markup,
              wordCount: item.ok.attributes.wordCount
            })
          };
        })
        state.isLoading = false;
      })
      .addCase(getScanDoc.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
  }
})


export const {actions: scanDocActions} = scanDocSlice;
export const {reducer: scanDocReducer} = scanDocSlice;