import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import * as LocalPropTypes from './prop-types'
import { getValidProductCodes } from '../selectors'
import { REQUEST_PENDING } from '../constants'

class Container extends Component {
  static propTypes = {
    productCodesInvalid: PropTypes.bool.isRequired,
    requestStatus: LocalPropTypes.REQUEST_STATUS
  }

  render () {
    const { requestStatus, productCodesInvalid } = this.props

    return <input type="submit" value="Submit" disabled={requestStatus === REQUEST_PENDING || productCodesInvalid} />
  }
}

const mapStateToProps = (state) => {
  const { requestStatus, productCodes } = state
  const validProductCodes = getValidProductCodes(state)

  return {
    requestStatus,
    productCodesInvalid: validProductCodes.length !== productCodes.length,
  }
}

export default connect(mapStateToProps)(Container)
