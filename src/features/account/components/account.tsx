'use client'

import Layout from '@/app/(layout)/layout'

import UserPanel from '../ui/userPanel'

const Account = () => {
  return (
    <Layout>
      <div className='flex flex-col'>
        <UserPanel />
        <section>
          <div className='flex justify-center text-3xl font-medium'>Мои заказы</div>
        </section>
      </div>
    </Layout>
  )
}

export default Account
