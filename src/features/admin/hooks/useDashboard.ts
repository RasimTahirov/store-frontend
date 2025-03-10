import { useEffect, useState } from 'react'

import { getAlUser } from '../api/api'
import { IDashboardResponse } from '../types/type'

const useDashboard = () => {
  const [users, setUsers] = useState<IDashboardResponse | null>(null)
  const [currentPage, setCurrentPage] = useState(1)

  const totalPage = users?.meta?.totalPages || 0
  const arrayTotalPage = Array.from({ length: totalPage }, (_, i) => i + 1)

  const handlePage = async (page: number) => {
    setCurrentPage(page)
    await getAlUser({ page, limit: 10 })
  }

  useEffect(() => {
    const fetchDashboard = async () => {
      const res = await getAlUser({ page: currentPage, limit: 20 })
      setUsers(res)
    }
    fetchDashboard()
  }, [currentPage])

  return { arrayTotalPage, handlePage, totalPage, currentPage, users }
}

export default useDashboard
