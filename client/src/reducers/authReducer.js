import { SIGN_IN, SIGN_OUT } from '../actions/types'

/*  
  Assign some initial value for state.
  ALL CAPS syntax indicates to anyone reviewing this code that
  this constant should never be changed or mutated in any way. 
*/
const INITIAL_STATE = {
  isSignedIn: null,
  userId: null
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, isSignedIn: true, userId: action.payload }
    case SIGN_OUT:
      return { ...state, isSignedIn: false, userId: null }
    default:
      return state
  }
}