import { getRandomDate, getRandomItem, getRandomNumber, getRandomHexCode } from './helpers'
import { types, cities } from './data'

export default count => {
  const ads = []
  const usedCities = new Set()

  for (let i = 0; i < count; i += 1) {
    const type = getRandomItem(types)
    const basePrice = getRandomNumber(100, 1000)
    const rooms = getRandomItem([1, 2, 3, 4])
    const city = getRandomItem(cities)

    ads.push({
      id: i,
      type,
      rooms,
      city,
      name: `Apartment #${i}`,
      address: `street, ${i}`,
      premium: i < 3,
      price: type === 'rent' ? basePrice : basePrice * 1000,
      images: [
        `https://via.placeholder.com/350/${getRandomHexCode()}/${getRandomHexCode()}?text=${city}${i}|pic1`,
        `https://via.placeholder.com/350?${getRandomHexCode()}/${getRandomHexCode()}text=${city}${i}|pic2`,
        `https://via.placeholder.com/350?${getRandomHexCode()}/${getRandomHexCode()}text=${city}${i}|pic3`,
      ],
      square: getRandomNumber(20, 35) * rooms,
      date: getRandomDate(),
      floor: getRandomNumber(1, 16),
      constructionYear: getRandomNumber(1980, 2022),
      wallMaterial: getRandomItem(['monolith', 'bricks', 'wood', 'gas silicate']),
    })

    usedCities.add(city)
  }

  return { ads, usedCities: [...usedCities].sort() }
}
