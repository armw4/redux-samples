import React, { Component, PropTypes } from 'react'
import * as LocalPropTypes from './prop-types'
import * as ErrorCodes from './error-codes'
import style from './style.css'

const ALL_DIGITS = /^\d+$/

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

    if (ALL_DIGITS.test(value) || !value.length) {
      onChange(value, index)
    } else {
      const error = { error: ErrorCodes.NON_NUMBER, value, index }

      onInvalid(error)
    }
  }

  handleDelete = () => {
    const { onDelete, index } = this.props

    onDelete(index)
  }

  deleteButton = () => <button className="remove" onClick={this.handleDelete} type="button">X</button>

  successIcon = () => <span className="success">✓</span>

  errorMessage = (error) => {
    switch (error) {
      case ErrorCodes.NON_NUMBER:
        return <span className={style.error}>UPC must be a 12 digit number</span>
      case ErrorCodes.TOO_MANY_DIGITS:
      case ErrorCodes.CHECK_DIGIT_ERROR:
      default:
        throw new Error('invalid error code')
    }
  }

  digitsRemaining = (value) => <span className={style.digitsRemaining}>{12 - value.length} digits remaining</span>

  render () {
    const { productCode: { value, error, valid }, index } = this.props

    return (
      <div>
        <input type="text" onChange={this.handleChange} value={value} placeholder="UPC (i.e. 011111111111)" />
        { index === 0 ? null : this.deleteButton() }
        { valid ? this.successIcon() : null }
        { error ? this.errorMessage(error) : null }
        { value.length && !valid && !error ? this.digitsRemaining(value) : null }
      </div>
    )
  }
}
