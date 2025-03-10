import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'

import { AppDispatch, RootState } from '@/app/store/store'
import { authSchema } from '@/entities/auth/schemas/auth.schemas'
import { FromAuthData } from '@/entities/auth/types/type'
import { pageConfig } from '@/shared/config/pageConfig'

import { authThunk } from '../api/api'

const useAuthForm = () => {
  const dispatch = useDispatch<AppDispatch>()
  const navigation = useRouter()

  const error = useSelector((state: RootState) => state.auth.error)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FromAuthData>({
    resolver: zodResolver(authSchema),
  })

  const onSumbit = async (data: FromAuthData) => {
    const result = await dispatch(authThunk(data))
    if (result.type === 'auth/fulfilled') {
      navigation.push(pageConfig.home)
    }
  }

  return { register, handleSubmit, errors, error, onSumbit }
}

export default useAuthForm
