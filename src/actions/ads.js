import * as types from '@constants/actions'

import client from '@fakeApi/client'

export const fetchPremiumAds = () => async dispatch => {
  try {
    dispatch({ type: types.FETCH_PREMIUM_REQUEST })

    const { items } = await client.get('fake.api/get_premium_ads')

    dispatch({ type: types.FETCH_PREMIUM_SUCCESS, payload: items })
  } catch (e) {
    dispatch({ type: types.FETCH_PREMIUM_FAILURE })
  }
}

export const fetchRegularAds = () => async (dispatch, getState) => {
  try {
    dispatch({ type: types.FETCH_REGULAR_REQUEST })

    const params = getState().filter
    const payload = await client.get('fake.api/get_regular_ads', params)

    dispatch({ type: types.FETCH_REGULAR_SUCCESS, payload })
  } catch (e) {
    dispatch({ type: types.FETCH_REGULAR_FAILURE })
  }
}

export const fetchAdById = id => async dispatch => {
  try {
    dispatch({ type: types.FETCH_AD_REQUEST })

    const payload = await client.get('fake.api/get_ad', { id })

    dispatch({ type: types.FETCH_AD_SUCCESS, payload })
  } catch (e) {
    dispatch({ type: types.FETCH_AD_FAILURE })
  }
}
