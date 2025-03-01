import { IUser } from '@/entities/auth/types/type'

interface IMeta {
  totalPages: number
  totalCount: number
  currentPage: number
  totalCurrentItem: number
}

export interface IDashboardResponse {
  meta: IMeta
  data: IUser[]
}
