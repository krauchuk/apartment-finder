import ads from './data/ads'

const getAdById = ({ id }) => ads.find(ad => ad.id === id) || {}

const getPremiumAds = () => {
  const items = ads.filter(ad => ad.premium)

  return { items, pages: 1, count: items.length }
}

const getRegularAds = params => {
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

const responses = {
  'fake.api/get_premium_ads': () => getPremiumAds(),
  'fake.api/get_regular_ads': params => getRegularAds(params),
  'fake.api/get_ad': params => getAdById(params),
}

export default {
  get: (url, paramsObj = {}) =>
    new Promise(resolve => {
      const delay = Math.random() * 1500
      setTimeout(() => resolve(responses[url](paramsObj)), delay)
    }),
}
