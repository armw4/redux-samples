import React, { PropTypes } from 'react'
import * as LocalPropTypes from './prop-types'

const Component = ({ requestStatus: { pending }, productCodesInvalid }) =>
  <input type="submit" value="Submit" disabled={pending || productCodesInvalid} />

Component.propTypes = {
  productCodesInvalid: PropTypes.bool.isRequired,
  requestStatus: LocalPropTypes.REQUEST_STATUS.isRequired
}

export default Component
