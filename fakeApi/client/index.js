import { getPremiumAds, getRegularAds, getAdById, getCities } from './methods'

const responses = {
  'fake.api/get_premium_ads': () => getPremiumAds(),
  'fake.api/get_regular_ads': params => getRegularAds(params),
  'fake.api/get_ad': params => getAdById(params),
  'fake.api/get_cities': () => getCities(),
}

export default {
  get: (url, paramsObj = {}) =>
    new Promise(resolve => {
      const delay = Math.random() * 1500
      setTimeout(() => resolve(responses[url](paramsObj)), delay)
    }),
}
