import { createSlice } from '@reduxjs/toolkit'

import { IProduct } from '@/entities/product/types/type'

import { getItemCartThunk } from '../api/api'

interface Cart {
  id: string
  cartId: string
  product: IProduct
  quantity: number
  productId: string
}

interface CartItem {
  cart: Cart[]
  totalPrice: number
}

interface CartItems {
  cartItems: CartItem
}

interface initialState {
  error: null | string
  loading: boolean
  cartItem: CartItems
}

const initialState: initialState = {
  error: null,
  loading: false,
  cartItem: {
    cartItems: {
      cart: [],
      totalPrice: 0,
    },
  },
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCartItem: (state, action) => {
      const existingItem = state.cartItem.cartItems.cart.find(
        item => item.productId === action.payload.productId
      )
      if (existingItem) {
        existingItem.quantity += action.payload.quantity
      } else {
        state.cartItem.cartItems.cart.push(action.payload)
      }

      state.cartItem.cartItems.totalPrice = state.cartItem.cartItems.cart.reduce(
        (total, item) => total + item.product.price * item.quantity,
        0
      )
    },
    removeCartItem: (state, action) => {
      state.cartItem.cartItems.cart = state.cartItem.cartItems.cart.filter(
        item => item.productId !== action.payload
      )
      state.cartItem.cartItems.totalPrice = state.cartItem.cartItems.cart.reduce(
        (total, item) => total + item.product.price * item.quantity,
        0
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
