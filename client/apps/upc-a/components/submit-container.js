import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Submit from './submit'
import * as LocalPropTypes from './prop-types'

class Container extends Component {
  static propTypes = {
    productCodesInvalid: PropTypes.bool.isRequired,
    requestStatus: LocalPropTypes.REQUEST_STATUS
  }

  render () {
    const { requestStatus, productCodesInvalid } = this.props

    return <Submit requestStatus={requestStatus} productCodesInvalid={productCodesInvalid} />
  }
}

const mapStateToProps = ({ requestStatus, productCodes }) => {
  return {
    productCodesInvalid: productCodes.filter(({ valid }) => valid).length !== productCodes.length,
    requestStatus
  }
}

export default connect(mapStateToProps)(Container)
