import { createSlice } from "@reduxjs/toolkit";

const SpinnnerSlice = createSlice({
  name: "Spinner",
  initialState: {
    spinner: false,
  },
  reducers: {
    setSpinner: (state, action) => {
      state.spinner = action.payload.spinner;
    },
  },
});
export const {setSpinner} = SpinnnerSlice.actions;
export default SpinnnerSlice.reducer;