import { type ReducersMapObject, configureStore } from "@reduxjs/toolkit";
import type { StateSchema } from "./StateSchema";
import { authReducer } from "features/Auth";
import { userReducer } from "enteties/User";
import { userInfoReducer } from "features/UserInfo";
import { filterReducer } from "enteties/Filter";
import { histogramReducer, postsIdReducer } from "features/ObjectSearch";
import { scanDocReducer } from "features/Documnet";

export function createReduxStore(initialState?: StateSchema) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    auth: authReducer,
    user: userReducer,
    userInfo: userInfoReducer,
    filter: filterReducer,
    histogram: histogramReducer,
    postsId: postsIdReducer,
    scanDoc: scanDocReducer
  };

  return configureStore<StateSchema>({
    reducer: rootReducers,
    devTools: true,
    preloadedState: initialState
  });
}