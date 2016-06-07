import React, { PropTypes } from 'react'
import * as LocalPropTypes from './prop-types'
import UPCListItem from './upc-list-item'

const Component = ({ onChange, onValid, onInvalid, productCodes, productCodesInvalid }) => {
  return (
    <div>
      <button type="button">Add UPC +</button>
      <form>
        <input type="text" placeholder="Say something..." />
        <input type="submit" value="Post" />
      </form>
    </div>
  )
}

Component.propTypes = {
  onChange: PropTypes.func.isRequired,
  onValid: PropTypes.func.isRequired,
  onInvalid: PropTypes.func.isRequired,
  productCodes: PropTypes.arrayOf(LocalPropTypes.PRODUCT_CODE_SHAPE).isRequired,
  productCodesInvalid: PropTypes.bool.isRequired
}

export default Component
