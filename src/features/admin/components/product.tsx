'use client'

import Layout from '@/app/(layout)/layout'
import { Button } from '@/components/ui/button'
import GoBack from '@/shared/ui/goBack'

import useProduct from '../hooks/useProduct'
import ImageProduct from '../ui/imageProduct'
import InputProductGroup from '../ui/inputProductGroup'
import InputProductInfo from '../ui/inputProductInfo'
import SelectProductGroup from '../ui/selectProductGroup'

const Product = () => {
  const {
    onSubmit,
    formData,
    categories,
    handleInputChange,
    handleSelectChange,
    handleFileChange,
  } = useProduct()

  return (
    <Layout>
      <GoBack />
      <div className='flex-col justify-items-center'>
        <div className='mb-5'>Создание товара</div>
        <form onSubmit={onSubmit} className='w-[700px] grid gap-y-5'>
          <InputProductGroup formData={formData} handleInputChange={handleInputChange} />
          <SelectProductGroup
            formData={formData}
            handleSelectChange={handleSelectChange}
            categories={categories}
          />
          <ImageProduct handleFileChange={handleFileChange} />
          <InputProductInfo formData={formData} handleInputChange={handleInputChange} />
          <Button type='submit'>Создать товар</Button>
        </form>
      </div>
    </Layout>
  )
}

export default Product
