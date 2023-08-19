import axios from "axios";
import { base_url } from "../../utils/baseUrl";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { config } from "../../utils/axiosconfig";

const initialState = {
  blogs: [],
  loading: "idle",
  error: false,
};

export const getBlogs = createAsyncThunk("blog", async () => {
  const response = await axios.get(`${base_url}blog`);
  return response.data;
});
export const addBlogs = createAsyncThunk("blog/add", async (payload) => {
  const response = await axios.post(`${base_url}blog/add`, payload);
  return response.data;
});

export const delBlogs = createAsyncThunk("blog/del", async (_id) => {
  const response = await axios.post(`${base_url}blog/del`, { _id }, config);
  return response.data;
});

export const updateBlogs = createAsyncThunk("blog/update", async (_id) => {
  const response = await axios.post(`${base_url}blog/update`, { _id }, config);
  return response.data;
});

const blogSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBlogs.fulfilled, (state, action) => {
        state.loading = "idle";
        state.blogs = action.payload;
      })
      .addCase(getBlogs.rejected, (state, action) => {
        state.loading = "pending";
        state.error = true;
      })
      .addCase(addBlogs.pending, (state, action) => {
        state.loading = "pending";
      })
      .addCase(addBlogs.fulfilled, (state, action) => {
        state.loading = "idle";
      })
      .addCase(addBlogs.rejected, (state, action) => {
        state.error = true;
        console.error("Error adding blog:", action.error);
      })
      .addCase(delBlogs.fulfilled, (state, action) => {
        state.loading = "idle";
      })
      .addCase(delBlogs.pending, (state, action) => {
        state.loading = "pending";
      })
      .addCase(updateBlogs.fulfilled, (state, action) => {
        state.loading = "idle";
      })
      .addCase(updateBlogs.pending, (state, action) => {
        state.loading = "pending";
      });
  },
});

export default blogSlice.reducer;
