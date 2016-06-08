import React from 'react'
import UPCContainer from './upc-container'
import RequestStatusBarContainer from './request-status-bar-container'

export default () => {
  return (
    <div>
      <RequestStatusBarContainer />
      <UPCContainer />
    </div>
  )
}
