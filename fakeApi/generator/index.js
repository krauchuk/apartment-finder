import { getRandomDate, getRandomItem, getRandomNumber, getRandomPics } from './helpers'
import { types, cities } from './data'

export default count => {
  const ads = []
  const usedCities = new Set()

  for (let i = 0; i < count; i += 1) {
    const type = getRandomItem(types)
    const basePrice = getRandomNumber(100, 1000)
    const rooms = getRandomItem([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 7])
    const city = getRandomItem(cities)
    const name = getRandomItem(['John Doe', 'Banana LLC', 'Adam Eve', 'Orange LLC'])
    const isCompany = name.includes('LLC')

    ads.push({
      id: i,
      type,
      rooms,
      city,
      name: `Apartment #${i}`,
      address: `street, ${i}`,
      premium: i < 3,
      price: type === 'rent' ? basePrice : basePrice * 1000,
      images: getRandomPics(city),
      square: getRandomNumber(20, 35) * rooms,
      date: getRandomDate(),
      floor: getRandomNumber(1, 16),
      constructionYear: getRandomNumber(1980, 2022),
      wallMaterial: getRandomItem(['monolith', 'bricks', 'wood', 'gas silicate']),
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mauris justo, sollicitudin et libero non, ultrices interdum nisl. Ut eu faucibus diam, et maximus lorem. Nunc in magna tristique tellus gravida suscipit. Praesent malesuada, felis egestas mattis porttitor, lacus metus scelerisque urna, eget condimentum velit quam eget tortor. Nunc at tellus vestibulum, efficitur nunc non, tristique ante. Nulla tincidunt felis a ipsum commodo, a rhoncus ipsum congue. Nulla laoreet orci quis pretium pulvinar. Mauris porttitor ex ipsum, eget lobortis purus interdum ut. Fusce vulputate vulputate dignissim. Suspendisse suscipit tincidunt egestas. Sed nec dui eget turpis fringilla sollicitudin nec interdum leo. Cras pulvinar nisl in mi vehicula fermentum. Suspendisse condimentum neque volutpat, iaculis magna eu, malesuada dolor.',
      contact: {
        name,
        type: isCompany ? 'company' : 'person',
        rating: isCompany ? getRandomNumber(1, 5) : null,
        votes: isCompany ? getRandomNumber(1, 500) : null,
        phone: '+48 111 111 111',
        email: getRandomItem(['spam@gmail.com', 'no-reply@gmx.com', null]),
      },
    })

    usedCities.add(city)
  }

  return { ads, usedCities: [...usedCities].sort() }
}
