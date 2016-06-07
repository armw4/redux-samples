import React, { Component, PropTypes } from 'react'
import * as LocalPropTypes from './prop-types'
import * as ErrorCodes from './error-codes'

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

    onChange(value, index)
  }

  handleDelete = () => {
    const { onDelete, index } = this.props

    onDelete(index)
  }

  render () {
    const { productCode: { value }, index } = this.props

    return (
      <div>
        <input type="text" onChange={this.handleChange} value={value} placeholder="UPC (i.e. 011111111111)" />
        { index === 0 ? null : <button className="remove" onClick={this.handleDelete} type="button">X</button> }
      </div>
    )
  }
}
