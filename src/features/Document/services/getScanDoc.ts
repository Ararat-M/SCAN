import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "shared/const";

export type ResponceData = [
  {
    ok: {
      schemaVersion: string;
      id: string;
      version: number;
      issueDate: string;
      url: string;
      author: {
        name: string;
      };
      source: {
        id: number;
        groupId: number;
        name: string;
        categoryId: number;
        levelId: number;
      };
      dedupClusterId: string;
      title: {
        text: string;
        markup: string;
      };
      content: {
        markup: string;
      };
      entities: {
        companies: [
          {
            suggestedCompanies: [
              {
                sparkId: number;
                inn: string;
                ogrn: string;
                searchPrecision: "maxPrecision";
              }
            ];
            resolveInfo: {
              resolveApproaches: [
                "activeVerified"
              ];
            };
            tags: [
              "inCitation"
            ];
            isSpeechAuthor: boolean;
            localId: number;
            name: string;
            entityId: number;
            isMainRole: boolean;
          }
        ];
        people: [
          {
            rotatedName: string;
            tags: [
              "individualEntrepreneur"
            ];
            isSpeechAuthor: boolean;
            localId: number;
            name: string;
            entityId: number;
            isMainRole: boolean;
          }
        ];
        themes: [
          {
            localId: number;
            name: string;
            entityId: number;
            tonality: "neutral";
            participant: {
              localId: number;
              type: "company";
            };
          }
        ];
        locations: [
          {
            code: {
              countryCode: string;
              regionCode: string;
            };
            localId: number;
            name: string;
            entityId: number;
            isMainRole: boolean;
          }
        ];
      };
      attributes: {
        isTechNews: boolean;
        isAnnouncement: boolean;
        isDigest: boolean;
        isSpeechRecognition: boolean;
        influence: number;
        wordCount: number;
        coverage: {
          value: number;
          state: "hasData";
        };
      };
      language: unknown;
    };
    fail: {
      id: string;
      errorCode: number;
      errorMessage: string;
    };
  }];

interface RequestData {
  accessToken: string;
  ids: string[];
}

export const getScanDoc = createAsyncThunk<ResponceData, RequestData, { rejectValue: string } >(
  "ScanDoc/getScanDoc",
  async (requestData, thunAPI) => {
    try {
      const response = await axios.post<ResponceData>(API_URL + "/documents", {
        ids: [
          ...requestData.ids
        ]
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