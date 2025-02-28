'use client'

import { useDispatch, useSelector } from "react-redux"
import { createCategoryThunk } from "../api/api"
import { AppDispatch, RootState } from "@/app/store/store"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { resetCategoryName, setCategoryName } from "../slice/categorySlice"

const Category = () => {
  const dispatch = useDispatch<AppDispatch>()

  const categoryName = useSelector((state: RootState) => state.category.name)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setCategoryName(e.target.value))
  }

  const createCategory = async (e: React.FormEvent) => {
    e.preventDefault()

    await dispatch(createCategoryThunk(categoryName))
    dispatch(resetCategoryName())
  }

  return (
    <div>
      <div>Создание категории</div>
      <form onSubmit={createCategory}>
        <Input type="text" placeholder="Название категории" value={categoryName} onChange={handleInputChange} />
        <Button>Создать</Button>
      </form>
    </div>
  )
}

export default Category