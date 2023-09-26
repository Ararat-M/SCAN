import { UserSchema } from "enteties/User/types/UserSchema";
import { AuthSchema } from "features/Auth";
import { UserInfoSchema } from "features/UserInfo";

export interface StateSchema {
  user: UserSchema,
  auth: AuthSchema,
  userInfo: UserInfoSchema
}