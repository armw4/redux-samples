import React from 'react'
import { connect } from 'react-redux'
import RepositoryList from '../components/RepositoryList'

const Container = ({ repositories, requestStatus }) => {
  return <RepositoryList repositories={repositories} />
}

const mapStateToProps = state => {
  const { repositories, requestStatus } = state

  return { repositories }
}

export default connect(mapStateToProps)(Container)
