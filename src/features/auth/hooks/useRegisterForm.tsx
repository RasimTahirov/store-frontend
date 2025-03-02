'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { registrationSchema } from '@/entities/auth/schemas/registration.schemas'
import { FormRegisterData } from '@/entities/auth/types/type'

import { fetchRegister } from '../api/api'

const useRegisterSubmit = () => {
  const [error, setError] = useState('')
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormRegisterData>({
    resolver: zodResolver(registrationSchema),
  })

  const onSumbit = async (data: FormRegisterData) => {
    const result = await fetchRegister(data)
    if (result) {
      setError(result)
    }
  }

  return { register, handleSubmit, errors, error, onSumbit }
}

export default useRegisterSubmit
// Исправить ошибку с регистрацей
