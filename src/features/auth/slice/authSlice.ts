import { createSlice } from '@reduxjs/toolkit'

import { IUser } from '@/entities/auth/types/type'

import { authThunk, userDataThunk } from '../api/api'

interface initialState {
  error: string | null
  loading: boolean
  user: IUser | null
}

const initialState: initialState = {
  error: null,
  loading: false,
  user: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(authThunk.pending, state => {
        state.error = null
        state.loading = true
      })
      .addCase(authThunk.fulfilled, (state, action) => {
        state.error = null
        state.loading = false
        state.user = action.payload
      })
      .addCase(authThunk.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })

      .addCase(userDataThunk.fulfilled, (state, action) => {
        state.error = null
        state.loading = false
        state.user = action.payload
      })
  },
})

export default authSlice.reducer
