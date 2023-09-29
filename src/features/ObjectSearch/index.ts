export type { HistogramSchema } from "./types/HistogramSchema";
export type { PostsIdSchema } from "./types/PostsIdSchema";
export { histogramReducer } from "./slice/histogramSlice";
export { postsIdReducer } from "./slice/postsIdSlice";
export { getHistogram } from "./services/getHistogram";
export { getPostsId } from "./services/getPostsId";
export { getHistogramData } from "./selectors/getHistogramData";
export { getPostsIdData } from "./selectors/getPostsIdData";