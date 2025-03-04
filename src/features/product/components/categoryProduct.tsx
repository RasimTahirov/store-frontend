import Link from 'next/link'

import Layout from '@/app/(layout)/layout'

import useCategoryProducts from '../hooks/useCategoryProducts'

const CategoryProduct = () => {
  const { categoryProduct, urlApi } = useCategoryProducts()

  return (
    <Layout>
      <div className='flex justify-center'>
        <div className='grid grid-cols-5 justify-center gap-x-5 gap-y-5'>
          {Array.isArray(categoryProduct?.products) &&
            categoryProduct.products.map(product => (
              <div key={product.id} className='w-80 cursor-pointer'>
                <Link href={`${urlApi}/${product.id}`}>
                  <div className='mb-1.5'>
                    <img src={product.images[0]} />
                  </div>
                  <div className='text-base flex justify-between'>
                    <h2>{product.title}</h2>
                    <div className='text-gray-500'>Размер - {product.size}</div>
                  </div>
                  <div className='text-gray-500'>{product.price}₽</div>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </Layout>
  )
}

export default CategoryProduct
