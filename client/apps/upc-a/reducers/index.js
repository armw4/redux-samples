import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import productCodes from './product-codes'

const rootReducer = combineReducers({
  productCodes,
  routing: routerReducer
})

export default rootReducer
