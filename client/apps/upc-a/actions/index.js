export const ADD_UPC = 'ADD_UPC'

export const addUpc = () => {
  return {
    type: ADD_UPC
  }
}

export const CHANGE_UPC = 'UPDATE_UPC'

export const changeUpc = (index, value) => {
  return {
    type: CHANGE_UPC,
    value,
    index
  }
}

export const VALIDATE_UPC = 'VALIDATE_UPC'

export const validateUpc = (index, value) => {
  return {
    type: VALIDATE_UPC,
    value,
    index
  }
}

export const INVALIDATE_UPC = 'INVALIDATE_UPC'

export const invalidateUpc = (index, error) => {
  return {
    type: INVALIDATE_UPC,
    value,
    error
  }
}
