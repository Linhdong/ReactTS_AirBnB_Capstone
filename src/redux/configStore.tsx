import { configureStore } from "@reduxjs/toolkit";
import commentReducer from "./reducers/commentReducer";
import locationsReducer from "./reducers/locationsReducer";
import modalAdminReducer from "./reducers/modalAdminReducer";
import roomReducer from "./reducers/roomReducer";

export const store = configureStore({
  reducer: {
    locationsReducer,
    roomReducer,
    commentReducer,
    modalAdminReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
