import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

import { IProducts } from '@/entities/product/types/type'

import { getCategoryByUrl } from '../api/api'
import productUrl from '../utils/productUrl'

const useCategoryProducts = () => {
  const [categoryProduct, setCategoryProduct] = useState<IProducts>()
  const url = usePathname()

  console.log(categoryProduct)

  const urlApi = productUrl(url)

  useEffect(() => {
    const fetchCategory = async () => {
      const category = await getCategoryByUrl(urlApi)
      setCategoryProduct(category)
    }

    fetchCategory()
  }, [urlApi])

  return { categoryProduct, urlApi }
}

export default useCategoryProducts
