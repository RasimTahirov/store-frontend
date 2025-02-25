import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import useRegisterSubmit from "../hooks/useRegisterForm"

// Сделать этот компонент переиспользуемым
const RegisterForm = () => {
  const { handleSubmit, register, onSumbit } = useRegisterSubmit()

  return (
    <form onSubmit={handleSubmit(onSumbit)}>
      <div className='grid gap-2.5 mb-5'>
        <Input type="text" placeholder='Имя' {...register('name')} />
        <Input type="text" placeholder='Фамилия' {...register('surname')} />
        <Input type="email" placeholder='Почта' {...register('email')} />
        <Input type="password" placeholder='Пароль' {...register('password')} />
        <Input type="password" placeholder='Подтвердите пароль' {...register('passwordRepeat')} />
      </div>
      <div className='flex justify-center'>
        <Button type='submit'>Создать аккаунт</Button>
      </div>
    </form>
  )
}

export default RegisterForm