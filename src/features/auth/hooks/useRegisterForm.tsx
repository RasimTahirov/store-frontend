import { registrationSchema } from "@/entities/auth/schemas/registration.schemas"
import { FormRegisterData } from "@/entities/auth/types/type"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { fetchRegister } from "../api/api"

const useRegisterSubmit = () => {
  const { register, handleSubmit } = useForm<FormRegisterData>({
    resolver: zodResolver(registrationSchema)
  })

  const onSumbit = (data: FormRegisterData) => {
    fetchRegister(data)
  }

  return { register, handleSubmit, onSumbit }
}

export default useRegisterSubmit