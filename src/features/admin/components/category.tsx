'use client'

import Layout from '@/app/(layout)/layout'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import GoBack from '@/shared/ui/goBack'

import useCategory from '../hooks/useCategory'

const Category = () => {
  const { createCategory, categoryName, handleInputChange } = useCategory()

  return (
    <Layout>
      <GoBack />
      <div className='flex-col justify-items-center'>
        <div className='mb-5'>Создание категории</div>
        <form onSubmit={createCategory} className='w-[700px] grid gap-y-5'>
          <Input
            type='text'
            placeholder='Название категории'
            value={categoryName}
            onChange={handleInputChange}
          />
          <Button>Создать</Button>
        </form>
      </div>
    </Layout>
  )
}

export default Category
