'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AppDispatch, RootState } from '@/app/store/store'
import { logout, userDataThunk } from '@/features/auth/api/api'
import { pageConfig } from '@/shared/config/pageConfig'

const Account = () => {
  const dispatch = useDispatch<AppDispatch>()

  const { user } = useSelector((state: RootState) => state.auth)

  const handleLogout = async () => {
    await logout()
  }

  useEffect(() => {
    dispatch(userDataThunk())
  }, [dispatch])

  return (
    <div className='grid'>
      <div>Account</div>
      <div>{user?.name}</div>
      {user?.role === 'ADMIN' ? <Link href={pageConfig.admin}>Админ панель</Link> : null}
      <div role='button' onClick={handleLogout}>
        Выход
      </div>
      <Link href={pageConfig.home}>Домой</Link>
    </div>
  )
}

export default Account
