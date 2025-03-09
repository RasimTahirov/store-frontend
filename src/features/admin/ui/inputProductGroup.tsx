import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { IProduct } from '@/entities/product/types/type'

interface InputProductGroupProps {
  formData: IProduct
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

const InputProductGroup: React.FC<InputProductGroupProps> = ({ formData, handleInputChange }) => {
  return (
    <>
      <Input
        type='text'
        placeholder='Название'
        name='title'
        value={formData.title}
        onChange={handleInputChange}
        aria-label='Название'
      />
      <Textarea
        placeholder='Описание'
        name='description'
        value={formData.description}
        onChange={handleInputChange}
        aria-label='Описание'
      />
      <Input
        type='text'
        placeholder='Цена'
        name='price'
        value={formData.price}
        onChange={handleInputChange}
        aria-label='Цена'
      />
      <Input
        type='text'
        placeholder='Цвет'
        name='color'
        value={formData.color}
        onChange={handleInputChange}
        aria-label='Цвет'
      />
    </>
  )
}

export default InputProductGroup
