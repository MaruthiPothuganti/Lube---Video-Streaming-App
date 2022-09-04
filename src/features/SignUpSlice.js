import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { initialLoginState } from "./utils";

export const signupUser = createAsyncThunk(
  "Auth/SignUp",
  async (data, thunkAPI) => {
    try {
      console.log("here222");
      const { credentials, navigate } = data;
      const { email, password, firstName } = credentials;
      const resp = await axios.post("api/auth/signup", {
        email,
        password,
        firstName,
      });
      if (resp.data) {
        navigate("/");
      }
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const SignUpSlice = createSlice({
  name: "signup",
  initialState: initialLoginState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signupUser.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action?.payload?.encodedToken;
        state.email = action?.payload?.foundUser.firstName;
        state.fullName = action?.payload?.foundUser.email;
        localStorage.setItem("lubeDetails", JSON.stringify(state));
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action?.payload?.message;
      });
  },
});

export default SignUpSlice.reducer;
