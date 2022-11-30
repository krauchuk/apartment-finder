import { getData } from './data'

const { ads, cities } = getData()

export const getAdById = ({ id }) => ads.find(ad => ad.id === id) || {}

export const getPremiumAds = () => {
  const items = ads.filter(ad => ad.premium)

  return { items, pages: 1, count: items.length }
}

export const getRegularAds = params => {
  const { perPage = 6, page = 1, rooms = 0, city, adType = 'rent', minPrice = 0, maxPrice = 0 } = params

  const filtered = ads
    .filter(ad => !ad.premium)
    .reduce((acc, ad) => {
      if (adType && ad.type !== adType) return acc
      if (city && ad.city !== city) return acc
      if (rooms && ad.rooms !== rooms) return acc
      if (minPrice && minPrice > ad.price) return acc
      if (maxPrice && maxPrice < ad.price) return acc

      acc.push(ad)

      return acc
    }, [])

  const count = filtered.length
  const pages = Math.ceil(count / perPage)

  const items = filtered.slice((page - 1) * perPage, page * perPage)

  return { items, count, pages, page }
}

export const getCities = () => cities