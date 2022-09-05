const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const { default: axios } = require("axios");


const initialExploreState = {
    videos: [],
    loading: false,
    error:"",
}

export const fetchVideos = createAsyncThunk("fetchVideos",
    async (data,thunkAPI)=> {
        try {
            const { setVideoList } = data;
            const resp = await axios.get('/api/videos');
            setVideoList(resp?.data.videos)
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

            state.loading = true;
        },
        [fetchVideos.fulfilled]: (state, action) => {

            state.videos = action?.payload?.videos;
            state.loading = false
        },
        [fetchVideos.rejected]: (state, action) => {

            state.error = action?.payload?.message
        },
    }
})


export default exploreSlice.reducer;

