import { AlignJustify } from 'lucide-react'
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
import { Separator } from '@/components/ui/separator'
import { ICategory } from '@/entities/category/types/type'
import { getManCategories, getWomanCategories } from '@/features/product/api/api'

import { pageConfig } from '../config/pageConfig'

const Navigation = () => {
  const [manCategory, setManCategory] = useState<ICategory[]>([])
  const [womanCategory, setWomanCategory] = useState<ICategory[]>([])
  const [openMenu, setOpenMenu] = useState(false)

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
    <nav>
      <div className='max-md:hidden'>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Мужчинам</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className='grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]'>
                  {Array.isArray(manCategory) &&
                    manCategory.map(category => (
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
                  {Array.isArray(womanCategory) &&
                    womanCategory.map(category => (
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

      <div className='md:hidden'>
        <AlignJustify role='button' onClick={() => setOpenMenu(!openMenu)} />

        {openMenu && (
          <div className='bg-white z-10 absolute border rounded-md flex flex-col px-5 py-2.5 gap-y-2.5 top-[65px] font-medium text-sm'>
            <div className='flex gap-x-2.5'>
              <span>Мужчинам</span>
              <ul className='grid grid-cols-2 gap-x-2.5'>
                {Array.isArray(manCategory) &&
                  manCategory.map(category => (
                    <li key={category.id}>
                      <Link href={`${pageConfig.categories}/${category.url}`}>{category.name}</Link>
                    </li>
                  ))}
              </ul>
            </div>
            <Separator />
            <div className='flex gap-x-2.5'>
              <span>Женщинам</span>
              <ul className='grid grid-cols-2 gap-x-2.5'>
                {Array.isArray(womanCategory) &&
                  womanCategory.map(category => (
                    <li key={category.id}>
                      <Link href={`${pageConfig.categories}/${category.url}`}>{category.name}</Link>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
