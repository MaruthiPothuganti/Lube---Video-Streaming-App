import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import loginReducer from "../features/LoginSlice";
import signupReducer from "../features/SignUpSlice";
import exploreReducer from "../features/ExploreSlice";
import playlistReducer from "../features/PlaylistSlice";
import watchlaterReducer from "../features/WatchLaterSlice";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    signup: signupReducer,
    explore: exploreReducer,
    playlist: playlistReducer,
    watchlater: watchlaterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
