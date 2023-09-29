import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import { type FilterSchema } from "../types/FilterSchema";

const initialState: FilterSchema = {
  intervalType: "month",
  histogramTypes: ["totalDocuments", "riskFactors"],
  issueDateInterval: {
    startDate: "2019-01-01T00:00:00+03:00",
    endDate: "2022-08-31T23:59:59+03:00"
  },
  searchContext: {
    targetSearchEntitiesContext: {
      targetSearchEntities: [{
        type: "company",
        inBusinessNews: null,
        sparkId: null,
        entityId: null,
        inn: 7710137066,
        maxFullness: false
      }],
      onlyMainRole: false,
      onlyWithRiskFactors: false,
      tonality: "any"
    }
  },
  similarMode: "none",
  limit: 10,
  sortType: "sourceInfluence",
  sortDirectionType: "desc",
  attributeFilters: {
    excludeAnnouncements: false,
    excludeDigests: false,
    excludeTechNews: false
  }
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter(state, action: PayloadAction<Pick<FilterSchema, "issueDateInterval" | "searchContext" | "limit" | "attributeFilters">>) {
      state.issueDateInterval = action.payload.issueDateInterval;
      state.searchContext.targetSearchEntitiesContext = action.payload.searchContext.targetSearchEntitiesContext;
      state.limit = action.payload.limit;
      state.attributeFilters = action.payload.attributeFilters;
    }
  }
}
);

export const { actions: filterActions } = filterSlice;
export const { reducer: filterReducer } = filterSlice;