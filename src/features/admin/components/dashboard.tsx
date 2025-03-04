import Layout from '@/app/(layout)/layout'
import GoBack from '@/shared/ui/goBack'

import useDashboard from '../hooks/useDashboard'
import Pagination from '../ui/pagination'
import DashboardTable from '../ui/table'

const Dashboard = () => {
  const { arrayTotalPage, handlePage, currentPage, totalPage, users } = useDashboard()

  return (
    <Layout>
      <GoBack />
      <DashboardTable users={users} />
      <Pagination
        handlePage={handlePage}
        arrayTotalPage={arrayTotalPage}
        currentPage={currentPage}
        totalPage={totalPage}
      />
    </Layout>
  )
}

export default Dashboard
