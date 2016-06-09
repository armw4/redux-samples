import React, { PropTypes } from 'react'
import * as LocalPropTypes from './prop-types'
import { REQUEST_PENDING } from '../constants'

const Component = ({ requestStatus, productCodesInvalid }) =>
  <input type="submit" value="Submit" disabled={requestStatus === REQUEST_PENDING || productCodesInvalid} />

Component.propTypes = {
  productCodesInvalid: PropTypes.bool.isRequired,
  requestStatus: LocalPropTypes.REQUEST_STATUS
}

export default Component
