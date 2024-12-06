import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const api = import.meta.env.VITE_API_URL;
const key = import.meta.env.VITE_ID_USER;

export const fetchAllBlog = createAsyncThunk("blog/fetchAllBlog", async () => {
  const response = await axios.get(`${api}/blogs`, {
    headers: {
      "x-api-key": key,
    },
  });
  console.log(response.data);
  return response.data.data;
});

export const fetchBlogDetail = createAsyncThunk(
  "portofolio/fetchBlogDetail",
  async (id) => {
    const response = await axios.get(`${api}/blogs/${id}`, {
      headers: {
        "x-api-key": key,
      },
    });
    console.log("1", response.data);
    return response.data;
  }
);

const initialState = {
  blogs: [],
  blog: {},
  loading: false,
  error: null,
};

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllBlog.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchAllBlog.fulfilled, (state, action) => {
      state.loading = false;
      state.blogs = action.payload;
      console.log(state.blogs);
    });
    builder.addCase(fetchAllBlog.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(fetchBlogDetail.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchBlogDetail.fulfilled, (state, action) => {
      state.loading = false;
      state.blog = action.payload;
      console.log("2", state.blog);
    });
    builder.addCase(fetchBlogDetail.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default blogSlice.reducer;
