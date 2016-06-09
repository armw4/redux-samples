import * as ActionTypes from '../actions'
import { REQUEST_PENDING, REQUEST_ERROR, REQUEST_SUCCESS } from '../constants'

export default (state = null, action) => {
  switch (action.type) {
    case ActionTypes.SAVE_PRODUCT_CODES_ERROR:
      return REQUEST_ERROR
    case ActionTypes.SAVE_PRODUCT_CODES_SUCCESS:
      return REQUEST_SUCCESS
    case ActionTypes.SAVE_PRODUCT_CODES:
      return REQUEST_PENDING
    case ActionTypes.CLEAR_STATUS:
      return null
    default:
      return state
  }
}
