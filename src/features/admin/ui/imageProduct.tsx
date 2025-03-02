import { Input } from '@/components/ui/input'

interface ImageProductProps {
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const ImageProduct: React.FC<ImageProductProps> = ({ handleFileChange }) => {
  return <Input type='file' multiple onChange={handleFileChange} />
}

export default ImageProduct
