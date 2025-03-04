import { ChevronLeftIcon, ChevronRightIcon, MoveLeftIcon, MoveRightIcon } from 'lucide-react'

interface PaginationProps {
  handlePage: (page: number) => void
  arrayTotalPage: number[]
  currentPage: number
  totalPage: number
}

const Pagination: React.FC<PaginationProps> = ({
  handlePage,
  arrayTotalPage,
  currentPage,
  totalPage,
}) => {
  return (
    <div className='flex justify-center mt-2.5'>
      <button onClick={() => handlePage(currentPage - 1)} disabled={currentPage === 1}>
        <ChevronLeftIcon />
      </button>
      {arrayTotalPage.map(page => (
        <button onClick={() => handlePage(page)} disabled={currentPage === page} key={page}>
          {page}
        </button>
      ))}
      <button onClick={() => handlePage(currentPage + 1)} disabled={currentPage === totalPage}>
        <ChevronRightIcon />
      </button>
    </div>
  )
}

export default Pagination
