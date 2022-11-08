import { createSlice } from "@reduxjs/toolkit";
const getTokenSlice = createSlice({
    name: "getToken",
    initialState: {
        token: JSON.parse(localStorage.getItem("token")) ? JSON.parse(localStorage.getItem("token")) : "",
    },
    reducers: {
        getToken: (state,action) => {
            state.token = action.payload.token
        }
    }
})
export const {getToken} = getTokenSlice.actions;
export default getTokenSlice.reducer;