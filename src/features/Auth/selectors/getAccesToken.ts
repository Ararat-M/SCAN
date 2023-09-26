import type { StateSchema } from "store";

export const getAccesToken = (state: StateSchema) => state.auth.accessToken;