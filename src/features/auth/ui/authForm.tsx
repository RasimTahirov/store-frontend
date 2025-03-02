import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

import useAuthForm from '../hooks/useAuthForm'

const AuthForm = () => {
  const { handleSubmit, register, errors, error, onSumbit } = useAuthForm()

  return (
    <form onSubmit={handleSubmit(onSumbit)}>
      <div className='grid gap-2.5 mb-5'>
        <div>
          <Input
            className={errors.email && 'error-input'}
            type='email'
            placeholder='Почта'
            {...register('email')}
          />
          {errors.email && <div className='error-text'>{errors.email.message}</div>}
        </div>
        <div>
          <Input
            className={errors.email && 'error-input'}
            type='password'
            placeholder='Пароль'
            {...register('password')}
          />
          {errors.password && <div className='error-text'>{errors.password.message}</div>}
        </div>
      </div>
      {error && <div className='error-text mb-5'>{error}</div>}
      <div className='flex justify-center'>
        <Button type='submit'>Войти</Button>
      </div>
    </form>
  )
}

export default AuthForm
