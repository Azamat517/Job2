import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosApiClient } from "../helpers/axios.api";
import { RootState } from "../redux/store";
import { City } from "../interface/interface.city";

interface CityResponse {
    cityOP: number;
    cities: City[];
  }

interface State {
    cityInfo: CityResponse[] | null,
    error: Error | null;
    loading: boolean
}

const initialState: State = {
    cityInfo: null,
    error: null,
    loading: false
}

export const getCity = createAsyncThunk('city', async () => {
    return await axiosApiClient.get<CityResponse[]>('/city').then((res) => res.data)
})


export const citySlice = createSlice({
    name: 'city',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getCity.fulfilled, (state, action) => {
                state.cityInfo = action.payload;
                state.loading = false;
            })
            .addCase(getCity.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error as Error;
            })
            .addCase(getCity.pending, (state) => {
                state.loading = true
            })

    }
})

export const gorod = (state: RootState) => state.city