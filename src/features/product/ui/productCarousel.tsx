import { CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

import { ProductInfoProps } from '../types/type'

const ProductCarousel: React.FC<ProductInfoProps> = ({ product }) => {
  return (
    <div className='flex justify-end max-lg:justify-center'>
      <Carousel className='max-w-[700px]'>
        <CarouselContent>
          {Array.isArray(product?.images) &&
            product?.images.map((img, index) => (
              <CarouselItem key={index}>
                <CardContent className='px-0 flex aspect-square items-center justify-center'>
                  <img src={img} />
                </CardContent>
              </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious className='max-xl:hidden' />
        <CarouselNext className='max-xl:hidden' />
      </Carousel>
    </div>
  )
}

export default ProductCarousel
