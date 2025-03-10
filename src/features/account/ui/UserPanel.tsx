import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AppDispatch, RootState } from '@/app/store/store'
import { Button } from '@/components/ui/button'
import { logout, userDataThunk } from '@/features/auth/api/api'
import { pageConfig } from '@/shared/config/pageConfig'

const UserPanel = () => {
  const navigation = useRouter()
  const dispatch = useDispatch<AppDispatch>()
  const { user } = useSelector((state: RootState) => state.auth)

  const handleLogout = async () => {
    await logout()
    navigation.push(pageConfig.home)
  }

  useEffect(() => {
    dispatch(userDataThunk())
  }, [dispatch])

  return (
    <section className='sm:flex justify-between mb-5 max-sm:grid max-sm:justify-center max-sm:justify-items-center'>
      <div className='flex justify-start'>
        <p className='text-2xl font-normal'>Здравствуйте, {user?.name}</p>
      </div>

      <div className='flex justify-end gap-x-2.5'>
        {user?.role === 'ADMIN' ? (
          <Link href={pageConfig.admin} aria-label='Войти в админ панель'>
            <Button variant='secondary'>Войти в админ панель</Button>
          </Link>
        ) : null}
        <Button variant='destructive' onClick={handleLogout}>
          Выход
        </Button>
      </div>
    </section>
  )
}

export default UserPanel
