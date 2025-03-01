'use client'

import { CircleUserRound, LogIn, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AppDispatch, RootState } from '@/app/store/store'
import { Input } from '@/components/ui/input'
import { checkAuthStatusThunk } from '@/features/auth/api/api'
import { pageConfig } from '@/shared/config/pageConfig'

const Header = () => {
  const dispatch = useDispatch<AppDispatch>()
  const authStatus = useSelector((state: RootState) => state.auth.isAuth)

  useEffect(() => {
    dispatch(checkAuthStatusThunk())
  }, [dispatch])

  return (
    <header className='h-20 flex items-center justify-between'>
      <div className='flex items-center justify-start gap-x-5'>
        <div className='text-3xl font-bold'>LOGO</div>
        <nav>Тут будет навигация</nav>
      </div>
      <div className='flex items-center'>
        <Input type='search' placeholder='Поиск товаров...' className='w-[350px]' />
        <div className='flex gap-x-2.5 ml-20'>
          {authStatus ? (
            <>
              <div>
                <ShoppingCart />
              </div>
              <Link href={pageConfig.account}>
                <CircleUserRound />
              </Link>
            </>
          ) : (
            <Link href={pageConfig.authorization}>
              <LogIn />
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header

// Поменять закругление на Input
