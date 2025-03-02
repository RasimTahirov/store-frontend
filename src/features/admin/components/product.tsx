'use client'

import { Button } from '@/components/ui/button'

import useProduct from '../hooks/useProduct'
import ImageProduct from '../ui/imageProduct'
import InputProductGroup from '../ui/inputProductGroup'
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
    <div className='flex-col justify-items-center'>
      <div>Создание товара 123</div>
      <form onSubmit={onSubmit} className='w-80 grid gap-y-5'>
        <InputProductGroup formData={formData} handleInputChange={handleInputChange} />
        <SelectProductGroup
          formData={formData}
          handleSelectChange={handleSelectChange}
          categories={categories}
        />
        <ImageProduct handleFileChange={handleFileChange} />
        <Button type='submit'>Создать товар</Button>
      </form>
    </div>
  )
}

export default Product
