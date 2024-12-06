import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const api = import.meta.env.VITE_API_URL;
const key = import.meta.env.VITE_ID_USER;

export const fetchTestimonial = createAsyncThunk(
  "tetimonial/fetchTestimonial",
  async () => {
    const response = await axios.get(`${api}/testimonials?limit=2`, {
      headers: {
        "x-api-key": key,
      },
    });

    return response.data.data;
  }
);

const initialState = {
  tetimonials: [],
  loading: false,
  error: null,
};

const tetimonialSlice = createSlice({
  name: "tetimonial",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTestimonial.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchTestimonial.fulfilled, (state, action) => {
      state.loading = false;
      state.tetimonials = action.payload;
      console.log(state.tetimonials);
    });
    builder.addCase(fetchTestimonial.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default tetimonialSlice.reducer;
