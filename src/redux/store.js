import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import queriedVideosSlice from "./queriedVideosSlice";
import chatSlice from "./chatSlice";

export default configureStore({
  reducer: {
    app: appSlice,
    search: searchSlice,
    queriedVideos: queriedVideosSlice,
    chat: chatSlice
  }
});

