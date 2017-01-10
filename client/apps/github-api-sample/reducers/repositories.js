import { RECEIVE_REPOSITORIES } from '../actions/'

export default (state = [], action) => {
  switch(action.type) {
    case RECEIVE_REPOSITORIES:
      return action.repositories
    default:
      return state
  }
}
