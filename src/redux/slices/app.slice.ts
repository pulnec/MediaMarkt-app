import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialErrorState = {
  isVisible: false,
  type: "",
  text: "",
  buttonLabel: "",
};

const appSlice = createSlice({
  name: "items",
  initialState: {
    error: initialErrorState,
  },
  reducers: {
    showAlert: (state, action) => {
      return {
        ...state,
        error: action.payload,
      };
    },
    resetAlert: (state) => {
      return {
        ...state,
        error: initialErrorState,
      };
    },
  },
  extraReducers: {},
});

export const { showAlert, resetAlert } = appSlice.actions;
export default appSlice.reducer;
