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
        placeholder='Поиск товаров..., пока не работает :('
        className=' w-[350px] input-search'
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
    </form>
  )
}

export default SearchInput
