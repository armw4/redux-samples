import { RECEIVE_REPOSITORIES, SET_REQUEST_STATUS } from '../actions/'

export default (state = null, action) => {
  switch (action.type) {
    // this so we won't have to dispatch a separate action to reset/clear request status prior to rendering response
    // we know we can clear it if we successfully received something from the server. this could be accounted for
    // at render time via the component, but this makes things a bit more straightforward via a trivial invariant. we can easily do a
    // mutually exclusive render since we know we'll either have a pending/errored response, or a successful response from the server.
    case RECEIVE_REPOSITORIES:
      return null
    case SET_REQUEST_STATUS:
      return action.status
    default:
      return state
  }
}
