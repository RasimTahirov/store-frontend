import { ShoppingCart } from 'lucide-react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AppDispatch, RootState } from '@/app/store/store'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'

import { deleteCartItem, getItemCartThunk } from '../api/api'
import { removeCartItem } from '../slice/cart.slice'

const Cart = () => {
  const dispatch = useDispatch<AppDispatch>()
  const cartItem = useSelector((state: RootState) => state.cart.cartItem)
  const [openCart, setOpenCart] = useState(false)

  const handleDeleteCart = async (id: string) => {
    await deleteCartItem(id)
    dispatch(removeCartItem(id))
  }

  const openCartSheet = () => {
    setOpenCart(true)
    dispatch(getItemCartThunk())
  }

  return (
    <Sheet onOpenChange={openCartSheet}>
      <SheetTrigger asChild>
        <ShoppingCart className='cursor-pointer' />
      </SheetTrigger>
      <SheetContent className='overflow-y-auto'>
        <SheetHeader>
          <SheetTitle>Корзина</SheetTitle>
        </SheetHeader>
        <div className='mt-5'>
          {Array.isArray(cartItem.cartItems.cart) && cartItem.cartItems.cart.length > 0 ? (
            <>
              <ul>
                {cartItem.cartItems.cart.map(carts => (
                  <React.Fragment key={carts.id}>
                    <li className='flex items-center gap-5 mb-5'>
                      <figure className='w-20'>
                        <img
                          src={carts.product.images[0]}
                          alt={carts.product.title}
                          className='rounded-md object-cover'
                        />
                      </figure>
                      <div className='flex flex-col'>
                        <p className='font-semibold'>{carts.product.title}</p>
                        <div className='flex gap-2.5 items-center text-sm text-gray-500'>
                          <p>{carts.product.price} ₽</p>
                          <div>X</div>
                          <p>{carts.product.price * carts.quantity} ₽</p>
                        </div>
                        <p className='text-sm'>Кол-во: {carts.quantity}</p>
                        <div
                          role='button'
                          onClick={() => handleDeleteCart(carts.productId)}
                          className='text-red-500 text-sm hover:underline'
                          aria-label={`Удалить ${carts.product.title} из корзины`}
                        >
                          Удалить
                        </div>
                      </div>
                    </li>
                    <Separator className='my-5' />
                  </React.Fragment>
                ))}
              </ul>
              <div className='text-gray-500 flex justify-center'>
                Общая сумма - {cartItem.cartItems.totalPrice} ₽
              </div>
              <Button className='w-full'>Оплатить</Button>
            </>
          ) : (
            <p className='text-center text-gray-500'>Корзина пуста</p>
          )}
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default Cart
