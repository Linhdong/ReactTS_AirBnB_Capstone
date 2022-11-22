import { configureStore } from "@reduxjs/toolkit";
import commentReducer from "./reducers/commentReducer";
import locationsReducer from "./reducers/locationsReducer";
import roomReducer from "./reducers/roomReducer";
import positionReducer from "./reducers/positionReducer";
import userReducer from "./reducers/userReducer";
import signInReducer from "./reducers/signInReducer";
import modalReducer from "./reducers/modalReducer";
import orderRoomReducer from "./reducers/orderRoomReducer";
export const store = configureStore({
  reducer: {
    locationsReducer,
    roomReducer,
    positionReducer,
    commentReducer,
    userReducer, 
    signInReducer,
    modalReducer,
    orderRoomReducer
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
