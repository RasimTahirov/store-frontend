import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AppDispatch, RootState } from '@/app/store/store'
import { Button } from '@/components/ui/button'
import { logout, userDataThunk } from '@/features/auth/api/api'
import { pageConfig } from '@/shared/config/pageConfig'

const UserPanel = () => {
  const dispatch = useDispatch<AppDispatch>()
  const navigation = useRouter()

  const { user } = useSelector((state: RootState) => state.auth)

  const handleLogout = async () => {
    await logout()
    navigation.push(pageConfig.home)
  }

  useEffect(() => {
    dispatch(userDataThunk())
  }, [dispatch])

  return (
    <div className='flex justify-between mb-5'>
      <div className='flex justify-start'>
        <div className='text-2xl font-normal'>Здравствуйте, {user?.name}</div>
      </div>
      <div className='flex justify-end gap-x-2.5'>
        {user?.role === 'ADMIN' ? (
          <Button variant='secondary'>
            <Link href={pageConfig.admin}>Войти в админ панель</Link>
          </Button>
        ) : null}
        <Button variant='destructive' role='button' onClick={handleLogout}>
          Выход
        </Button>
      </div>
    </div>
  )
}

export default UserPanel
