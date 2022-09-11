import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  playlists: null,
  loading: false,
  error: "",
};



export const addPlaylist = createAsyncThunk(
  "addPlaylist",
  async (data,thunkAPI) => {
    try {
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

export const deletePlaylist = createAsyncThunk(
  "deletePlaylist",
  async (data,thunkAPI) => {
    try {
      const { _id } = data;
      const resp = await axios.delete(`/api/user/playlists/${_id}`,
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
      const resp = await axios.post(`/api/user/playlists/${_id}`,
      {
        video
      },
      {
        headers:{
          authorization: localStorage.getItem("lubeToken"),
      },
    });
    return resp?.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
);

export const deleteVideoFromPlaylist = createAsyncThunk(
  "removeVideoFromPlaylist",
  async (data,thunkAPI) => {
    try {
      const { video, _id } = data;
      const resp = await axios.delete(`/api/user/playlists/${_id}/${video._id}`,
      {
        headers:{
          authorization: localStorage.getItem("lubeToken"),
      },
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
  extraReducers: {
    [addPlaylist.pending]: (state) => {
      state.loading = true;
    },
    [addPlaylist.fulfilled]: (state, action) => {
      state.loading = false;
      state.playlists = action.payload.playlists;
    },
    [addPlaylist.rejected]: (state) => {
      state.loading = false;
    },
    [addVideoToPlaylist.pending]: (state) => {
      state.loading = true;
    },
    [addVideoToPlaylist.fulfilled]: (state, action) => {
      state.loading = false;
      state.playlists = state.playlists.map((playlist) => {
        return playlist._id ===action.payload.playlist._id ? action.payload.playlist: playlist
      })
    },
    [addVideoToPlaylist.rejected]: (state) => {
      state.loading = false;
    },
    [deletePlaylist.pending]: (state) => {
      state.loading = true;
    },
    [deletePlaylist.fulfilled]: (state, action) => {
      state.loading = false;
      state.playlists = action.payload.playlists;
    },
    [deletePlaylist.rejected]: (state) => {
      state.loading = false;
    },
    [deleteVideoFromPlaylist.pending]: (state) => {
      state.loading = true;
    },
    [deleteVideoFromPlaylist.fulfilled]: (state, action) => {
      console.log(action.payload.playlist)
      state.loading = false;
      state.playlists = state.playlists.map((playlist) => {
        return playlist._id ===action.payload.playlist._id ? action.payload.playlist: playlist
      })
    },
    [deleteVideoFromPlaylist.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default playlistSlice.reducer;
export const { modalOpen, modalClose } = playlistSlice.actions;
