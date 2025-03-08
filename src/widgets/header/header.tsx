'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AppDispatch, RootState } from '@/app/store/store'
import { Input } from '@/components/ui/input'
import { checkAuthStatusThunk } from '@/features/auth/api/api'
import { pageConfig } from '@/shared/config/pageConfig'
import Navigation from '@/shared/ui/navigation'
import UserActions from '@/shared/ui/userActions'
import { search } from '@/features/product/api/api'

const Header = () => {
  const dispatch = useDispatch<AppDispatch>()
  const authStatus = useSelector((state: RootState) => state.auth.isAuth)

  const [title, setTitle] = useState('')
  const [searchResult, setSearchResult] = useState([])

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

      <div className='flex items-center justify-start gap-x-5'>
        <Link href={pageConfig.home} className='text-3xl font-bold'>
          LOGO
        </Link>
        <Navigation />
      </div>

      <div className='flex items-center'>
        <div className='flex flex-col relative'>
          <form role='search'>
            <Input
              type='search'
              placeholder='Поиск товаров..., пока не работает :('
              className=' w-[350px] input-search'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </form>

          {searchResult.length > 0 ? (
            <div className="absolute top-10 bg-white px-5 py-2.5 border w-[350px] rounded-md">
              <ul role='list'>
                {searchResult.length > 0 && (
                  searchResult.slice(0, 5).map((product) => (
                    <li key={product.id}>
                      <Link href={`/categories/${product.Category.url}/${product.id}`} className="w-[200px]">
                        <div className='flex items-center mb-2.5 gap-2.5'>
                          <img src={product.images[0]} className='w-20 rounded-md' alt={product.title} />
                          <div className='text-base'>
                            <div>{product.title}</div>
                            <div className='text-gray-500'>
                              <div>Размер - {product.size}</div>
                              <div>{product.price} ₽</div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </li>
                  ))
                )}
              </ul>
            </div>
          ) : null}
        </div>
        <UserActions authStatus={authStatus} />
      </div>
    </header>
  )
}

export default Header
