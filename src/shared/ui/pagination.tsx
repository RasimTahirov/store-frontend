import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'

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
  return arrayTotalPage.length <= 1 ? null : (
    <div className='flex justify-center gap-2.5 mt-2.5'>
      <button onClick={() => handlePage(currentPage - 1)} disabled={currentPage === 1}>
        <ChevronLeftIcon stroke={`${currentPage === 1 ? 'gray' : 'black'}`} />
      </button>
      {arrayTotalPage.map(page => (
        <button
          className={`${currentPage === page ? 'text-gray-500' : ''}`}
          onClick={() => handlePage(page)}
          disabled={currentPage === page}
          key={page}
        >
          {page}
        </button>
      ))}
      <button onClick={() => handlePage(currentPage + 1)} disabled={currentPage === totalPage}>
        <ChevronRightIcon stroke={`${currentPage === totalPage ? 'gray' : 'black'}`} />
      </button>
    </div>
  )
}

export default Pagination
