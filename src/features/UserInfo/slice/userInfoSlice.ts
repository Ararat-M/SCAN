import { createSlice } from "@reduxjs/toolkit";
import { UserInfoSchema } from "../types/UserInfoSchema";
import { initInfo } from "../services/initInfo";

const initialState: UserInfoSchema = {
  usedCompanyCount: 0,
  companyLimit: 0,
  isLoading: false,
  error: ""
}

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(initInfo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(initInfo.fulfilled, (state, action) => {       
        state.usedCompanyCount = action.payload.eventFiltersInfo.usedCompanyCount;
        state.companyLimit = action.payload.eventFiltersInfo.companyLimit;
        state.isLoading = false
      })
      .addCase(initInfo.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
  }
})

export const {actions: userInfoActions} = userInfoSlice
export const {reducer: userInfoReducer} = userInfoSlice