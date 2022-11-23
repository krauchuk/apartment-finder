import * as types from '@constants/actions'
import { PREMIUM_ADS_URL, REGULAR_ADS_URL, AD_URL } from '@constants/urls'

import client from '@fakeApi/client'

export const fetchPremiumAds = () => async dispatch => {
  try {
    dispatch({ type: types.FETCH_PREMIUM_REQUEST })

    const { items } = await client.get(PREMIUM_ADS_URL)
    dispatch({ type: types.FETCH_PREMIUM_SUCCESS, payload: items })
  } catch (e) {
    dispatch({ type: types.FETCH_PREMIUM_FAILURE })
  }
}

export const fetchRegularAds = params => async dispatch => {
  try {
    dispatch({ type: types.FETCH_REGULAR_REQUEST })

    const payload = await client.get(REGULAR_ADS_URL, params)
    dispatch({ type: types.FETCH_REGULAR_SUCCESS, payload })
  } catch (e) {
    dispatch({ type: types.FETCH_REGULAR_FAILURE })
  }
}

export const fetchAdById = id => async dispatch => {
  try {
    dispatch({ type: types.FETCH_AD_REQUEST })

    const payload = await client.get(AD_URL, { id })
    dispatch({ type: types.FETCH_AD_SUCCESS, payload })
  } catch (e) {
    dispatch({ type: types.FETCH_AD_FAILURE })
  }
}
