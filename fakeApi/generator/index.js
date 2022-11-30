import { getRandomDate, getRandomItem, getRandomNumber } from './helpers'
import { types, cities } from './data'

export default count => {
  const ads = []
  const usedCities = []

  for (let i = 0; i < count; i += 1) {
    const isPremium = i < 3
    const type = getRandomItem(types)
    const basePrice = getRandomNumber(100, 1000)
    const rooms = getRandomItem([1, 2, 3, 4])

    ads.push({
      id: i,
      type,
      rooms,
      name: `Apartment #${i}`,
      address: `street, ${i}`,
      premium: isPremium,
      price: isPremium ? basePrice * 1000 : basePrice,
      images: [
        `https://via.placeholder.com/350?Text=id:${i}|pic1`,
        `https://via.placeholder.com/350?Text=id:${i}|pic2`,
        `https://via.placeholder.com/350?Text=id:${i}|pic3`,
      ],
      square: getRandomNumber(20, 35) * rooms,
      date: getRandomDate(),
      city: getRandomItem(cities),
      floor: getRandomNumber(1, 16),
      constructionYear: getRandomNumber(1980, 2022),
      wallMaterial: getRandomItem(['monolith', 'bricks', 'wood', 'gas silicate']),
    })
  }

  return { ads, usedCities }
}
