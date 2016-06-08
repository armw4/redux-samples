import React, { PropTypes } from 'react'
import * as LocalPropTypes from './prop-types'
import style from './style.css'

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

const Component = ({ requestStatus: { pending, error, success } }) => {
  if (pending) {
    return pulsatePending()
  } else if (error) {
    return pulsateError()
  } else if (success) {
    return pulsateSuccess()
  }

  return null
}

Component.propTypes = {
  requestStatus: LocalPropTypes.REQUEST_STATUS
}

export default Component
