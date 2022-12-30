import types from '../actions'

const initState = {
  modals: {
    login: false,
  },
  user: {},
  loading: false,
}

export default function ads(state = initState, action) {
  switch (action.type) {
    case types.TOGGLE_MODAL:
      return {
        ...state,
        modals: {
          ...state.modals,
          [action.payload]: !state.modals[action.payload],
        },
      }

    case types.SET_USER:
      return {
        ...state,
        user: action.payload,
      }

    case types.SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      }

    default:
      return state
  }
}
