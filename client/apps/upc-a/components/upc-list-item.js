import React, { PropTypes } from 'react'
import * as LocalPropTypes from './prop-types'

const Component = ({ onChange, onValid, onInvalid, index, productCode }) => {
  const { value } = productCode

  return (
    <input type="text" value={value} placeholder="Say something..." />
  )
}

Component.propTypes = {
  onChange: PropTypes.func.isRequired,
  onValid: PropTypes.func.isRequired,
  onInvalid: PropTypes.func.isRequired,
  productCode: LocalPropTypes.PRODUCT_CODE_SHAPE.isRequired,
  index: PropTypes.number.isRequired
}

export default Component
