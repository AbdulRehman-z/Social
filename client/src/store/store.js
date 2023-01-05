import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import commentApi from "./apis/commentApi";
import postApi from "./apis/postApi";
import queryApi from "./apis/queryApi";

const store = configureStore({
  reducer: {
    [postApi.reducerPath]: postApi.reducer,
    [commentApi.reducerPath]: commentApi.reducer,
    [queryApi.reducerPath]: queryApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(postApi.middleware)
      .concat(commentApi.middleware)
      .concat(queryApi.middleware);
  },
});

setupListeners(store.dispatch);

export { store };
export { useCreatePostMutation, useFetchPostsQuery } from "./apis/postApi";
export {
  useCreateCommentMutation,
  useFetchCommentsQuery,
} from "./apis/commentApi";
export { useFetchAllPostsQuery } from "./apis/queryApi";
