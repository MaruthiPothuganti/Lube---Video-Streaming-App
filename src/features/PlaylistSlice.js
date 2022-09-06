import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  playlists: null,
  loading: false,
  modalOpen: false,
  error: "",
};

export const fetchPlaylists = createAsyncThunk(
  "fetchPlaylists",
  async (thunkAPI) => {
    try {
      const resp = await axios.get("/api/user/playlists", {
      authorization: localStorage.getItem("lubeToken"),
    });
    return resp?.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error)
    }
  }
);

export const addPlaylist = createAsyncThunk(
  "addPlaylist",
  async (data,thunkAPI) => {
    try{
      const resp = await axios.post("/api/user/playlists", {
      authorization: localStorage.getItem("lubeToken"),
    }, {
      playlist: {title:data , description:""}
    });
    return resp?.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
);

const playlistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    modalOpen: (state) => {
      state.modalOpen = true;
    },
    modalClose: (state) => {
      state.modalOpen = false;
    },
  },
  extraReducers: {
    [fetchPlaylists.pending]: (state) => {
      state.loading = true;
    },
    [fetchPlaylists.fulfilled]: (state, action) => {
      state.loading = false;
      state.playlists = action?.playlists;
    },
    [fetchPlaylists.rejected]: (state, action) => {
      state.error = action?.data?.meesage;
    },
    [addPlaylist.pending]: (state) => {
      state.loading = true;
    },
    [addPlaylist.fulfilled]: (state, action) => {
      state.loading = false;
      state.playlists = action?.playlists;
    },
    [addPlaylist.rejected]: (state, action) => {
      state.error = action?.data?.meesage;
    },
  },
});

export default playlistSlice.reducer;
export const { modalOpen, modalClose } = playlistSlice.actions;
