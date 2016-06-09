import { PropTypes } from 'react'
import * as Constants from '../constants'

export const PRODUCT_CODE_SHAPE = PropTypes.shape({
  value: PropTypes.string.isRequired,
  error: PropTypes.oneOf([Constants.NON_NUMBER, Constants.TOO_MANY_DIGITS, Constants.CHECK_DIGIT_ERROR]),
  valid: PropTypes.bool
})

export const REQUEST_STATUS = PropTypes.oneOf([Constants.REQUEST_PENDING, Constants.REQUEST_ERROR, Constants.REQUEST_SUCCESS])
