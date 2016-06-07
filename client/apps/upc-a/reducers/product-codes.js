import * as ActionTypes from '../actions'

const DEFAULT_UPC = { value: '' }
const DEFAULT_STATE = [DEFAULT_UPC]

export default (state = DEFAULT_STATE, action) => {
  switch(action.type) {
    case ActionTypes.DELETE_UPC:
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ]
    case ActionTypes.ADD_UPC:
      return [...state, DEFAULT_UPC]
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
