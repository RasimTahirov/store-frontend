'use client'

import Layout from '@/app/(layout)/layout'
import { Button } from '@/components/ui/button'
import { addCart } from '@/features/cart/api/api'

import useProduct from '../hooks/useProduct'
import ProductCarousel from '../ui/productCarousel'
import ProductInfo from '../ui/productInfo'

const Product = () => {
  const { product } = useProduct()

  const handleAddCart = (id: string | undefined, quantity: number) => {
    if (id) {
      addCart(id, quantity)
    } else {
      console.error('Product ID is undefined')
    }
  }

  console.log(product?.id)

  return (
    <Layout>
      <div className='grid grid-cols-2 gap-20'>
        <ProductCarousel product={product} />
        <div className='flex flex-col gap-5'>
          <ProductInfo product={product} />
          <Button onClick={() => handleAddCart(product.id, 1)}>Добавить в корзину</Button>
        </div>
      </div>
    </Layout>
  )
}

export default Product
