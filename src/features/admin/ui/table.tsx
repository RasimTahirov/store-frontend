import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { IDashboardResponse } from "../types/type"

interface DashboardTableProps {
  users: IDashboardResponse | null
}

const DashboardTable: React.FC<DashboardTableProps> = ({ users }) => {
  return (
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
  )
}

export default DashboardTable