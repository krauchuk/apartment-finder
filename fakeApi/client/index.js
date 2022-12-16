import { getPremiumAds, getAllAds, getAdById, getCities } from './methods'

const getMethod = url => {
  if (url.includes('fake.api/cities')) {
    return () => getCities()
  }

  if (url.includes('fake.api/ads/')) {
    const id = +url.split('fake.api/ads/')[1]
    return () => getAdById({ id })
  }

  if (url.includes('fake.api/ads?')) {
    if (url.includes('premium=true')) {
      return () => getPremiumAds()
    }

    const urlForSearch = new URL(`http://${url}`)
    const searchParams = new URLSearchParams(urlForSearch.search)

    const rooms = searchParams.get('rooms')

    const params = {
      perPage: +searchParams.get('perPage'),
      page: +searchParams.get('page'),
      rooms: rooms === '5+' ? '5+' : +searchParams.get('rooms'),
      minPrice: +searchParams.get('minPrice'),
      maxPrice: +searchParams.get('maxPrice'),
      city: searchParams.get('city'),
      adType: searchParams.get('adType'),
      sort: searchParams.get('sort'),
    }

    return () => getAllAds(params)
  }

  return null
}

export default {
  get: url =>
    new Promise((resolve, reject) => {
      const method = getMethod(url)
      if (!method) reject(new Error('Wrong URL'))

      setTimeout(() => {
        try {
          resolve(method())
        } catch (e) {
          reject(e)
        }
      }, Math.random() * 1500)
    }),
}
