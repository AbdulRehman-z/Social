import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const postApi = createApi({
  reducerPath: "createPost",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000",
  }),
  tagTypes: ["post"],
  endpoints(builder) {
    return {
      createPost: builder.mutation({
        invalidatesTags: ["post"],
        query: (body) => {
          return {
            url: "/posts",
            method: "POST",
            body,
          };
        },
      }),
      fetchPosts: builder.query({
        providesTags: ["post"],
        query: () => {
          return {
            method: "GET",
            url: "/posts",
          };
        },
      }),
    };
  },
});

export const { useCreatePostMutation, useFetchPostsQuery } = postApi;
export default postApi;
