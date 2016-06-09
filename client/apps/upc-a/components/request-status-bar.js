import React, { PropTypes } from 'react'
import * as LocalPropTypes from './prop-types'
import style from './style.css'
import { REQUEST_PENDING, REQUEST_ERROR, REQUEST_SUCCESS } from '../constants'

const pulsatePending = () => {
  return (
    <div className={style.statusBar}>
      <span className="pulsate pending"></span>
      <span className={style.message}>request pending...</span>
    </div>
  )
}

const pulsateError = () => {
  return (
    <div className={style.statusBar}>
      <span className="pulsate error"></span>
      <span className={style.message}>request error.</span>
    </div>
  )
}

const pulsateSuccess = () => {
  return (
    <div className={style.statusBar}>
      <span className="pulsate success"></span>
      <span className={style.message}>request successful.</span>
    </div>
  )
}

const Component = ({ requestStatus }) => {
  if (requestStatus === REQUEST_PENDING) {
    return pulsatePending()
  } else if (requestStatus === REQUEST_ERROR) {
    return pulsateError()
  } else if (requestStatus === REQUEST_SUCCESS) {
    return pulsateSuccess()
  }

  return null
}

Component.propTypes = {
  requestStatus: LocalPropTypes.REQUEST_STATUS.isRequired
}

export default Component
