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
    <div>
      <button onClick={() => handlePage(currentPage - 1)} disabled={currentPage === 1}>
        Назад
      </button>
      {arrayTotalPage.map(page => (
        <button onClick={() => handlePage(page)} disabled={currentPage === page} key={page}>
          {page}
        </button>
      ))}
      <button onClick={() => handlePage(currentPage + 1)} disabled={currentPage === totalPage}>
        Вперед
      </button>
    </div>
  )
}

export default Pagination
