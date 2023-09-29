import { type FilterSchema } from "enteties/Filter";
import { type UserSchema } from "enteties/User/types/UserSchema";
import { type AuthSchema } from "features/Auth";
import { type ScanDocSchema } from "features/Document";
import { type HistogramSchema, type PostsIdSchema } from "features/ObjectSearch";
import { type UserInfoSchema } from "features/UserInfo";

export interface StateSchema {
  user: UserSchema;
  auth: AuthSchema;
  userInfo: UserInfoSchema;
  filter: FilterSchema;
  histogram: HistogramSchema;
  postsId: PostsIdSchema;
  scanDoc: ScanDocSchema;
}