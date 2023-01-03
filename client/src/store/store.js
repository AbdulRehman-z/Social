import { configureStore } from "@reduxjs/toolkit";
import postApi from "./apis/postApi";

const store = configureStore({
  reducer: {
    [postApi.reducerPath]: postApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(postApi.middleware);
  },
});

export { store };
export { useCreatePostMutation, useFetchPostsQuery } from "./apis/postApi";
