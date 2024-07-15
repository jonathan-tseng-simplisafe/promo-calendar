import { CTFL_SPACE_ID } from '../constants'
import { contentfulResponse } from './schema'
import { mapPromotionEntries } from './transformer'

export const requestPromotionEntries = async () => {
  const req = await fetch(`https://cdn.contentful.com/spaces/${CTFL_SPACE_ID}/environments/master/entries?content_type=promotion`, {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_CTFL_ACCESS_TOKEN}`
    }
  })
  const json = await req.json()
  const response = contentfulResponse.safeParse(json)
  !response.success && console.error(response.error?.issues)
  const items = response.data?.items ?? []
  return mapPromotionEntries(items)
}
