import * as ActionTypes from '../actions'

const DEFAULT_UPC = { value: '' }
const DEFAULT_STATE = [DEFAULT_UPC]

const update = (state, actionIndex, fn) => {
  return state.map((productCode, index) => {
    if (index === actionIndex) {
      return fn(productCode)
    }

    return productCode
  })
}

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
      return update(state, action.index, (productCode) => {
        return { ...productCode, value: action.value, error: null }
      })
    default:
      return state
  }
}
