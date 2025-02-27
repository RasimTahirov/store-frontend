import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import useRegisterSubmit from "../hooks/useRegisterForm"

// Сделать этот компонент переиспользуемым
const RegisterForm = () => {
  const { handleSubmit, register, errors, error, onSumbit } = useRegisterSubmit()

  return (
    <form onSubmit={handleSubmit(onSumbit)}>
      <div className='grid gap-2.5 mb-5'>
        <div>
          <Input className={errors.name && 'error-input'} type="text" placeholder='Имя' {...register('name')} />
          {errors.name && <div className="error-text">{errors.name.message}</div>}
        </div>
        <div>
          <Input className={errors.surname && 'error-input'} type="text" placeholder='Фамилия' {...register('surname')} />
          {errors.surname && <div className="error-text">{errors.surname.message}</div>}
        </div>
        <div>
          <Input className={errors.email && 'error-input'} type="email" placeholder='Почта' {...register('email')} />
          {errors.email && <div className="error-text">{errors.email.message}</div>}
        </div>
        <div>
          <Input className={errors.password && 'error-input'} type="password" placeholder='Пароль' {...register('password')} />
          {errors.password && <div className="error-text">{errors.password.message}</div>}
        </div>
        <div>
          <Input className={errors.passwordRepeat && 'error-input'} type="password" placeholder='Подтвердите пароль' {...register('passwordRepeat')} />
          {errors.passwordRepeat && <div className="error-text">{errors.passwordRepeat.message}</div>}
        </div>
      </div>
      {error && <div className="error-text mb-5">{error}</div>}
      <div className='flex justify-center'>
        <Button type='submit'>Создать аккаунт</Button>
      </div>
    </form>
  )
}

export default RegisterForm