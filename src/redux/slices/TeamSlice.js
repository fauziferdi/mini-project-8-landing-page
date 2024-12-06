import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const api = import.meta.env.VITE_API_URL;
const key = import.meta.env.VITE_ID_USER;

export const fetchTeams = createAsyncThunk("team/fetchTeams", async () => {
  const response = await axios.get(
    `${api}/teams?usernames[0]=brooklynsimmons&usernames[1]=codyfisher&usernames[2]=esterhoward`,
    {
      headers: {
        "x-api-key": key,
      },
    }
  );
  console.log(response.data);
  return response.data.data;
});

const initialState = {
  teams: [],
  loading: false,
  error: null,
};

const teamSlice = createSlice({
  name: "team",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTeams.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchTeams.fulfilled, (state, action) => {
      state.loading = false;
      state.teams = action.payload;
      console.log(state.teams);
    });
    builder.addCase(fetchTeams.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default teamSlice.reducer;
