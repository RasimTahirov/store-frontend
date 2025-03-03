'use client'

import { CircleUserRound, LogIn, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AppDispatch, RootState } from '@/app/store/store'
import { Input } from '@/components/ui/input'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { ICategory } from '@/entities/category/types/type'
import { checkAuthStatusThunk } from '@/features/auth/api/api'
import { getManCategories, getWomanCategories } from '@/features/product/api/api'
import { pageConfig } from '@/shared/config/pageConfig'

const Header = () => {
  const dispatch = useDispatch<AppDispatch>()
  const authStatus = useSelector((state: RootState) => state.auth.isAuth)
  const [manCategory, setManCategory] = useState<ICategory[]>([])
  const [womanCategory, setWomanCategory] = useState<ICategory[]>([])

  useEffect(() => {
    const fetchCategory = async () => {
      const manData = await getManCategories()
      const womanData = await getWomanCategories()
      setManCategory(manData)
      setWomanCategory(womanData)
    }

    dispatch(checkAuthStatusThunk())
    fetchCategory()
  }, [dispatch])

  console.log(womanCategory)

  return (
    <header className='h-20 flex items-center justify-between'>
      <div className='flex items-center justify-start gap-x-5'>
        <Link href={pageConfig.home} className='text-3xl font-bold'>
          LOGO
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Мужчинам</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className='grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]'>
                  {manCategory.map(category => (
                    <li className='row-span-3' key={category.id}>
                      <NavigationMenuLink asChild>
                        <Link href={`${pageConfig.categories}/${category.url}`}>
                          {category.name}
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Женщинам</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] '>
                  {womanCategory.map(category => (
                    <li className='row-span-3' key={category.id}>
                      <NavigationMenuLink asChild>
                        <Link href={`${pageConfig.categories}/${category.url}`}>
                          {category.name}
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className='flex items-center'>
        <Input type='search' placeholder='Поиск товаров...' className='w-[350px]' />
        <div className='flex gap-x-2.5 ml-20'>
          {authStatus ? (
            <>
              <div>
                <ShoppingCart />
              </div>
              <Link href={pageConfig.account}>
                <CircleUserRound />
              </Link>
            </>
          ) : (
            <Link href={pageConfig.authorization}>
              <LogIn />
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header

// Поменять закругление на Input
