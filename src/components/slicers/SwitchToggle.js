import { createSlice } from "@reduxjs/toolkit";

const SwitchToggleSlice = createSlice({
    name: "Switch",
    initialState: {
        switch: "light"
    },
    reducers: {
        switchToggle: (state,{payload}) => {
            state.switch = payload.switch
        }
    }
})
export const {switchToggle} = SwitchToggleSlice.actions;
export default SwitchToggleSlice.reducer;