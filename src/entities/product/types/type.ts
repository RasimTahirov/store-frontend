import { ICategory } from '@/entities/category/types/type'

export interface IProduct {
  id?: string
  title: string
  description: string
  price: number
  size: string
  color: string
  category: string
  gender: string
  images: string[]
  compound: string
  country: string
  care: string
  Category: ICategory
}

export interface IProducts {
  products: IProduct[]
}
