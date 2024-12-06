import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const api = import.meta.env.VITE_API_URL;
const key = import.meta.env.VITE_ID_USER;

export const fetchPortofolio = createAsyncThunk(
  "portofolio/fetchPortofolio",
  async () => {
    const response = await axios.get(`${api}/portfolios`, {
      headers: {
        "x-api-key": key,
      },
    });
    console.log(response.data);
    return response.data.data;
  }
);

export const fetchPortofolioDetail = createAsyncThunk(
  "portofolio/fetchPortofolioDetail",
  async (id) => {
    const response = await axios.get(`${api}/portfolios/${id}`, {
      headers: {
        "x-api-key": key,
      },
    });
    console.log(response.data);
    return response.data;
  }
);

const initialState = {
  portofolios: [],
  portofolio: {},
  loading: false,
  error: null,
};

const portofolioSlice = createSlice({
  name: "portofolio",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPortofolio.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchPortofolio.fulfilled, (state, action) => {
      state.loading = false;
      state.portofolios = action.payload;
      console.log(state.portofolios);
    });
    builder.addCase(fetchPortofolio.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(fetchPortofolioDetail.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(fetchPortofolioDetail.fulfilled, (state, action) => {
      state.loading = false;
      state.portofolio = action.payload;
      console.log(state.portofolio);
    });

    builder.addCase(fetchPortofolioDetail.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default portofolioSlice.reducer;
