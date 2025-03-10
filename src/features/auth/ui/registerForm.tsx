import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Toaster } from '@/components/ui/sonner'

import useRegisterSubmit from '../hooks/useRegisterForm'

const RegisterForm = () => {
  const { handleSubmit, register, errors, error, onSumbit } = useRegisterSubmit()

  return (
    <form onSubmit={handleSubmit(onSumbit)} aria-label='Форма регистрации'>
      <div className='grid gap-2.5 mb-5'>
        <div>
          <Input
            className={errors.name && 'error-input'}
            type='text'
            placeholder='Имя'
            {...register('name')}
          />
          {errors.name && <span className='error-text'>{errors.name.message}</span>}
        </div>

        <div>
          <Input
            className={errors.surname && 'error-input'}
            type='text'
            placeholder='Фамилия'
            {...register('surname')}
          />
          {errors.surname && <span className='error-text'>{errors.surname.message}</span>}
        </div>

        <div>
          <Input
            className={errors.email && 'error-input'}
            type='email'
            placeholder='Почта'
            {...register('email')}
          />
          {errors.email && <span className='error-text'>{errors.email.message}</span>}
        </div>

        <div>
          <Input
            className={errors.password && 'error-input'}
            type='password'
            placeholder='Пароль'
            {...register('password')}
          />
          {errors.password && <span className='error-text'>{errors.password.message}</span>}
        </div>

        <div>
          <Input
            className={errors.passwordRepeat && 'error-input'}
            type='password'
            placeholder='Подтвердите пароль'
            {...register('passwordRepeat')}
          />
          {errors.passwordRepeat && (
            <span className='error-text'>{errors.passwordRepeat.message}</span>
          )}
        </div>
      </div>
      {error && <div className='error-text mb-5'>{error}</div>}
      <div className='flex justify-center'>
        <Button type='submit' aria-label='Создать аккаунт'>
          Создать аккаунт
        </Button>
      </div>
      <Toaster />
    </form>
  )
}

export default RegisterForm
