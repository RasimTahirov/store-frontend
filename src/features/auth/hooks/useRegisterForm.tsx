'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { registrationSchema } from '@/entities/auth/schemas/registration.schemas'
import { FormRegisterData } from '@/entities/auth/types/type'
import { pageConfig } from '@/shared/config/pageConfig'

import { fetchRegister } from '../api/api'

const useRegisterSubmit = () => {
  const [error, setError] = useState('')
  const navigate = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormRegisterData>({
    resolver: zodResolver(registrationSchema),
  })

  const onSumbit = async (data: FormRegisterData) => {
    const result = await fetchRegister(data)
    if (result.status !== 201) {
      setError(result)
    } else if (result.status === 201) {
      toast.success('Аккаунт успешно создан')
      setTimeout(() => {
        navigate.push(pageConfig.authorization)
      }, 2500)
    }
  }

  return { register, handleSubmit, errors, error, onSumbit }
}

export default useRegisterSubmit
