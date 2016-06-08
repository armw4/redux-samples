import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import * as LocalPropTypes from './prop-types'

class Container extends Component {
  static propTypes = {
    requestStatus: LocalPropTypes.REQUEST_STATUS
  }

  render() {
    const { requestStatus } = this.props

    if (!requestStatus) {
      return null
    }

    const  { pending, success, error } = requestStatus

    return <span>{!pending} - {!success} - {error}</span>
  }
}

const mapStateToProps = ({ requestStatus }) => {
  return { requestStatus }
}

export default connect(mapStateToProps)(Container)
