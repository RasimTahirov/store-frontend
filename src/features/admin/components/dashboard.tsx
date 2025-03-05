import Layout from '@/app/(layout)/layout'
import GoBack from '@/shared/ui/goBack'

import Pagination from '../../../shared/ui/pagination'
import useDashboard from '../hooks/useDashboard'
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
