import types from '@actions'

const initState = {
  initialized: false,
}

export default function app(state = initState, action) {
  switch (action.type) {
    case types.SET_APP_INIT_STATUS:
      return {
        ...state,
        initialized: action.payload,
      }

    default:
      return state
  }
}
