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

export const SAVE_PRODUCT_CODES = 'SAVE_PRODUCT_CODES'

const saveProductCodesSync = () => {
  return {
    type: SAVE_PRODUCT_CODES
  }
}

export const SAVE_PRODUCT_CODES_SUCCESS = 'SAVE_PRODUCT_CODES_SUCESS'

const saveProductCodesSuccess = () => {
  return {
    type: SAVE_PRODUCT_CODES_SUCCESS
  }
}

export const SAVE_PRODUCT_CODES_ERROR = 'SAVE_PRODUCT_CODES_ERROR'

const saveProductCodesError = () => {
  return {
    type: SAVE_PRODUCT_CODES_ERROR
  }
}

export const CLEAR_STATUS = 'CLEAR_STATUS'

const clearStatus = () => {
  return {
    type: CLEAR_STATUS
  }
}

// NOTE: not *quite* sure how to do this at the react level. maybe via a ref or encapsulate it within the
// animation itself. this isn't *terrible*, though
const smoothDispatch = (fn) => {
  setTimeout(fn, 1700)
}

export const saveProductCodes = () => {
  return async function (dispatch, getState) {
    dispatch(saveProductCodesSync())

    const { productCodes } = getState()
    const { status } = await fetch(process.env.UPC_URL, {
      method: 'POST',
      body: JSON.stringify({
        list: productCodes.map(({ value }) => value)
      })
    })

    if (status === 200) {
      smoothDispatch(() => {
        dispatch(saveProductCodesSuccess())
        smoothDispatch(() => dispatch(clearStatus()))
      })
    } else {
      smoothDispatch(() => {
        dispatch(saveProductCodesError())
        smoothDispatch(() => dispatch(clearStatus()))
      })
    }
  }
}
