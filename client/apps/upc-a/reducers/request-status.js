import * as ActionTypes from '../actions'

export default (state = null, action) => {
  switch (action.type) {
    case ActionTypes.SAVE_PRODUCT_CODES_ERROR:
      return { pending: false, error: true, success: false }
    case ActionTypes.SAVE_PRODUCT_CODES_SUCCESS:
      return { pending: false, error: false, success: true }
    case ActionTypes.SAVE_PRODUCT_CODES:
      return { pending: true, error: false, success: true }
    default:
      return state
  }
}
