export interface IProduct {
  id: string
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
}

export interface IProducts {
  products: IProduct[]
}
