import { premiumAds, regularAds } from './data/ads'

const responses = {
  'fake.api/get_premium_ads': () => premiumAds,
  'fake.api/get_regular_ads': params => regularAds,
  'fake.api/get_ad': ({ id }) => ({ id }),
}

export default {
  get: (url, paramsObj = {}) =>
    new Promise(resolve => {
      const delay = Math.random() * 1500
      setTimeout(() => resolve(responses[url](paramsObj)), delay)
    }),
}
