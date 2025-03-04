'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AppDispatch, RootState } from '@/app/store/store'
import { Input } from '@/components/ui/input'
import { checkAuthStatusThunk } from '@/features/auth/api/api'
import { pageConfig } from '@/shared/config/pageConfig'
import Navigation from '@/shared/ui/navigation'
import UserActions from '@/shared/ui/userActions'

const Header = () => {
  const dispatch = useDispatch<AppDispatch>()
  const authStatus = useSelector((state: RootState) => state.auth.isAuth)

  useEffect(() => {
    dispatch(checkAuthStatusThunk())
  }, [dispatch])

  return (
    <header className='h-20 flex items-center justify-between'>
      <div className='flex items-center justify-start gap-x-5'>
        <Link href={pageConfig.home} className='text-3xl font-bold'>
          LOGO
        </Link>
        <Navigation />
      </div>
      <div className='flex items-center'>
        <Input
          type='search'
          placeholder='Поиск товаров..., пока не работает :('
          className='w-[350px]'
        />
        <UserActions authStatus={authStatus} />
      </div>
    </header>
  )
}

export default Header

// Поменять закругление на Input
