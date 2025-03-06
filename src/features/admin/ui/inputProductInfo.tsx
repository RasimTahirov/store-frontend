import React from 'react'

import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { IProduct } from '@/entities/product/types/type'

interface InputProductInfo {
  formData: IProduct
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

const InputProductInfo: React.FC<InputProductInfo> = ({ formData, handleInputChange }) => {
  return (
    <>
      <Input
        type='text'
        placeholder='Состав'
        name='compound'
        value={formData.compound}
        onChange={handleInputChange}
      />
      <Input
        type='text'
        placeholder='Страна изготовитель'
        name='country'
        value={formData.country}
        onChange={handleInputChange}
      />
      <Textarea
        placeholder='Уход за товаром'
        name='care'
        value={formData.care}
        onChange={handleInputChange}
      />
    </>
  )
}

export default InputProductInfo
