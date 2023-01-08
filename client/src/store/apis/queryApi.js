import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const queryApi = createApi({
  reducerPath: "queryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://posts.com:4002",
  }),
  tagTypes: ["post"],
  endpoints: (builder) => ({
    fetchAllPosts: builder.query({
      providesTags: ["post"],
      query: () => ({
        url: "/posts",
        method: "GET",
      }),
    }),
  }),
});

export default queryApi;
export const { useFetchAllPostsQuery } = queryApi;
