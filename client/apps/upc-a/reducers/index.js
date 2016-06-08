import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import productCodes from './product-codes'
import requestStatus from './request-status'

const rootReducer = combineReducers({
  productCodes,
  requestStatus,
  routing: routerReducer
})

export default rootReducer
