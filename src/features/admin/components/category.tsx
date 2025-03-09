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
      <section className='flex-col justify-items-center'>
        <h2 className='mb-5'>Создание категории</h2>
        <form
          onSubmit={createCategory}
          className='w-[700px] grid gap-y-5'
          aria-label='Форма создание категории товара'
        >
          <Input
            type='text'
            placeholder='Название категории'
            value={categoryName}
            aria-label='Название категории'
            onChange={handleInputChange}
          />
          <Button>Создать</Button>
        </form>
      </section>
    </Layout>
  )
}

export default Category
