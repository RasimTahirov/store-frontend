import Link from 'next/link'

import Layout from '@/app/(layout)/layout'
import { Button } from '@/components/ui/button'
import { pageConfig } from '@/shared/config/pageConfig'

const Admin = () => {
  return (
    <Layout>
      <nav className='flex justify-center gap-5 max-sm:grid'>
        <Button variant='link'>
          <Link href={pageConfig.admin_dashboard}>Дашборд</Link>
        </Button>
        <Button variant='link'>
          <Link href={pageConfig.admin_category}>Управление категориями</Link>
        </Button>
        <Button variant='link'>
          <Link href={pageConfig.admin_product}>Управление товарами</Link>
        </Button>
      </nav>
    </Layout>
  )
}

export default Admin
