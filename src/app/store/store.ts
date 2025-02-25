import { configureStore } from "@reduxjs/toolkit";

import authRedicer from '../../features/auth/slice/authSlice'

const store = configureStore({
  reducer: {
    auth: authRedicer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store