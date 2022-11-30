import generator from '../generator'

let ads = null
let cities = null

const fillData = () => {
  const generatedData = generator(257)
  ads = generatedData.ads
  cities = generatedData.usedCities
}

export const getData = () => {
  if (!ads) {
    fillData()
  }

  return { ads, cities }
}
