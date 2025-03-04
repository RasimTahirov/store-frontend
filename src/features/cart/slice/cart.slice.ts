import { createSlice } from '@reduxjs/toolkit'

import { getItemCartThunk } from '../api/api'

// interface cartItems {}

// interface initialState {
//   error: null | string,
//   loading: boolean,
//   cartItem: cartItems
// }

const initialState = {
  error: null,
  loading: false,
  cartItem: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getItemCartThunk.fulfilled, (state, action) => {
      state.cartItem = action.payload
    })
  },
})

export default cartSlice.reducer
