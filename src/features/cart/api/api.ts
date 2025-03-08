import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const addCart = async (id: string, quantity: number = 1) => {
  try {
    const res = await axios.post('http://localhost:1200/api/cart/add', {
      productId: id,
      quantity,
    })
    return res.data
  } catch (error) {
    console.log('Ошибка')
  }
}

export const getItemCartThunk = createAsyncThunk('getItemCart', async () => {
  try {
    const res = await axios.get('http://localhost:1200/api/cart')
    return res.data
  } catch (error) {
    console.log('Ошибка')
  }
})

export const deleteCartItem = async (id: string) => {
  try {
    const res = await axios.delete(`http://localhost:1200/api/cart/delete/${id}`)
    return res.data
  } catch (error) {
    console.log('Ошибка')
  }
}

export const payment = async (amount: number) => {
  try {
    const res = await axios.post('http://localhost:1200/api/payment', {
      amount
    })
    return res
  } catch (error) {
    console.log('Ошибка оплаты', error);
    
  }
}