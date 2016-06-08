import React, { PropTypes } from 'react'
import * as LocalPropTypes from './prop-types'

const Component = ({ requestStatus: { pending, error, success } }) => {
  return (
    <div>Hello World</div>
  )
}

Component.propTypes = {
  requestStatus: LocalPropTypes.REQUEST_STATUS
}

export default Component
