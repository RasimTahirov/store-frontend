'use client'

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { getAlUser } from "@/features/admin/api/api"
import { useEffect, useState } from "react"

const DashboardPage = () => {
  const [users, setUsers] = useState([])
  const [currentPage, setCurrentPage] = useState(1)

  const totalPage = users.meta?.totalPages
  const ArrayTotalPage = Array.from({ length: totalPage }, (_, i) => i + 1)

  const handlePage = (page: number) => {
    setCurrentPage(page)
    getAlUser({ page, limit: 1 })
  }

  useEffect(() => {
    const fetchDashboard = async () => {
      const res = await getAlUser({ page: currentPage, limit: 2 })
      setUsers(res)
    }
    fetchDashboard()
  }, [currentPage])

  console.log('Тестим', users);


  return (
    <div>
      <div>Дашборд</div>
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>id</TableHead>
              <TableHead>Имя</TableHead>
              <TableHead>Фамилия</TableHead>
              <TableHead>Почта</TableHead>
              <TableHead>Роль</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.isArray(users.data) && users.data.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.surname}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div>
        <button onClick={() => handlePage(currentPage - 1)} disabled={currentPage === 1}>Назад</button>
        {ArrayTotalPage.map((page) => (
          <button onClick={() => handlePage(page)} disabled={currentPage === page} key={page}>{page}</button>
        ))}
        <button onClick={() => handlePage(currentPage + 1)} disabled={currentPage === totalPage}>Вперед</button>
      </div>
    </div>
  )
}

export default DashboardPage