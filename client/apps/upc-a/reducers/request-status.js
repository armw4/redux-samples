import * as ActionTypes from '../actions'

export default (state = null, action) => {
  switch (action.type) {
    case ActionTypes.SAVE_PRODUCT_CODES_ERROR:
    case ActionTypes.SAVE_PRODUCT_CODES_SUCCESS:
    case ActionTypes.SAVE_PRODUCT_CODES:
    default:
      return state
  }
}
