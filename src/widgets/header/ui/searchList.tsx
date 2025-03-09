import Link from 'next/link'

import { IProduct } from '@/entities/product/types/type'

const SearchList = ({ searchResult }: { searchResult: IProduct[] }) => {
  return (
    <div className='absolute top-10 bg-white px-5 py-2.5 border w-[350px] rounded-md'>
      <ul role='list'>
        {searchResult.length > 0 &&
          searchResult.slice(0, 5).map(product => (
            <li key={product.id}>
              <Link
                href={`/categories/${product.Category.url}/${product.id}`}
                className='w-[200px]'
              >
                <div className='flex items-center mb-2.5 gap-2.5'>
                  <img src={product.images[0]} className='w-20 rounded-md' alt={product.title} />
                  <div className='text-base'>
                    <div>{product.title}</div>
                    <div className='text-gray-500'>
                      <div>Размер - {product.size}</div>
                      <div>{product.price} ₽</div>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default SearchList
