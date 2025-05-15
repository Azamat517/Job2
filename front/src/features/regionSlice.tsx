import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosApiClient } from "../helpers/axios.api";
import { RootState } from "../redux/store";

import { IRegion } from "../interface/interface.region";

interface RegionResponse {
    regOP: number;
    cities: IRegion[];
}

interface State {
    regionInfo: RegionResponse[] | null,
    error: Error | null;
    loading: boolean
}

const initialState: State = {
    regionInfo: null,
    error: null,
    loading: false
}

export const getRegion = createAsyncThunk('region', async () => {
    return await axiosApiClient.get<RegionResponse[]>('/region').then((res) => res.data)
})

export const postRegion = createAsyncThunk('postRegion', async () => {
    return await axiosApiClient.post<RegionResponse[]>('/region/op').then((res) => res.data)
})



export const regionSlice = createSlice({
    name: 'region',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getRegion.fulfilled, (state, action) => {
                state.regionInfo = action.payload;
                state.loading = false;
            })
            .addCase(getRegion.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error as Error;
            })
            .addCase(getRegion.pending, (state) => {
                state.loading = true
            })
            .addCase(postRegion.fulfilled, (state, action) => {
                state.regionInfo = action.payload;
                state.loading = false;
            })
            .addCase(postRegion.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error as Error;
            })
            .addCase(postRegion.pending, (state) => {
                state.loading = true
            })

    }
})

export const region = (state: RootState) => state.obl