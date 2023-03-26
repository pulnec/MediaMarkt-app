import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCarriers = createAsyncThunk(
  "carriers/fetchCarriers",
  async () => {
    const response = await axios.get(
      "https://challenges-asset-files.s3.us-east-2.amazonaws.com/Events/Media+Markt/Challenges/carriers_mm.json"
    );
    return response.data;
  }
);

const carriersSlice = createSlice({
  name: "items",
  initialState: {
    carriers: [],
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [fetchCarriers.pending]: (state: any, action: any) => {
      state.loading = true;
    },
    [fetchCarriers.fulfilled]: (state: any, action: any) => {
      state.parcel = action.payload;
    },
    [fetchCarriers.rejected]: (state: any, action: any) => {
      state.loading = false;
    },
  },
});

export default carriersSlice.reducer;
