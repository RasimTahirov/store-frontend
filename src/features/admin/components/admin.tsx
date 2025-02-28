import Link from "next/link"

const Admin = () => {
  return (
    <div>
      <div>Админ панель</div>
      <div className="flex gap-7">
        <Link href="admin/dashboard">Дашборд</Link>
        <Link href="admin/category">Управление категориями</Link>
        <Link href="admin/product">Управление товарами</Link>
      </div>
    </div>
  )
}

export default Admin