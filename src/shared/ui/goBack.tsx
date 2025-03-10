import { MoveLeftIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'

const GoBack = () => {
  const navigate = useRouter()

  const goBack = () => {
    navigate.back()
  }

  return (
    <Button aria-label='Назад' onClick={goBack}>
      <MoveLeftIcon />
    </Button>
  )
}

export default GoBack
