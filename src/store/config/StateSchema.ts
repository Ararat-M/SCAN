import { UserSchema } from "enteties/User/types/UserSchema";
import { AuthSchema } from "features/Auth";
import { type User } from "models/User";

export interface StateSchema {
  auth: AuthSchema,
  user: UserSchema
}