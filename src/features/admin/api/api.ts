import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getAlUser = async ({ page, limit }: { page: number; limit: number }) => {
  try {
    const res = await axios.get('http://localhost:1200/api/admin/users', {
      params: {
        page,
        limit,
      },
    })
    return res.data
  } catch (error) {
    console.error('Ошибка в получении пользователей', error)
  }
}

export const updateRole = async (id: string | undefined, data: string) => {
  try {
    const res = await axios.put(`http://localhost:1200/api/admin/user/update/${id}`, {
      role: data,
    })
    return res.data
  } catch (error) {
    console.error('Ошибка при изменении роли', error)
  }
}

export const deleteUser = async (id: string | undefined) => {
  try {
    const res = await axios.delete(`http://localhost:1200/api/admin/user/${id}`)
    return res.data
  } catch (error) {
    console.error('Ошибка при удалении пользователя', error)
  }
}

export const getAllCategories = async () => {
  try {
    const res = await axios.get('http://localhost:1200/api/user/categories')
    return res.data
  } catch (error) {
    console.error('Ошибка при получении категории', error)
  }
}

export const createCategoryThunk = createAsyncThunk('createCategory', async (name: string) => {
  try {
    const res = await axios.post('http://localhost:1200/api/admin/create/category', {
      name,
    })
    return res.data
  } catch (error) {
    console.error('Ошибка при создании категории', error)
  }
})

export const createProductThunk = createAsyncThunk('createProduct', async (data: FormData) => {
  try {
    const res = await axios.post('http://localhost:1200/api/admin/create/product', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    return res.data
  } catch (error) {
    console.error('Ошибка при создании товара', error)
  }
})
