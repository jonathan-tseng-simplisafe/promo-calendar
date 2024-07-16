export type Promotion = {
  entryTitle: string
  promoCode?: string
  promoCodeWithMonitoring: string
  startTime: string
  endTime: string
  site: 'US' | 'UK'
  evergreen: boolean
  backgroundColor: string
  primaryTextColor: string
  secondaryTextColor: string
  buttonBackgroundColor: string
  buttonTextColor: string
  promoFlagBackgroundColor: string
  promoFlagTextColor: string
  isVariation: boolean
}

export type Event = {
  title: string
  start: string
  end: string
}
