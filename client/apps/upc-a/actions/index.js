export const ADD_UPC = 'ADD_UPC'

export const addUpc = () => {
  return {
    type: ADD_UPC
  }
}

export const DELETE_UPC = 'DELETE_UPC'

export const deleteUpc = (index) => {
  return {
    type: DELETE_UPC,
    index
  }
}

export const CHANGE_UPC = 'UPDATE_UPC'

export const changeUpc = (value, index) => {
  return {
    type: CHANGE_UPC,
    value,
    index
  }
}

export const VALIDATE_UPC = 'VALIDATE_UPC'

export const validateUpc = (value, index) => {
  return {
    type: VALIDATE_UPC,
    value,
    index
  }
}

export const INVALIDATE_UPC = 'INVALIDATE_UPC'

export const invalidateUpc = ({ error, value, index }) => {
  return {
    type: INVALIDATE_UPC,
    error,
    value,
    index
  }
}
