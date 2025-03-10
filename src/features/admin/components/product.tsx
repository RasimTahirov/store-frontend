'use client'

import Layout from '@/app/(layout)/layout'
import { Button } from '@/components/ui/button'
import GoBack from '@/shared/ui/goBack'

import useProduct from '../hooks/useProduct'
import { ImageProduct, InputProductGroup, InputProductInfo, SelectProductGroup } from '../ui'

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
        <h2 className='mb-5'>Создание товара</h2>
        <form onSubmit={onSubmit} className='lg:w-[700px] md:w-[500px] sm:w-[300px] grid gap-y-5'>
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
