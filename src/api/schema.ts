import { z, TypeOf } from 'zod'

const contentfulPromotion = z.object({
  sys: z.object({
    id: z.string(),
    createdAt: z.string(),
    updatedAt: z.string(),
  }),
  fields: z.object({
    entryTitle: z.string(),
    promoCode: z.string().optional(),
    promoCodeWithMonitoring: z.string(),
    startTime: z.string(),
    endTime: z.string(),
    site: z.enum(['US', 'UK']),
    evergreen: z.boolean(),
    backgroundColor: z.string(),
    primaryTextColor: z.string(),
    secondaryTextColor: z.string(),
    buttonBackgroundColor: z.string(),
    buttonTextColor: z.string(),
    promoFlagBackgroundColor: z.string(),
    promoFlagTextColor: z.string(),
    isVariation: z.boolean()
  })
})

export const contentfulResponse = z.object({
  sys: z.object({
    type: z.literal('Array')
  }),
  total: z.number(),
  skip: z.number(),
  limit: z.number(),
  items: z.array(contentfulPromotion),
  includes: z.object({
    Entry: z.array(z.any()),
    Asset: z.array(z.any())
  })
})

export type ContentfulPromotion = TypeOf<typeof contentfulPromotion>
export type ContentfulResponse = TypeOf<typeof contentfulResponse>
