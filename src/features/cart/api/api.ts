import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { API_URL } from '@/shared/utils/env.url'

export const addCart = async (id: string, quantity: number = 1) => {
  try {
    const res = await axios.post(`${API_URL}/api/cart/add`, {
      productId: id,
      quantity,
    })
    return res.data
  } catch (error) {
    console.error('Ошибка при добавление товара в корзину')
  }
}

export const getItemCartThunk = createAsyncThunk('getItemCart', async () => {
  try {
    const res = await axios.get(`${API_URL}/api/cart`)
    return res.data
  } catch (error) {
    console.error('Ошибка корзины')
  }
})

export const deleteCartItem = async (id: string) => {
  try {
    const res = await axios.delete(`${API_URL}/api/cart/delete/${id}`)
    return res.data
  } catch (error) {
    console.error('Ошибка удалении товара')
  }
}

export const payment = async (amount: number) => {
  try {
    const res = await axios.post(`${API_URL}/api/payment`, {
      amount,
    })
    return res
  } catch (error) {
    console.error('Ошибка оплаты')
  }
}
