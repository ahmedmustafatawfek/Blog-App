import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getPosts = createAsyncThunk(
  "post/getPosts",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios
        .get("https://api.realworld.io/api/articles?limit=10&offset=0")
        .then((response) => {
          console.log(response.data);
        });
      return res;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const postSlice = createSlice({
  name: "post",
  initialState: { Posts: [], isLoading: false, error: null },
  extraReducers: {
    // get posts
    [getPosts.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [getPosts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.Posts = action;
      console.log(action);
    },
    [getPosts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default postSlice.reducer;
