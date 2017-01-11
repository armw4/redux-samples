import { RECEIVE_REPOSITORIES } from '../actions'

// we'd typically yield an empty array by default, but we want to distinguish between an empty payload
// vs the first time we come to the page (no request attempted yet). In the case of the latter, we'll show
// nothing (render null) at all to the user. In the case of the former, the user will see a message saying no repos exist.
export default (state = null, action) => {
  switch(action.type) {
    case RECEIVE_REPOSITORIES:
      return action.repositories
    default:
      return state
  }
}
