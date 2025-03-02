import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { AppDispatch } from '@/app/store/store'
import { ICategory } from '@/entities/category/types/type'

import { createProductThunk, getAllCategories } from '../api/api'

const useProduct = () => {
  const dispatch = useDispatch<AppDispatch>()

  const [categories, setCategories] = useState<ICategory[]>([])
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    size: '',
    color: '',
    category: '',
    gender: '',
    images: [] as File[],
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files) {
      setFormData({
        ...formData,
        images: Array.from(files),
      })
    }
  }

  const handleSelectChange = (name: string) => (value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const data = new FormData()
    data.append('title', formData.title)
    data.append('description', formData.description)
    data.append('price', formData.price)
    data.append('size', formData.size)
    data.append('color', formData.color)
    data.append('category', formData.category)
    data.append('gender', formData.gender)

    formData.images.forEach(img => {
      data.append('images', img)
    })

    dispatch(createProductThunk(data))
  }

  useEffect(() => {
    const fecthCategories = async () => {
      const data = await getAllCategories()
      setCategories(data)
    }

    fecthCategories()
  }, [])

  return {
    handleInputChange,
    handleFileChange,
    handleSelectChange,
    onSubmit,
    formData,
    categories,
  }
}

export default useProduct
