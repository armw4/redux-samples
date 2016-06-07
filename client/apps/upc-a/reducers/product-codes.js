import * as ActionTypes from '../actions'
const DEFAULT_STATE = [{ value: '' }]

export default (state = DEFAULT_STATE, action) => {
  switch(action.type) {
    case ActionTypes.CHANGE_UPC:
      return state.map((productCode, index) => {
        if (index === action.index) {
          return { ...productCode, value: action.value }
        }

        return productCode
      })
    default:
      return state
  }
}
