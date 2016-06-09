import React, { PropTypes } from 'react'

const Component = ({ productCodesInvalid }) => <input type="submit" value="Submit" disabled={productCodesInvalid} />

Component.propTypes = {
  productCodesInvalid: PropTypes.bool.isRequired
}

export default Component
