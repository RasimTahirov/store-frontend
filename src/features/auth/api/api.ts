import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { FormRegisterData, FromAuthData } from '@/entities/auth/types/type'
import { API_URL } from '@/shared/utils/env.url'

axios.defaults.withCredentials = true

export const fetchRegister = async (registerData: FormRegisterData) => {
  try {
    const res = await axios.post(`${API_URL}/api/auth/register`, registerData)
    return res
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response?.data.message
    }
  }
}

export const authThunk = createAsyncThunk(
  'auth',
  async (data: FromAuthData, { rejectWithValue }) => {
    try {
      const res = await axios.post(`${API_URL}/api/auth/login`, data)
      return res.data
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message || 'Неизвестная ошибка')
      }
      return rejectWithValue('Неизвестная ошибка')
    }
  }
)

export const logout = async () => {
  try {
    const res = await axios.post(`${API_URL}/api/auth/logout`)
    return res.data
  } catch (error) {
    console.error('Ошибка при выходе из аккаунта', error)
  }
}

export const userDataThunk = createAsyncThunk('userData', async () => {
  try {
    const res = await axios.get(`${API_URL}/api/user/data`)
    return res.data
  } catch (error) {
    console.error('Ошибка получении данных', error)
  }
})

export const checkAuthStatusThunk = createAsyncThunk('checkAuthStatus', async () => {
  try {
    const res = await axios.get(`${API_URL}/api/user/status`)
    return res.data
  } catch (error) {
    console.error('Ошибка данных', error)
  }
})
