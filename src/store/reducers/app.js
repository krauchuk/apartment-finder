import { SET_APP_INIT } from '@constants/actions'

const initState = {
  initialized: false,
}

export default function app(state = initState, action) {
  switch (action.type) {
    case SET_APP_INIT:
      return {
        ...state,
        initialized: action.payload,
      }

    default:
      return state
  }
}
