import { createSlice } from '@reduxjs/toolkit'

import { IProduct } from '@/entities/product/types/type'
import { getProductByIdThunk } from '@/features/product/api/api'

import { createProductThunk } from '../api/api'

interface initialState {
  error: string | null
  loading: boolean
  product: IProduct
}

const initialState: initialState = {
  error: null,
  loading: false,
  product: [],
}

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(createProductThunk.pending, state => {
        state.error = null
        state.loading = true
      })
      .addCase(createProductThunk.fulfilled, (state, action) => {
        state.error = null
        state.loading = false
        state.product = action.payload
      })
      .addCase(createProductThunk.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })

      .addCase(getProductByIdThunk.fulfilled, (state, action) => {
        state.error = null
        state.loading = false
        state.product = action.payload
      })
  },
})

export default productSlice.reducer
