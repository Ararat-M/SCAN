import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "shared/const";
import { type FilterSchema } from "enteties/Filter";

interface ResponseData {
  items: [{
    encodedId: string;
    influence: number;
    similarCount: number;
  }];
  mappings: [{
    inn: string;
    entityIds: number[];
  }];
}

interface RequestData extends FilterSchema {
  accessToken: string;
}

export const getPostsId = createAsyncThunk<ResponseData, RequestData, { rejectValue: string } >(
  "histogram/posts",
  async (requestData, thunAPI) => {
    try {
      const response = await axios.post<ResponseData>(API_URL + "/objectsearch", {
        intervalType: requestData.intervalType,
        histogramTypes: requestData.histogramTypes,
        issueDateInterval: requestData.issueDateInterval,
        searchContext: requestData.searchContext,
        similarMode: requestData.similarMode,
        limit: requestData.limit,
        sortType: requestData.sortType,
        sortDirectionType: requestData.sortDirectionType,
        attributeFilters: requestData.attributeFilters
      },
      {
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
          Authorization: `bearer ${requestData.accessToken}`
        }
      });

      if (response.data == null) {
        throw new Error();
      }

      return response.data;
    } catch (error) {
      return thunAPI.rejectWithValue(error.message);
    }
  }
);