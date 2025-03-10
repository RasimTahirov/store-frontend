import { Input } from '@/components/ui/input'

interface SearchInputProps {
  title: string
  setTitle: (title: string) => void
}

const SearchInput: React.FC<SearchInputProps> = ({ title, setTitle }) => {
  return (
    <form role='search'>
      <Input
        type='search'
        placeholder='Поиск товаров...'
        className='w-full min-w-[170px] sm:w-[250px] md:w-[400px] lg:w-[500px] xl:w-[600px] input-search'
        value={title}
        aria-label='Поиск'
        onChange={e => setTitle(e.target.value)}
      />
    </form>
  )
}

export default SearchInput
