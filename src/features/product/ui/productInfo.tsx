import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

import { ProductInfoProps } from '../types/type'

const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
  return (
    <>
      <h2 className='text-5xl font-bold uppercase'>{product?.title}</h2>
      <div className='text-2xl font-medium'>{product?.price} ₽</div>
      <div>
        <div>Цвет - {product?.color}</div>
        <div>Размер - {product?.size}</div>
      </div>
      <div>
        <Accordion type='multiple'>
          <AccordionItem value='product'>
            <AccordionTrigger>О товаре</AccordionTrigger>
            <AccordionContent className='grid gap-2.5'>
              <div>Состав: {product?.compound}</div>
              <div>Страна-производитель: {product?.country}</div>
              <div>Уход: {product?.care}</div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  )
}

export default ProductInfo
