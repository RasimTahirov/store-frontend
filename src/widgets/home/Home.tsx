'use client'

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Layout from '@/app/(layout)/layout'
import { AppDispatch, RootState } from '@/app/store/store'
import { getLastManProductThunk, getLastWomanProductThunk } from '@/features/product/api/api'
import { ProductMan, ProductWoman } from './ui'

const Home = () => {
  const dispatch = useDispatch<AppDispatch>()

  const productMan = useSelector((state: RootState) => state.productHome.productMan)
  const productWoman = useSelector((state: RootState) => state.productHome.productWoman)

  useEffect(() => {
    dispatch(getLastManProductThunk())
    dispatch(getLastWomanProductThunk())
  }, [dispatch])

  return (
    <Layout>
      <section className='grid gap-y-5'>
        <ProductMan productMan={productMan} />
        <ProductWoman productWoman={productWoman} />
      </section>
    </Layout>
  )
}

export default Home
