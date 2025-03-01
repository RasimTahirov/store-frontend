import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { IDashboardResponse } from "../types/type"
import React, { useState } from "react"
import { IUser } from "@/entities/auth/types/type"
import ModalTable from "./modalTable"

interface DashboardTableProps {
  users: IDashboardResponse | null
}

const DashboardTable: React.FC<DashboardTableProps> = ({ users }) => {
  const [openDialog, setOpenDialog] = useState(false)
  const [userData, setUserData] = useState<IUser | null>(null)

  const handleOpen = (user: IUser) => {
    setOpenDialog(true)
    setUserData(user)
  }

  return (
    <>
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
          {Array.isArray(users?.data) && users.data.map((user) => (
            <TableRow className="cursor-pointer" key={user.id} onClick={() => handleOpen(user)}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.surname}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <ModalTable openDialog={openDialog} setOpenDialog={setOpenDialog} userData={userData} />
    </>
  )
}

export default DashboardTable