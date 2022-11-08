import { createSlice } from "@reduxjs/toolkit";

const LinearSlice = createSlice({
  name: "Spinner",
  initialState: {
    linear: false,
  },
  reducers: {
    setLinear: (state, action) => {
      state.linear = action.payload.linear;
    },
  },
});
export const {setLinear} = LinearSlice.actions;
export default LinearSlice.reducer;