import React from 'react'
import FormContainer from './form-container'
import RequestStatusBarContainer from './request-status-bar-container'

export default () => {
  return (
    <div>
      <RequestStatusBarContainer />
      <FormContainer />
    </div>
  )
}
