import * as ActionTypes from '../actions'

export default (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.SAVE_PRODUCT_CODES_ERROR:
      return { pending: false, error: true, success: false }
    case ActionTypes.SAVE_PRODUCT_CODES_SUCCESS:
      return { pending: false, error: false, success: true }
    case ActionTypes.SAVE_PRODUCT_CODES:
      return { pending: true, error: false, success: true }
    case ActionTypes.CLEAR_STATUS:
      return {}
    default:
      return state
  }
}
