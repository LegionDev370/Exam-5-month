import { createSlice } from "@reduxjs/toolkit";

const renderDatasHero = createSlice({
    name: "renderDatas",
    initialState: {
        Data : [],
    },
    reducers: {
        getApi: (state,action) => {
            state.Data = action.payload.array
        }
    }
})
export const {getApi} = renderDatasHero.actions
export default renderDatasHero.reducer