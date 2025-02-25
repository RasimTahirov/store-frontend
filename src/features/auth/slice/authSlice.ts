import { createSlice } from "@reduxjs/toolkit";
import { authThunk } from "../api/api";
import { IUser } from "@/entities/auth/types/type";

interface initialState {
  error: string | null;
  loading: boolean;
  user: IUser;
}

const initialState = {
  error: null,
  loading: false,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(authThunk.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(authThunk.fulfilled, (state, action) => {
        state.error = null;
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(authThunk.rejected, (state, action) => {
        state.error = action.error as string;
        state.loading = false;
      });
  },
});

export default authSlice.reducer;
