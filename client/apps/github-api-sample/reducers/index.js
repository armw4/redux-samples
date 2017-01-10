import { combineReducers } from 'redux'
import user from './user'
import requestStatus from './request-status'
import repositories from './repositories'

const rootReducer = combineReducers({
  user,
  requestStatus,
  repositories
})

export default rootReducer
