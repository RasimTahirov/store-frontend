import Link from 'next/link'

import { pageConfig } from '@/shared/config/pageConfig'

const Logo = () => {
  return (
    <Link href={pageConfig.home} className='max-lg:hidden xl:text-3xl font-bold'>
      LOGO
    </Link>
  )
}

export default Logo
