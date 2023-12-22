import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";

export default configureStore({
  reducer: {
    app: appSlice,
    search: searchSlice
  }
});

