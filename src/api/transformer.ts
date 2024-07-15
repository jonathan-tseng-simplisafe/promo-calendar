import { Promotion } from '../types'
import { ContentfulPromotion } from './schema'

export const mapPromotionEntries = (entries: ContentfulPromotion[]): Promotion[] => 
  entries.map(({fields}) => ({
    entryTitle: fields.entryTitle,
    promoCode: fields.promoCode,
    promoCodeWithMonitoring: fields.promoCodeWithMonitoring,
    startTime: fields.startTime,
    endTime: fields.endTime,
    site: fields.site,
    evergreen: fields.evergreen,
    backgroundColor: fields.backgroundColor,
    primaryTextColor: fields.primaryTextColor,
    secondaryTextColor: fields.secondaryTextColor,
    buttonBackgroundColor: fields.buttonBackgroundColor,
    buttonTextColor: fields.buttonTextColor,
    promoFlagBackgroundColor: fields.promoFlagBackgroundColor,
    promoFlagTextColor: fields.promoFlagTextColor,
    isVariation: fields.isVariation
  }))
