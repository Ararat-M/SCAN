import type { StateSchema } from "store";

export const getAuthState = (state: StateSchema) => state.auth;