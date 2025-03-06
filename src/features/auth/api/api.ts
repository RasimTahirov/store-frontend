import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { FormRegisterData, FromAuthData } from '@/entities/auth/types/type'

axios.defaults.withCredentials = true

export const fetchRegister = async (registerData: FormRegisterData) => {
  try {
    const res = await axios.post('http://localhost:1200/api/auth/register', registerData)
    console.log('res', res)
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
      const res = await axios.post('http://localhost:1200/api/auth/login', data)
      return res.status
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
    const res = await axios.post('http://localhost:1200/api/auth/logout')
    return res.data
  } catch (error) {
    console.log('Ошибка при выходе', error)
  }
}

export const userDataThunk = createAsyncThunk('userData', async () => {
  try {
    const res = await axios.get('http://localhost:1200/api/user/data')
    return res.data
  } catch (error) {
    console.log('Ошибка получении данных', error)
  }
})

export const checkAuthStatusThunk = createAsyncThunk('checkAuthStatus', async () => {
  try {
    const res = await axios.get('http://localhost:1200/api/user/status')
    return res.data
  } catch (error) {
    console.log('Ошибка данных', error)
  }
})
