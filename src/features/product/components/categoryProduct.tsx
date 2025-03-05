import Link from 'next/link'

import Layout from '@/app/(layout)/layout'
import Pagination from '@/shared/ui/pagination'

import useCategoryProducts from '../hooks/useCategoryProducts'

const CategoryProduct = () => {
  const { categoryProduct, url, arrayTotalPage, handlePage, currentPage, totalPage } =
    useCategoryProducts()

  return (
    <Layout>
      <div className='flex flex-col min-h-screen'>
        <div className='grid grid-cols-5 justify-center gap-x-5 gap-y-5'>
          {Array.isArray(categoryProduct?.data) &&
            categoryProduct.data.map(product => (
              <div key={product.id} className='w-80 cursor-pointer'>
                <Link href={`${url}/${product.id}`}>
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
        <Pagination
          handlePage={handlePage}
          arrayTotalPage={arrayTotalPage}
          currentPage={currentPage}
          totalPage={totalPage}
        />
      </div>
    </Layout>
  )
}

export default CategoryProduct
