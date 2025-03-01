import { configureStore } from '@reduxjs/toolkit'

import categoryReducer from '../../features/admin/slice/categorySlice'
import productReducer from '../../features/admin/slice/productSlice'
import authReducer from '../../features/auth/slice/authSlice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    category: categoryReducer,
    product: productReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
