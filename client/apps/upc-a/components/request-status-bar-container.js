import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import RequestStatusBar from './request-status-bar'
import * as LocalPropTypes from './prop-types'

class Container extends Component {
  static propTypes = {
    requestStatus: LocalPropTypes.REQUEST_STATUS
  }

  render() {
    const { requestStatus } = this.props

    return requestStatus ? <RequestStatusBar requestStatus={requestStatus} /> : null
  }
}

const mapStateToProps = ({ requestStatus }) => {
  return { requestStatus }
}

export default connect(mapStateToProps)(Container)
