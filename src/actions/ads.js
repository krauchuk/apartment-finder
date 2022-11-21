import * as types from '../constants/actionTypes/ads'
import { PREMIUM_ADS_URL, REGULAR_ADS_URL } from '../constants/urls'

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

export const fetchRegularAds =
  (page = 1) =>
  async (dispatch, getState) => {
    try {
      const { search: params } = getState()

      dispatch({ type: types.FETCH_REGULAR_REQUEST })

      const payload = await client.get(REGULAR_ADS_URL, { ...params, page })
      dispatch({ type: types.FETCH_REGULAR_SUCCESS, payload })
    } catch (e) {
      dispatch({ type: types.FETCH_REGULAR_FAILURE })
    }
  }
