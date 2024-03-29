import { getData, favorites } from './data'
import { users } from '../generator/data'

const { ads, cities } = getData()

export const getAdById = ({ id }) => {
  const ad = ads.find(a => a.id === id)

  if (!ad) throw new Error('Ad not found', { cause: 404 })

  const favorite = !!favorites.find(f => f.id === id)

  return {
    ...ad,
    favorite,
  }
}

export const getPremiumAds = () => {
  const items = ads.filter(ad => ad.premium)

  return { items, pages: 1, count: 0 }
}

export const getAllAds = params => {
  const {
    perPage = 6,
    page = 1,
    rooms = 0,
    city,
    adType = 'rent',
    minPrice = 0,
    maxPrice = 0,
    sort = 'date_asc',
    minSquare = 0,
    maxSquare = 0,
  } = params

  const [sortField, sortOrder] = sort.split('_')

  const filtered = [...ads]
    .sort((a, b) => {
      if (a[sortField] < b[sortField]) return sortOrder === 'asc' ? -1 : 1
      if (a[sortField] > b[sortField]) return sortOrder === 'asc' ? 1 : -1

      return 0
    })
    .reduce((acc, ad) => {
      if (adType && ad.type !== adType) return acc
      if (city && ad.city !== city) return acc
      if (minPrice && minPrice > ad.price) return acc
      if (maxPrice && maxPrice < ad.price) return acc
      if (minSquare && minSquare > ad.square) return acc
      if (maxSquare && maxSquare < ad.square) return acc
      if (rooms === '5+') {
        if (ad.rooms < 6) return acc
      } else if (rooms && ad.rooms !== rooms) {
        return acc
      }

      acc.push(ad)

      return acc
    }, [])

  const count = filtered.length
  const pages = Math.ceil(count / perPage)

  const items = filtered.slice((page - 1) * perPage, page * perPage)

  return { items, count, pages, page }
}

export const getCities = () => cities

export const getUser = data => {
  if (!data.username || !data.password) throw new Error('Wrong login/password', { cause: 401 })

  return {
    name: data.username,
    avatar: 'https://via.placeholder.com/450x450',
    email: 'user@email.com',
    phone: '+48 111 111 111',
  }
}

export const getReviewsById = ({ id }) => {
  const user = users.find(u => u.id === id)

  if (!user) throw new Error('User not found', { cause: 404 })

  return user.reviews || []
}

export const saveFavorite = ({ id }) => {
  const saved = favorites.find(f => f.id === id)

  if (!saved) {
    const ad = ads.find(a => a.id === id)
    favorites.push(ad)
  }
}

export const deleteFavorite = ({ id }) => {
  const index = favorites.findIndex(f => f.id === id)

  if (index >= 0) {
    favorites.splice(index, 1)
  }
}

export const getFavorites = () => favorites
