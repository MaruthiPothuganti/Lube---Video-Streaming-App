const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const { default: axios } = require("axios");


const initialExploreState = {
    videos: [],
    loading: false,
    error:"",
}

export const fetchVideos = createAsyncThunk("fetchVideos",
    async ( thunkAPI)=> {
        try {
            const resp = await axios.get('/api/videos');
            return resp?.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
}
})


const exploreSlice = createSlice({
    name: "explore",
    initialState: initialExploreState,
    extraReducers: {
        [fetchVideos.pending]: (state, action) => {
            console.log(action)
            state.loading = true;
        },
        [fetchVideos.fulfilled]: (state, action) => {
            console.log(action)
            state.videos = action?.payload?.videos;
            state.loading = false
        },
        [fetchVideos.rejected]: (state, action) => {
            console.log(action)
            state.error = action?.payload?.message
        },
    }
})


export default exploreSlice.reducer;

