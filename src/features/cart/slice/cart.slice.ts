import { createSlice } from '@reduxjs/toolkit'

import { IProduct } from '@/entities/product/types/type'

import { getItemCartThunk } from '../api/api'

interface CartItem {
  id: string
  cartId: string
  product: IProduct
  quantity: number
  productId: string
}

interface Cart {
  cartItems: CartItem[]
}

interface initialState {
  error: null | string
  loading: boolean
  cartItem: Cart
}

const initialState: initialState = {
  error: null,
  loading: false,
  cartItem: {
    cartItems: [],
  },
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCartItem: (state, action) => {
      const existingItem = state.cartItem.cartItems.find(
        item => item.productId === action.payload.productId
      )
      if (existingItem) {
        existingItem.quantity += action.payload.quantity
      } else {
        state.cartItem.cartItems.push(action.payload)
      }
    },
    removeCartItem: (state, action) => {
      state.cartItem.cartItems = state.cartItem.cartItems.filter(
        item => item.productId !== action.payload
      )
    },
  },
  extraReducers: builder => {
    builder.addCase(getItemCartThunk.fulfilled, (state, action) => {
      state.cartItem = action.payload
    })
  },
})

export default cartSlice.reducer
export const { removeCartItem, addCartItem } = cartSlice.actions
