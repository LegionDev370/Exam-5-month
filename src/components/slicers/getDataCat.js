import { createSlice } from "@reduxjs/toolkit";

const getDataCatSlice = createSlice({
  name: "getDataCategory",
  initialState: {
    data: [],
  },
  reducers: {
    recieveCategory: (state, action) => {
      state.data = action.payload.state;
    },
  },
});
export const {recieveCategory} = getDataCatSlice.actions;
export default getDataCatSlice.reducer;
