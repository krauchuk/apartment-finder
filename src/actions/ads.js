import * as types from '../constants/actionTypes/ads'
import { PREMIUM_ADS_URL } from '../constants/urls'

import client from '../fakeApi/client'

export const fetchPremiumAds = () => async dispatch => {
  try {
    dispatch({ type: types.FETCH_PREMIUM_REQUEST })

    const payload = await client.get(PREMIUM_ADS_URL)
    dispatch({ type: types.FETCH_PREMIUM_SUCCESS, payload })
  } catch (e) {
    dispatch({ type: types.FETCH_PREMIUM_FAILURE })
  }
}
