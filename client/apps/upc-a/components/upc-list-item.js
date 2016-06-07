import React, { Component, PropTypes } from 'react'
import * as LocalPropTypes from './prop-types'

export default class extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    onValid: PropTypes.func.isRequired,
    onInvalid: PropTypes.func.isRequired,
    productCode: LocalPropTypes.PRODUCT_CODE_SHAPE.isRequired,
    index: PropTypes.number.isRequired
  }

  handleChange = (e) => {
    console.log(e)
    const { onChange, onValid, onInvalid, index } = this.props
  }

  render () {
    const { productCode: { value } } = this.props

    return (
      <input type="text" onChange={this.handleChange} value={value} placeholder="Say something..." />
    )
  }
}
