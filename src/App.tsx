import { useEffect, useState } from 'react'
import { requestPromotionEntries } from './api/contentful'
import { Promotion } from './types'

function App() {
  const [promotions, setPromotions] = useState<Promotion[]>([])

  useEffect(() => {
    requestPromotionEntries().then(setPromotions)
  }, [])

  console.log(promotions)

  return (
    <div>
      App
    </div>
  )
}

export default App
