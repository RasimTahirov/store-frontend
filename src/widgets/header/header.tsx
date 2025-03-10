'use client'

import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AppDispatch, RootState } from '@/app/store/store'
import { IProduct } from '@/entities/product/types/type'
import { checkAuthStatusThunk } from '@/features/auth/api/api'
import { search } from '@/features/product/api/api'
import Navigation from '@/shared/ui/navigation'
import UserActions from '@/shared/ui/userActions'

import { Logo, SearchInput, SearchList } from './ui'

const Header = () => {
  const dispatch = useDispatch<AppDispatch>()
  const authStatus = useSelector((state: RootState) => state.auth.isAuth)

  const [title, setTitle] = useState('')
  const [searchResult, setSearchResult] = useState<IProduct[]>([])

  useEffect(() => {
    dispatch(checkAuthStatusThunk())
  }, [dispatch])

  useEffect(() => {
    if (title.trim().length > 0) {
      const fetchSearch = async () => {
        const data = await search(title)
        setSearchResult(data)
      }

      fetchSearch()
    } else {
      setSearchResult([])
    }
  }, [title])

  return (
    <header className='min-h-20 flex items-center justify-between'>
      <div className='flex items-center justify-start max-lg::gap-1 xl:gap-x-5'>
        <Logo />
        <Navigation />
      </div>

      <div className='flex items-center'>
        <div className='flex flex-col relative'>
          <SearchInput title={title} setTitle={setTitle} />
          {searchResult.length > 0 ? <SearchList searchResult={searchResult} /> : null}
        </div>
        <UserActions authStatus={authStatus} />
      </div>
    </header>
  )
}

export default Header
