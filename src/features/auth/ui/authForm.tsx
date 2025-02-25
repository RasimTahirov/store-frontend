import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import useAuthForm from "../hooks/useAuthForm"

const AuthForm = () => {
  const { handleSubmit, register, onSumbit } = useAuthForm() 
  
  return (
    <form onSubmit={handleSubmit(onSumbit)}>
      <div className='grid gap-2.5 mb-5'>
        <Input type="email" placeholder='Логин' {...register('email')}/>
        <Input type="password" placeholder='Пароль' {...register('password')}/>
      </div>
      <div className='flex justify-center'>
        <Button type='submit'>Войти</Button>
      </div>
    </form>
  )
}

export default AuthForm