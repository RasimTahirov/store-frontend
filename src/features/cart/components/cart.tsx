import { ShoppingCart, Trash2Icon } from 'lucide-react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AppDispatch, RootState } from '@/app/store/store'
import { Separator } from '@/components/ui/separator'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'

import { deleteCartItem, getItemCartThunk } from '../api/api'
import { removeCartItem } from '../slice/cart.slice'

const Cart = () => {
  const dispatch = useDispatch<AppDispatch>()
  const cartItem = useSelector((state: RootState) => state.cart.cartItem)

  const handleDeleteCart = async (id: string) => {
    await deleteCartItem(id)
    dispatch(removeCartItem(id))
  }

  useEffect(() => {
    dispatch(getItemCartThunk())
  }, [])

  return (
    <Sheet>
      <SheetTrigger asChild>
        <ShoppingCart className='cursor-pointer' />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Корзина</SheetTitle>
        </SheetHeader>
        <div className='mt-5'>
          {Array.isArray(cartItem.cartItems) && cartItem.cartItems.length > 0 ? (
            <ul>
              {cartItem.cartItems.map(cart => (
                <React.Fragment key={cart.id}>
                  <li className='flex items-center gap-5 mb-5'>
                    <figure className='w-20'>
                      <img
                        src={cart.product.images[0]}
                        alt={cart.product.title}
                        className='rounded-md object-cover'
                      />
                    </figure>
                    <div className='flex flex-col'>
                      <p className='font-semibold'>{cart.product.title}</p>
                      <div className='flex gap-2.5 items-center text-sm text-gray-500'>
                        <p>{cart.product.price} ₽</p>
                        <div>X</div>
                        <p>{cart.product.price * cart.quantity} ₽</p>
                      </div>
                      <p className='text-sm'>Кол-во: {cart.quantity}</p>
                      <div
                        role='button'
                        onClick={() => handleDeleteCart(cart.productId)}
                        className='text-red-500 text-sm hover:underline'
                        aria-label={`Удалить ${cart.product.title} из корзины`}
                      >
                        Удалить
                      </div>
                    </div>
                  </li>
                  <Separator className='my-5' />
                </React.Fragment>
              ))}
            </ul>
          ) : (
            <p className='text-center text-gray-500'>Корзина пуста</p>
          )}
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default Cart
