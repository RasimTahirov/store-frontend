'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

import useCategory from '../hooks/useCategory'

const Category = () => {
  const { createCategory, categoryName, handleInputChange } = useCategory()

  return (
    <div>
      <div>Создание категории</div>
      <form onSubmit={createCategory}>
        <Input
          type='text'
          placeholder='Название категории'
          value={categoryName}
          onChange={handleInputChange}
        />
        <Button>Создать</Button>
      </form>
    </div>
  )
}

export default Category
