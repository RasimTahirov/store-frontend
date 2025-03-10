'use client'

import { useDispatch } from 'react-redux'
import { toast, Toaster } from 'sonner'

import Layout from '@/app/(layout)/layout'
import { Button } from '@/components/ui/button'
import { addCart } from '@/features/cart/api/api'
import { addCartItem } from '@/features/cart/slice/cart.slice'
import GoBack from '@/shared/ui/goBack'

import useProduct from '../hooks/useProduct'
import ProductCarousel from '../ui/productCarousel'
import ProductInfo from '../ui/productInfo'

const Product = () => {
  const { product } = useProduct()
  const dispatch = useDispatch()

  const handleAddCart = async (id: string | undefined, quantity: number) => {
    if (id) {
      await addCart(id, quantity)

      const newItem = {
        id: product?.id,
        productId: product?.id,
        product: {
          title: product?.title,
          images: product?.images,
          price: product?.price,
        },
        quantity,
      }

      dispatch(addCartItem(newItem))
      toast.success('Товар добавлен в корзину')
    }
  }

  return (
    <Layout>
      <GoBack />
      <div className='grid grid-cols-2 gap-20 max-lg:grid-cols-1 mt-10'>
        <ProductCarousel product={product} />
        <div className='flex flex-col gap-5'>
          <ProductInfo product={product} />
          <Button onClick={() => handleAddCart(product?.id, 1)} className='mb-10'>
            Добавить в корзину
          </Button>
        </div>
      </div>
      <Toaster />
    </Layout>
  )
}

export default Product
