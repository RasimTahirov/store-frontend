import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getManCategories = async () => {
  try {
    const res = await axios.get('http://localhost:1200/api/user/categories/man')
    return res.data
  } catch (error) {
    console.log('Ошибка', error)
  }
}

export const getWomanCategories = async () => {
  try {
    const res = await axios.get('http://localhost:1200/api/user/categories/woman')
    return res.data
  } catch (error) {
    console.log('Ошибка', error)
  }
}

// export const getCategoryByUrl = async ({url, page, limit}: {url: string, page: number, limit: number}) => {
//   try {
//     const res = await axios.get(`http://localhost:1200/api/user/category/${url}`)
//     return res.data
//   } catch (error) {
//     console.log('Ошибка', error)
//   }
// }

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
    const res = await axios.get(`http://localhost:1200/api/user/category/${url}`, {
      params: {
        page,
        limit,
      },
    })
    return res.data
  } catch (error) {
    console.log('Ошибка', error)
  }
}

export const getProductByIdThunk = createAsyncThunk(
  'getProductById',
  async (id: string | undefined) => {
    try {
      const res = await axios.get(`http://localhost:1200/api/user/product/${id}`)
      return res.data
    } catch (error) {
      console.log('Ошибка')
    }
  }
)
