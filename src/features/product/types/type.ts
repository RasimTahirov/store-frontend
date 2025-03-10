import { ICategory } from '@/entities/category/types/type'
import { IProduct } from '@/entities/product/types/type'

export interface ProductInfoProps {
  product: IProduct | null
}

interface IMeta {
  totalPages: number
  totalCount: number
  currentPage: number
  totalCurrentItem: number
}

export interface IPorductResponse {
  meta: IMeta
  data: IProduct[]
}
