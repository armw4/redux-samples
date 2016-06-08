import React, { Component, PropTypes } from 'react'
import * as LocalPropTypes from './prop-types'
import * as ErrorCodes from './error-codes'
import style from './style.css'
import SVG from 'svg-inline-react'
import { ALL_DIGITS, CODE_LENGTH, normalizedValue, passesCheckDigitVerification } from '../../../lib/upc-a'

export default class extends Component {
  static propTypes = {
    onDelete: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    onValid: PropTypes.func.isRequired,
    onInvalid: PropTypes.func.isRequired,
    productCode: LocalPropTypes.PRODUCT_CODE_SHAPE.isRequired,
    index: PropTypes.number.isRequired
  }

  handleChange = ({ target: { value } }) => {
    const { onChange, onValid, onInvalid, index } = this.props
    const { length } = value

    if (ALL_DIGITS.test(value) || !length) {
      if (length > CODE_LENGTH) {
        const error = { error: ErrorCodes.TOO_MANY_DIGITS, value, index }

        onInvalid(error)
      } else {
        const normalizedCode = normalizedValue(value)

        if (normalizedCode.length === CODE_LENGTH) {
          if (passesCheckDigitVerification(normalizedCode)) {
            onValid(normalizedCode, index)
          } else {
            const error = { error: ErrorCodes.CHECK_DIGIT_ERROR, value: normalizedCode, index }

            onInvalid(error)
          }
        } else {
          onChange(normalizedCode, index)
        }
      }
    } else {
      const error = { error: ErrorCodes.NON_NUMBER, value, index }

      onInvalid(error)
    }
  }

  handleDelete = () => {
    const { onDelete, index } = this.props

    onDelete(index)
  }

  deleteButton = () => {
    return (
      <button title="remove UPC" className={style.remove} onClick={this.handleDelete} type="button">
        <SVG src={require('../../../fontawesome/red/svg/trash-o.svg')} />
      </button>
    )
  }

  successIcon = () => {
    return (
      <span className={style.success}>
        <SVG title="you entered a valid UPC" src={require('../../../fontawesome/green/svg/check-circle.svg')} />
      </span>
    )
  }

  errorMessage = (value, error) => {
    switch (error) {
      case ErrorCodes.NON_NUMBER:
        return <span className={style.error}>UPC must be a {CODE_LENGTH} digit number</span>
      case ErrorCodes.TOO_MANY_DIGITS:
        const { length } = value

        return <span className={style.error}>You entered { length - CODE_LENGTH } digit(s) too many</span>
      case ErrorCodes.CHECK_DIGIT_ERROR:
        return <span className={style.error}>Check digit verification failed (did you mistype a digit?)</span>
      default:
        throw new Error('invalid error code')
    }
  }

  digitsRemaining = (value) => <span className={style.digitsRemaining}>{CODE_LENGTH - value.length} digits remaining</span>

  render () {
    const { productCode: { value, error, valid }, index } = this.props

    return (
      <div>
        <input type="text" onChange={this.handleChange} value={value} placeholder="UPC (i.e. 011111111111)" />
        { index === 0 ? null : this.deleteButton() }
        { valid ? this.successIcon() : null }
        { error ? this.errorMessage(value, error) : null }
        { value.length && !valid && !error ? this.digitsRemaining(value) : null }
      </div>
    )
  }
}
