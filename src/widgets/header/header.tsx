import { LogIn } from 'lucide-react'
import Link from 'next/link'

import { pageConfig } from '@/shared/config/pageConfig'

const Header = () => {
  return (
    <header>
      <div>LOGO</div>
      <div>
        <Link href={pageConfig.account}>
          <LogIn />
        </Link>
      </div>
    </header>
  )
}

export default Header
