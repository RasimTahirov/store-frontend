import { createSlice } from '@reduxjs/toolkit'

import { IProduct } from '@/entities/product/types/type'

import { getLastManProductThunk, getLastWomanProductThunk } from '../api/api'

interface initialState {
  error: null | string
  loading: boolean
  productMan: IProduct[]
  productWoman: IProduct[]
}

const initialState: initialState = {
  error: null,
  loading: false,
  productMan: [],
  productWoman: [],
}

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getLastManProductThunk.fulfilled, (state, action) => {
        state.error = null
        state.loading = false
        state.productMan = action.payload
      })

      .addCase(getLastWomanProductThunk.fulfilled, (state, action) => {
        state.error = null
        state.loading = false
        state.productWoman = action.payload
      })
  },
})

export default productSlice.reducer
