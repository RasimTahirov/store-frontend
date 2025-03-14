import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { API_URL } from '@/shared/utils/env.url'

export const getManCategories = async () => {
  try {
    const res = await axios.get(`${API_URL}/api/user/categories/man`)
    return res.data
  } catch (error) {
    console.error('Ошибка при получении категории', error)
  }
}

export const getWomanCategories = async () => {
  try {
    const res = await axios.get(`${API_URL}/api/user/categories/woman`)
    return res.data
  } catch (error) {
    console.error('Ошибка при получении категории', error)
  }
}

export const getCategoryByUrl = async ({
  url,
  page,
  limit,
}: {
  url: string
  page: number
  limit: number
}) => {
  try {
    const res = await axios.get(`${API_URL}/api/user/category/${url}`, {
      params: {
        page,
        limit,
      },
    })
    return res.data
  } catch (error) {
    console.error('Ошибка в получении товаров', error)
  }
}

export const getProductByIdThunk = createAsyncThunk(
  'getProductById',
  async (id: string | undefined) => {
    try {
      const res = await axios.get(`${API_URL}/api/user/product/${id}`)
      return res.data
    } catch (error) {
      console.error('Ошибка в получении товара', error)
    }
  }
)

export const search = async (title: string) => {
  try {
    const res = await axios.get(`${API_URL}/api/user/search?title=${title}`)
    return res.data
  } catch (error) {
    console.error(error)
  }
}

export const getLastManProductThunk = createAsyncThunk('getLastManProduct', async () => {
  try {
    const res = await axios.get(`${API_URL}/api/user/products/man`)
    return res.data
  } catch (error) {
    console.error(error)
  }
})

export const getLastWomanProductThunk = createAsyncThunk('getLastWomanProduct', async () => {
  try {
    const res = await axios.get(`${API_URL}/api/user/products/woman`)
    return res.data
  } catch (error) {
    console.error(error)
  }
})
