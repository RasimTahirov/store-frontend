'use client'

import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { gender, size } from "../utils/utils"
import { Button } from "@/components/ui/button"
import React, { useEffect, useState } from "react"
import { createProductThunk, getAllCategories } from "../api/api"
import { useDispatch } from "react-redux"
import { AppDispatch } from "@/app/store/store"
import { ICategory } from "@/entities/category/types/type"

const Product = () => {
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
    images: [] as File[]
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files) {
      setFormData({
        ...formData,
        images: Array.from(files)
      })
    }
  }

  const handleSelectChange = (name: string) => (value: string) => {
    setFormData({
      ...formData,
      [name]: value
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

    formData.images.forEach((img) => {
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

  return (
    <div className="flex-col justify-items-center">
      <div>Создание товара 123</div>
      <form onSubmit={onSubmit} className="w-80 grid gap-y-5">
        <Input type="text" placeholder="Название" name="title" value={formData.title} onChange={handleInputChange} />
        <Textarea placeholder="Описание" name="description" value={formData.description} onChange={handleInputChange} />
        <Input type="text" placeholder="Цена" name="price" value={formData.price} onChange={handleInputChange} />
        <Input type="text" placeholder="Цвет" name="color" value={formData.color} onChange={handleInputChange} />

        <Select value={formData.size} onValueChange={handleSelectChange('size')}>
          <SelectTrigger>
            <SelectValue placeholder="Размер" />
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
            <SelectValue placeholder="Пол" />
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
            <SelectValue placeholder="Категория" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {categories.map((category) => (
                <SelectItem key={category.id} value={category.id}>
                  {category.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        <Input type="file" multiple onChange={handleFileChange} />

        <Button type="submit">Создать товар</Button>
      </form>
    </div>
  );
};

export default Product;
