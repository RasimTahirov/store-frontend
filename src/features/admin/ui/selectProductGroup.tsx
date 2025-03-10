import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { ICategory } from '@/entities/category/types/type'

import { IProduct } from '../slice/productSlice'
import { gender, size } from '../utils/utils'

interface SelectProductGroupProps {
  formData: IProduct
  handleSelectChange: (name: string) => (value: string) => void
  categories: ICategory[]
}

const SelectProductGroup: React.FC<SelectProductGroupProps> = ({
  formData,
  handleSelectChange,
  categories,
}) => {
  return (
    <>
      <Select value={formData.size} onValueChange={handleSelectChange('size')}>
        <SelectTrigger>
          <SelectValue placeholder='Размер' />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {size.map((s, index) => (
              <SelectItem key={index} value={s.size}>
                {s.size}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

      <Select value={formData.gender} onValueChange={handleSelectChange('gender')}>
        <SelectTrigger>
          <SelectValue placeholder='Пол' />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {gender.map((g, index) => (
              <SelectItem key={index} value={g.gender}>
                {g.gender}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

      <Select value={formData.category} onValueChange={handleSelectChange('category')}>
        <SelectTrigger>
          <SelectValue placeholder='Категория' />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {categories.map(category => (
              <SelectItem key={category.id} value={category.id}>
                {category.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  )
}

export default SelectProductGroup
