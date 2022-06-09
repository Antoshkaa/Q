const initialState = { user: {} }

export const authReducer = (state = initialState, action) => {
switch (action.type) {
  case 'GET_SESSION' :
    return {...state, user:action.payload}
  case 'LOGOUT' :
    return {...state, user:action.payload}

  default:
    return state
  }
}