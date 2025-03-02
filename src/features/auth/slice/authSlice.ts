import { createSlice } from '@reduxjs/toolkit'

import { IUser } from '@/entities/auth/types/type'

import { authThunk, checkAuthStatusThunk, userDataThunk } from '../api/api'

interface initialState {
  error: string | null
  loading: boolean
  user: IUser | null
  isAuth: boolean
}

const initialState: initialState = {
  error: null,
  loading: false,
  user: null,
  isAuth: false,
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

      .addCase(checkAuthStatusThunk.fulfilled, (state, action) => {
        state.error = null
        state.loading = false
        state.isAuth = action.payload
      })
  },
})

export default authSlice.reducer
