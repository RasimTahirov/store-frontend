import Link from 'next/link'

import { IProduct } from '@/entities/product/types/type'
import { pageConfig } from '@/shared/config/pageConfig'

const ProductMan = ({ productMan }: { productMan: IProduct[] }) => {
  return (
    <div>
      <h2 className='uppercase text-4xl font-bold mb-2.5'>для мужчин</h2>
      <div className='grid grid-cols-5 max-xl:grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 justify-center gap-x-5 gap-y-5'>
        {productMan.map(product => (
          <div key={product.id} className='cursor-pointer'>
            <Link href={`${pageConfig.categories}/${product.Category.url}/${product.id}`}>
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
  )
}

export default ProductMan
