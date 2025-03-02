import Link from 'next/link'

import { pageConfig } from '@/shared/config/pageConfig'

const Admin = () => {
  return (
    <div>
      <div>Админ панель</div>
      <div className='flex gap-7'>
        <Link href={pageConfig.admin_dashboard}>Дашборд</Link>
        <Link href={pageConfig.admin_category}>Управление категориями</Link>
        <Link href={pageConfig.admin_product}>Управление товарами</Link>
      </div>
    </div>
  )
}

export default Admin
