import { LogIn, SquareUserRound } from 'lucide-react'
import Link from 'next/link'

import { pageConfig } from '@/shared/config/pageConfig'
import Header from '@/widgets/header/header'

const Home = () => {
  return (
    <div>
      {/* <header>
        Шапка
        <Link href='registration'>
          <LogIn />
        </Link>
        <Link href={pageConfig.account}>
          <SquareUserRound />
        </Link>
      </header> */}
      <Header />
    </div>
  )
}

export default Home
