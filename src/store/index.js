import { configureStore } from "@reduxjs/toolkit";
import posts from "../store/postSlice"

export default configureStore({
    reducer: {posts},
  });
  