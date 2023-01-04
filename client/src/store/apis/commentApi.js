import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const commentApi = createApi({
  reducerPath: "createComment",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4001",
  }),
  endpoints(builder) {
    return {
      createComment: builder.mutation({
        invalidatesTags: (result, error, comment) => {
          return [{ type: "comment", id: comment.postId }];
        },
        query: (comment) => {
          return {
            url: `/posts/${comment.postId}/comments`,
            method: "POST",
            body: comment,
          };
        },
      }),
      fetchComments: builder.query({
        providesTags: (result, error, postId) => {
          console.log("Post Id: ", postId);

          if (result.length > 0) {
            return result.map((comment) => ({
              type: "comment",
              id: comment.postId,
            }));
          } else {
            return [{ type: "comment", id: postId }];
          }
        },
        query: (postId) => {
          return {
            method: "GET",
            url: `/posts/${postId}/comments`,
          };
        },
      }),
    };
  },
});

export const { useCreateCommentMutation, useFetchCommentsQuery } = commentApi;
export default commentApi;
