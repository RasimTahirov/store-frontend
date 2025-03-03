import { createSlice } from '@reduxjs/toolkit'

import { IProduct } from '@/entities/product/types/type'
import { getProductByIdThunk } from '@/features/product/api/api'

import { createProductThunk } from '../api/api'

// interface IProduct {
//   id: string
//   title: string
//   description: string
//   price: number
//   size: string
//   color: string
//   gender: string
//   image: string[]
//   compound: string
//   country: string
//   care: string
// }

interface initialState {
  error: string | null
  loading: boolean
  product: IProduct | null
}

const initialState: initialState = {
  error: null,
  loading: false,
  product: null,
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
        console.log('Была загрузка...')
      })
      .addCase(createProductThunk.fulfilled, (state, action) => {
        state.error = null
        state.loading = false
        state.product = action.payload
        console.log('action.payload', action.payload)
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
