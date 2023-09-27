import { createSlice } from "@reduxjs/toolkit";
import { getPostsId } from "../services/getPostsId";
import { PostsIdSchema } from "../types/PostsIdSchema";

const initialState: PostsIdSchema = {
  postsId: [],
  isLoading: true,
  error: ""
}

export const postsIdSlice = createSlice({
  name: "postsId",
  initialState,
  reducers: { },
  extraReducers: (builder) => {
    builder
      .addCase(getPostsId.pending, (state) => {
        state.postsId = initialState.postsId;
        state.isLoading = true;
      })
      .addCase(getPostsId.fulfilled, (state, action) => {
        action.payload.items.forEach((item) => {
          state.postsId.push(item.encodedId)
        });

        state.isLoading = false;
      })
      .addCase(getPostsId.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
  }
})


export const {actions: postsIdActions} = postsIdSlice;
export const {reducer: postsIdReducer} = postsIdSlice;