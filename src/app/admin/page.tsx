import Link from "next/link"

const AdminPage = () => {
  return (
    <div>
      <div>Админ панель</div>
      <Link href="admin/dashboard">Дашборд</Link>
    </div>
  )
}

export default AdminPage