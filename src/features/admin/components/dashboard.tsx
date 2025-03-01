import useDashboard from "../hooks/useDashboard"
import Pagination from "../ui/pagination"
import DashboardTable from "../ui/table"

const Dashboard = () => {
  const { arrayTotalPage, handlePage, currentPage, totalPage, users } = useDashboard()

  return (
    <>
      <div>Дашборд</div>
      <DashboardTable users={users} />
      <Pagination handlePage={handlePage} arrayTotalPage={arrayTotalPage} currentPage={currentPage} totalPage={totalPage} />
    </>
  )
}

export default Dashboard