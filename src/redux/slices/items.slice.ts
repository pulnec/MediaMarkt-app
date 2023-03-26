import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchItems = createAsyncThunk("items/fetchItems", async () => {
  const response = await axios.get(
    "https://challenges-asset-files.s3.us-east-2.amazonaws.com/Events/Media+Markt/Challenges/items_mm.json"
  );
  return response.data;
});

const itemsSlice = createSlice({
  name: "items",
  initialState: {
    items: [],
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [fetchItems.pending]: (state: any, action: any) => {
      state.loading = true;
    },
    [fetchItems.fulfilled]: (state: any, action: any) => {
      state.parcel = action.payload;
    },
    [fetchItems.rejected]: (state: any, action: any) => {
      state.loading = false;
    },
  },
});

export default itemsSlice.reducer;
