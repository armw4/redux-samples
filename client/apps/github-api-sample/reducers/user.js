import { SET_USER } from '../actions/'

export default (statue = null, action) => {
  switch(action.type) {
    case SET_USER:
      return action.user
    default:
      return state
  }
}
