import { CircleUserRound, LogIn } from 'lucide-react'
import Link from 'next/link'

import Cart from '@/features/cart/components/cart'

import { pageConfig } from '../config/pageConfig'

const UserActions = ({ authStatus }: { authStatus: boolean }) => {
  return (
    <div className='flex gap-x-2.5 ml-2.5'>
      {authStatus ? (
        <>
          <Cart />
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
  )
}

export default UserActions
