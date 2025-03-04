import Link from 'next/link'

import Layout from '@/app/(layout)/layout'

import useCategoryProducts from '../hooks/useCategoryProducts'

const CategoryProduct = () => {
  const { categoryProduct, urlApi } = useCategoryProducts()

  return (
    <Layout>
      <div className='flex justify-between'>
        <div className='w-[280px]'>Тут должна быть фильтрация, наверное :)</div>
        <div className='grid grid-cols-4 gap-x-10 gap-y-5'>
          {Array.isArray(categoryProduct?.products) &&
            categoryProduct.products.map(product => (
              <div key={product.id} className='w-80 cursor-pointer'>
                <Link href={`${urlApi}/${product.id}`}>
                  <img src={product.images[0]} />
                  <div>{product.title}</div>
                  <div>{product.price}₽</div>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </Layout>
  )
}

export default CategoryProduct
