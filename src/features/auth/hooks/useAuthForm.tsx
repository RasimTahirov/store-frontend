import { authSchema } from "@/entities/auth/schemas/auth.schemas"
import { FromAuthData } from "@/entities/auth/types/type"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { authThunk } from "../api/api"
import { AppDispatch } from "@/app/store/store"

const useAuthForm = () => {
  const dispatch = useDispatch<AppDispatch>()

  const { register, handleSubmit } = useForm<FromAuthData>({
    resolver: zodResolver(authSchema)
  })

  const onSumbit = (data: FromAuthData) => {
    dispatch(authThunk(data))
  }

  return { register, handleSubmit, onSumbit }
}

export default useAuthForm