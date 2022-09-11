import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";

const initialState = {
    watchLater: [],
    loading: false,
}

export const fetchWatchLaterVideos = createAsyncThunk("fetchWatchLaterVideos",
    async (data, thunkAPI) => {
        try {
            const resp = axios.get("/api/user/watchlater");
            return resp?.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
    }
})

export const addToWatchLater = createAsyncThunk("addToWatchLater",
    async (data, thunkAPI) => {
        try {
            const resp = axios.post("/api/user/watchlater");
            return resp?.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)

export const deleteVideoFromWatchLater = createAsyncThunk("deleteVideoFromWatchLater",
    async (data, thunkAPI) => {
        try {
            const { _id } = data;
            const resp = axios.delete(`/api/user/watchlater/${_id}`);
            return resp?.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)



const WatchLaterSlice = createSlice({
    name: "watchlater",
    initialState,
    extraReducers: {
        [fetchWatchLaterVideos.pending]: (state) => {
            state.loading = true;
        },
        [fetchWatchLaterVideos.fulfilled]: (state,action) => {
            state.loading = false;
            state.watchLater = action.watchLater;
        },
        [fetchWatchLaterVideos.pending]: (state) => {
            state.loading = false;
        },
        [addToWatchLater.pending]: (state) => {
            state.loading = true;
        },
        [addToWatchLater.fulfilled]: (state,action) => {
            state.loading = false;
            state.watchLater = action.watchLater;
        },
        [addToWatchLater.pending]: (state) => {
            state.loading = false;
        },
        [deleteVideoFromWatchLater.pending]: (state) => {
            state.loading = true;
        },
        [deleteVideoFromWatchLater.fulfilled]: (state,action) => {
            state.loading = false;
            state.watchLater = action.watchLater;
        },
        [deleteVideoFromWatchLater.pending]: (state) => {
            state.loading = false;
        },
    }
})


export default WatchLaterSlice.reducer;








