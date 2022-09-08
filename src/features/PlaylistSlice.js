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

export const fetchSinglePlaylist = createAsyncThunk(
  "fetchSinglePlaylist",
  async (_id,thunkAPI) => {
    try {
      const resp = await axios.get(`/api/user/playlists/${_id}`, {
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
    try {
      console.log(data)
      const resp = await axios.post("/api/user/playlists",
        {
              playlist: { title: data , description:""}
        },
        {
          headers: {
             authorization: localStorage.getItem("lubeToken")
          },
        }
      );
    return resp?.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
);

export const addVideoToPlaylist = createAsyncThunk(
  "addVideoToPlaylist",
  async (data,thunkAPI) => {
    try {
      const { video, _id } = data;
      const resp = await axios.post(`/api/user/playlists/${_id}`, {
      authorization: localStorage.getItem("lubeToken"),
    }, {
      video
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
    [fetchPlaylists.rejected]: (state) => {
      state.loading = false;
    },
    [fetchSinglePlaylist.pending]: (state) => {
      state.loading = true;
    },
    [fetchSinglePlaylist.fulfilled]: (state, action) => {
      state.loading = false;
      state.playlists = action?.playlist;
    },
    [fetchSinglePlaylist.rejected]: (state) => {
      state.loading = false;
    },
    [addPlaylist.pending]: (state, action) => {
      console.log(action)
      state.loading = true;
    },
    [addPlaylist.fulfilled]: (state, action) => {
      state.loading = false;
      state.playlists = action.payload.playlists;
    },
    [addPlaylist.rejected]: (state,action) => {
      console.log(action)
      state.loading = false;
    },
    [addVideoToPlaylist.pending]: (state) => {
      state.loading = true;
    },
    [addVideoToPlaylist.fulfilled]: (state, action) => {
      state.loading = false;
      state.playlists = action?.playlist;
    },
    [addVideoToPlaylist.rejected]: (state) => {
      state.loading = false;
    },

  },
});

export default playlistSlice.reducer;
export const { modalOpen, modalClose } = playlistSlice.actions;
