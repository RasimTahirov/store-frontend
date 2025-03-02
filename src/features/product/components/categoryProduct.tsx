import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

import { IProducts } from '@/entities/product/types/type'

import { getCategoryByUrl } from '../api/api'
import productUrl from '../utils/productUrl'

const CategoryProduct = () => {
  const [categoryProduct, setCategoryProduct] = useState<IProducts>([])
  const url = usePathname()

  const urlApi = productUrl(url)

  useEffect(() => {
    const fetchCategory = async () => {
      const category = await getCategoryByUrl(urlApi)
      setCategoryProduct(category)
    }

    fetchCategory()
  }, [])

  return (
    <div>
      <div className='flex flex-grow gap-2.5'>
        {Array.isArray(categoryProduct.products) &&
          categoryProduct.products.map((product, index) => (
            <div key={index} className='w-80'>
              <img src={product.image[0]} />
              {/* Изменить на бэке на images */}
              <div>{product.title}</div>
              <div>{product.price}₽</div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default CategoryProduct
