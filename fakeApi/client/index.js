import {
  getPremiumAds,
  getAllAds,
  getAdById,
  getCities,
  getUser,
  getReviewsById,
  saveFavorite,
  deleteFavorite,
  getFavorites,
} from './methods'

const getMethod = (url, body, method) => {
  if (method === 'put') {
    if (url.includes('fake.api/favorite')) {
      const id = +url.split('fake.api/favorite/')[1]
      return () => saveFavorite({ id })
    }
  }

  if (method === 'delete') {
    if (url.includes('fake.api/favorite')) {
      const id = +url.split('fake.api/favorite/')[1]
      return () => deleteFavorite({ id })
    }
  }

  if (url.includes('fake.api/login')) {
    return () => getUser(body)
  }

  if (url.includes('fake.api/favorites')) {
    return () => getFavorites()
  }

  if (url.includes('fake.api/cities')) {
    return () => getCities()
  }

  if (url.includes('fake.api/ads/')) {
    const id = +url.split('fake.api/ads/')[1]
    return () => getAdById({ id })
  }

  if (url.includes('fake.api/reviews/')) {
    const id = +url.split('fake.api/reviews/')[1]
    return () => getReviewsById({ id })
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
      minSquare: +searchParams.get('minSquare'),
      maxSquare: +searchParams.get('maxSquare'),
    }

    return () => getAllAds(params)
  }

  return null
}

const getResponse = (url, body = {}, httpMethod) =>
  new Promise((resolve, reject) => {
    const method = getMethod(url, body, httpMethod)
    if (!method) reject(new Error('Wrong URL'))

    setTimeout(() => {
      try {
        resolve(method())
      } catch (e) {
        reject(e)
      }
    }, Math.random() * 1500)
  })

export default {
  get: url => getResponse(url, null, 'get'),
  post: (url, body) => getResponse(url, body, 'post'),
  put: (url, body) => getResponse(url, body, 'put'),
  delete: url => getResponse(url, null, 'delete'),
}
