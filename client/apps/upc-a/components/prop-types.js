import { PropTypes } from 'react'
import { NON_NUMBER, TOO_MANY_DIGITS, CHECK_DIGIT_ERROR } from './error-codes'

export const PRODUCT_CODE_SHAPE = PropTypes.shape({
  value: PropTypes.string.isRequired,
  error: PropTypes.oneOf([NON_NUMBER, TOO_MANY_DIGITS, CHECK_DIGIT_ERROR]),
  valid: PropTypes.bool
})
