import { useEffect, useState } from 'react'
import { requestPromotionEntries } from './api/contentful'
import { Promotion } from './types'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { promotionToEvents } from './api/transformer'

function Calendar() {
  const [promotions, setPromotions] = useState<Promotion[]>([])

  useEffect(() => {
    requestPromotionEntries().then(setPromotions)
  }, [])

  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      events={promotionToEvents(promotions)}
    />
  )
}

export default Calendar
