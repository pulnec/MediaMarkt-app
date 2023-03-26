import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchParcel = createAsyncThunk("parcel/fetchParcels", async () => {
  const response = await axios.get(
    "https://challenges-asset-files.s3.us-east-2.amazonaws.com/Events/Media+Markt/Challenges/parcels_mm.json"
  );
  return response.data;
});

const parcelsSlice = createSlice({
  name: "parcel",
  initialState: {
    parcel: [],
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [fetchParcel.pending]: (state: any, action: any) => {
      state.loading = true;
    },
    [fetchParcel.fulfilled]: (state: any, action: any) => {
      state.parcel = action.payload;
    },
    [fetchParcel.rejected]: (state: any, action: any) => {
      state.loading = false;
    },
  },
});

export default parcelsSlice.reducer;
