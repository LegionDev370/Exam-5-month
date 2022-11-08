import { createSlice } from "@reduxjs/toolkit";

const navigateSlice = createSlice({
    name: "navigate",
    initialState: {
        token: false,
    },
    reducers: {
        setToken: (state,action) => {
            state.token = action.payload
        }
    }
})
export const {setToken} = navigateSlice.actions;
export default navigateSlice.reducer;