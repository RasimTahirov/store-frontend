'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import AuthForm from '@/features/auth/ui/authForm'
import RegisterForm from '@/features/auth/ui/registerForm'

const Auth = () => {
  const pathname = usePathname()
  const isRegistration = pathname === '/registration'

  return (
    <div className='flex justify-center items-center h-full'>
      <Card className='w-[450px]'>
        <CardHeader>
          <h3 className='flex justify-center text-xl'>{isRegistration ? 'Регистрация' : 'Вход'}</h3>
        </CardHeader>
        <CardContent>{isRegistration ? <RegisterForm /> : <AuthForm />}</CardContent>
        <CardFooter className='justify-center gap-[5px]'>
          {isRegistration ? <div>Есть аккаунт?</div> : <div>Нет аккаунт?</div>}
          {isRegistration ? (
            <Link className='link-button' href='authorization'>
              войти
            </Link>
          ) : (
            <Link className='link-button' href='registration'>
              зарегистрироваться
            </Link>
          )}
        </CardFooter>
      </Card>
    </div>
  )
}

export default Auth
