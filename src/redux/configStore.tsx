import { configureStore } from "@reduxjs/toolkit";
import locationsReducer from "./reducers/locationsReducer";
import roomReducer from "./reducers/roomReducer";
import positionReducer from "./reducers/positionReducer";
export const store = configureStore({
  reducer: {
    locationsReducer,
    roomReducer,
    positionReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
