import { PREMIUM_ADS_URL, REGULAR_ADS_URL } from '../constants/urls'
import { premiumAds, regularAds } from './data/ads'

const responses = {
  [PREMIUM_ADS_URL]: premiumAds,
  [REGULAR_ADS_URL]: regularAds,
}

export default {
  get: (url, params = {}) =>
    new Promise(resolve => {
      const delay = Math.random() * 1500
      setTimeout(() => resolve(responses[url]), delay)
    }),
}
