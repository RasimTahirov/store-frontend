import { ReactNode } from 'react'

import Header from '@/widgets/header/header'

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='min-h-screen'>
      <Header />
      {children}
    </div>
  )
}

export default Layout
