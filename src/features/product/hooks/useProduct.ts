import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AppDispatch, RootState } from '@/app/store/store'

import { getProductByIdThunk } from '../api/api'
import productUrl from '../utils/productUrl'

const useProduct = () => {
  const id = usePathname()
  const apiId = productUrl(id)
  const dispatch = useDispatch<AppDispatch>()

  const product = useSelector((state: RootState) => state.product.product)

  useEffect(() => {
    dispatch(getProductByIdThunk(apiId))
  }, [apiId, dispatch])

  return { product }
}

export default useProduct
