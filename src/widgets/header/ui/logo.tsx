import Link from 'next/link'

import { pageConfig } from '@/shared/config/pageConfig'

const Logo = () => {
  return (
    <Link href={pageConfig.home} className='text-3xl font-bold'>
      LOGO
    </Link>
  )
}

export default Logo
