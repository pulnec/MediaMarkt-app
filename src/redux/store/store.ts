import { configureStore } from "@reduxjs/toolkit";
import parcelsSlice from "../slices/parcels.slice";
import itemsSlice from "../slices/items.slice";
import carriersSlice from "../slices/carriers.slice";

export const store = configureStore({
  reducer: {
    parcels: parcelsSlice,
    items: itemsSlice,
    carriers: carriersSlice,
  },
});
