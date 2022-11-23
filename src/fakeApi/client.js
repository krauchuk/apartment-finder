import { PREMIUM_ADS_URL, REGULAR_ADS_URL, AD_URL } from '@constants/urls'
import { premiumAds, regularAds } from './data/ads'

const responses = {
  [PREMIUM_ADS_URL]: () => premiumAds,
  [REGULAR_ADS_URL]: params => regularAds,
  [AD_URL]: ({ id }) => ({ id }),
}

export default {
  get: (url, paramsObj = {}) =>
    new Promise(resolve => {
      const delay = Math.random() * 1500
      setTimeout(() => resolve(responses[url](paramsObj)), delay)
    }),
}
