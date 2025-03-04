import Link from 'next/link'
import { useEffect, useState } from 'react'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { ICategory } from '@/entities/category/types/type'
import { getManCategories, getWomanCategories } from '@/features/product/api/api'

import { pageConfig } from '../config/pageConfig'

const Navigation = () => {
  const [manCategory, setManCategory] = useState<ICategory[]>([])
  const [womanCategory, setWomanCategory] = useState<ICategory[]>([])

  useEffect(() => {
    const fetchCategory = async () => {
      const manData = await getManCategories()
      const womanData = await getWomanCategories()
      setManCategory(manData)
      setWomanCategory(womanData)
    }
    fetchCategory()
  }, [])

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Мужчинам</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className='grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]'>
              {manCategory.map(category => (
                <li className='row-span-3' key={category.id}>
                  <NavigationMenuLink asChild>
                    <Link href={`${pageConfig.categories}/${category.url}`}>{category.name}</Link>
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
                    <Link href={`${pageConfig.categories}/${category.url}`}>{category.name}</Link>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default Navigation
