import { type TypedUseSelectorHook, useSelector } from "react-redux";
import type { StateSchema } from "store";

export const useAppSelector: TypedUseSelectorHook<StateSchema> = useSelector;