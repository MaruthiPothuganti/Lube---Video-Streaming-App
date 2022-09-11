import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";

const initialState = {
    watchLater: [],
    loading: false,
}



export const addToWatchLater = createAsyncThunk("addToWatchLater",
    async (video, thunkAPI) => {
        try {
            const resp = axios.post("/api/user/watchlater",
                {
                    video
                },
                {
                headers: {
                    authorization: localStorage.getItem("lubeToken"),
                }
                }
                );
            return resp;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)

export const deleteVideoFromWatchLater = createAsyncThunk("deleteVideoFromWatchLater",
    async (data, thunkAPI) => {
        try {
            const { _id } = data;
            const resp = axios.delete(`/api/user/watchlater/${_id}`, {
                    headers: {
                        authorization: localStorage.getItem("lubeToken"),
                    }
                });
            return resp;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)



const WatchLaterSlice = createSlice({
    name: "watchlater",
    initialState,
    reducers:{},
    extraReducers: {

        [addToWatchLater.pending]: (state,action) => {
            console.log(action)
            state.loading = true;
        },
        [addToWatchLater.fulfilled]: (state,action) => {
            state.loading = false;
            state.watchLater = action.payload.data.watchlater;
        },
        [addToWatchLater.pending]: (state,action) => {
            console.log(action)
            state.loading = false;
        },
        [deleteVideoFromWatchLater.pending]: (state) => {
            state.loading = true;
        },
        [deleteVideoFromWatchLater.fulfilled]: (state,action) => {
            state.loading = false;
            state.watchLater = action.watchlater;
        },
        [deleteVideoFromWatchLater.pending]: (state) => {
            state.loading = false;
        },
    }
})


export default WatchLaterSlice.reducer;








