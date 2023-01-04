import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import commentApi from "./apis/commentApi";
import postApi from "./apis/postApi";

const store = configureStore({
  reducer: {
    [postApi.reducerPath]: postApi.reducer,
    [commentApi.reducerPath]: commentApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(postApi.middleware)
      .concat(commentApi.middleware);
  },
});

setupListeners(store.dispatch);

export { store };
export { useCreatePostMutation, useFetchPostsQuery } from "./apis/postApi";
export {
  useCreateCommentMutation,
  useFetchCommentsQuery,
} from "./apis/commentApi";
