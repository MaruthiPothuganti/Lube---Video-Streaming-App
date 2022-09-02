import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from 'axios'


const initialLoginState = {
    fullName: "",
    token:"",
    email: "",
    loading: "false",
    error:""
}


export const loginUser = createAsyncThunk("Auth/login", async (data, thunkAPI) => {

    try {
        const { email, password } = data;
        const resp = await axios.post("api/auth/login", {
            email, password
        });
        return resp.data;
    }
    catch(error) {
        return thunkAPI.rejectWithValue(error);
    }
})



const loginSlice = createSlice({
    name: "auth",
    initialState: initialLoginState,
    reducers: {
        logout: (state) => { localStorage.removeItem("token") ;  state.token="" }
    },
    extraReducers: (builder) => {
      builder
          .addCase(loginUser.pending, (state, action) => {
              state.loading = true;
              console.log(action);
            })
          .addCase(loginUser.fulfilled, (state, action) => {
              console.log(action);
              state.loading = false;
              state.token = action.payload.encodedToken;
           })
          .addCase(loginUser.rejected, (state, action) => {
              state.loading = false;
              state.error = "error occured"
               console.log(action);
          })
  },
})

export default loginSlice.reducer;
export const { logout } = loginSlice.actions;
