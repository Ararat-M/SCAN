import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import { type UserSchema } from "../types/UserSchema";

const initialState: UserSchema = {
  unlimited: false,
  balance: 0,
  searchTermCost: 0,
  searchRateBlockPeriod: 0
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, actions: PayloadAction<UserSchema>) => {
      state.unlimited = actions.payload.unlimited;
      state.balance = actions.payload.balance;
      state.searchTermCost = actions.payload.searchTermCost;
      state.searchRateBlockPeriod = actions.payload.searchRateBlockPeriod;
    }
  }
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;