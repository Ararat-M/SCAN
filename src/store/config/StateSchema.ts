import { FilterSchema } from "enteties/Filter";
import { UserSchema } from "enteties/User/types/UserSchema";
import { AuthSchema } from "features/Auth";
import { ScanDocSchema } from "features/Document";
import { HistogramSchema, PostsIdSchema } from "features/ObjectSearch";
import { UserInfoSchema } from "features/UserInfo";

export interface StateSchema {
  user: UserSchema,
  auth: AuthSchema,
  userInfo: UserInfoSchema,
  filter: FilterSchema,
  histogram: HistogramSchema,
  postsId: PostsIdSchema,
  scanDoc: ScanDocSchema
}