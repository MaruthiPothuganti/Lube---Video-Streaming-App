import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { initialLoginState } from "./utils";

const backupDetails = JSON.parse(localStorage.getItem("lubeDetails"));

export const loginUser = createAsyncThunk(
  "Auth/login",
  async (data, thunkAPI) => {
    try {
      const { credentials, navigate, from } = data;
      const { email, password } = credentials;
      const resp = await axios.post("api/auth/login", {
        email,
        password,
      });
      if (resp.data) {
        navigate(from, { replace: true });
      }
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const loginSlice = createSlice({
  name: "login",
  initialState: backupDetails || initialLoginState,
  reducers: {
    logout: (state) => {
      state.token = "";
      localStorage.removeItem("lubeDetails");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state, action) => {
        console.log(action);
        // state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        console.log(action);
        // state.loading = false;
        // state.token = action?.payload?.encodedToken;
        // state.email = action?.payload?.foundUser.firstName;
        // state.fullName = action?.payload?.foundUser.email;
        // localStorage.setItem("lubeDetails", JSON.stringify(state));
      })
      .addCase(loginUser.rejected, (state, action) => {
        console.log(action);
        // state.loading = false;
        // state.error = action?.payload?.message;
      });
  },
});

export default loginSlice.reducer;
export const { logout } = loginSlice.actions;
