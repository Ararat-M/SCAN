import { useDispatch } from "react-redux";
import type { StateSchema } from "store";
import type { AnyAction, Dispatch, ThunkDispatch } from "@reduxjs/toolkit";

export const useAppDispatch: () => ThunkDispatch<StateSchema, undefined, AnyAction> & Dispatch<AnyAction> = useDispatch;