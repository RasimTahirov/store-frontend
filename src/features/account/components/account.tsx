'use client'

import Layout from '@/app/(layout)/layout'

import { Orders, UserPanel } from '../ui'

const Account = () => {
  return (
    <Layout>
      <div className='flex flex-col'>
        <UserPanel />
        <Orders />
      </div>
    </Layout>
  )
}

export default Account
