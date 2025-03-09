import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

import { IProducts } from '@/entities/product/types/type'

import { getCategoryByUrl } from '../api/api'
import { IPorductResponse } from '../types/type'
import productUrl from '../utils/productUrl'

const useCategoryProducts = () => {
  const [categoryProduct, setCategoryProduct] = useState<IPorductResponse>()
  const [currentPage, setCurrentPage] = useState(1)
  const categoryUrl = usePathname()

  const totalPage = categoryProduct?.meta?.totalPages || 0
  const arrayTotalPage = Array.from({ length: totalPage }, (_, i) => i + 1)

  const handlePage = (page: number) => {
    setCurrentPage(page)
    setCategoryProduct({ page, limit: 1 })
  }

  console.log(categoryProduct)
  useEffect(() => {
    const url = productUrl(categoryUrl)

    const fetchCategory = async () => {
      if (url) {
        const category = await getCategoryByUrl({ url, page: currentPage, limit: 2 })
        setCategoryProduct(category)
      }
    }

    fetchCategory()
  }, [categoryUrl, currentPage])

  return {
    arrayTotalPage,
    currentPage,
    totalPage,
    handlePage,
    categoryProduct,
    url: productUrl(categoryUrl),
  }
}

export default useCategoryProducts
