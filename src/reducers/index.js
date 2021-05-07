const initialState = {
  steps: null,
  points: 0,
  user: null
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_STEPS":
      return Object.assign({}, state, {
        ...state,
        steps: action.payload
      })
    case "CHECK_PAYMENT":
      return Object.assign({}, state, {
        ...state,
        payment: action.payload
      })
    case "GET_USER":
      return Object.assign({}, state, {
        ...state,
        user: action.payload
      })
    case "GET_PROGRESS":
      return Object.assign({}, state, {
        ...state,
        progress: action.payload
      })
    default:
      return Object.assign({}, state, {
        ...state
      })
  }
}

export default rootReducer
