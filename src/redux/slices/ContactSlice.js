import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const api = import.meta.env.VITE_API_URL;
const key = import.meta.env.VITE_ID_USER;

export const addContact = createAsyncThunk(
  "contact/addContact",
  async (data) => {
    const response = await axios.post(`${api}/contact`, data, {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": key,
      },
    });
    console.log(response.data);
    return response.data.data;
  }
);

const initialState = {
  contact: {},
  loading: false,
  error: null,
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addContact.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(addContact.fulfilled, (state, action) => {
      state.loading = false;
      state.contact = action.payload;
      console.log(state.contact);
    });
    builder.addCase(addContact.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default contactSlice.reducer;
