import React from 'react'
import { connect } from 'react-redux'
import { PENDING, NOT_FOUND, GENERIC_ERROR } from '../constants'
import RepositoryList from '../components/RepositoryList'

const requestStatus = status => {
  switch(status) {
    case PENDING: // TODO: Loading svg via font-awesome
      return <span>Loading...</span>
    case NOT_FOUND:
      return <span>User not found.</span>
    case GENERIC_ERROR:
      return <span>An unexpected error occurred.</span>
    default:
      throw new Error('invalid request status.')
  }
}

const Container = ({ repositories, requestStatus: status }) => {
  if (status) {
    return requestStatus(status)
  }

  return repositories ? <RepositoryList repositories={repositories} /> : null
}

const mapStateToProps = state => {
  const { repositories, requestStatus } = state

  return { repositories, requestStatus }
}

export default connect(mapStateToProps)(Container)
