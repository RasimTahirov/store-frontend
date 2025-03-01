import { createSlice } from "@reduxjs/toolkit";
import { createCategoryThunk } from "../api/api";

interface initialState {
  error: null | string;
  loading: boolean;
  name: string;
}

const initialState: initialState = {
  error: null,
  loading: false,
  name: "",
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategoryName: (state, action) => {
      state.name = action.payload;
    },
    resetCategoryName: (state) => {
      state.name = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createCategoryThunk.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(createCategoryThunk.fulfilled, (state, action) => {
        state.error = null;
        state.loading = false;
        state.name = action.payload;
      })
      .addCase(createCategoryThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setCategoryName, resetCategoryName } = categorySlice.actions;
export default categorySlice.reducer;
