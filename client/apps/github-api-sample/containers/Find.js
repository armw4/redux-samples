import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchRepositories } from '../actions'
import Find from '../components/Find'

const Container = () => {
  return <Find {...this.props} />
}

const mapStateToProps = state => {
  const { user } = state

  return { user }
}

const mapDispatchToProps = dispatch => {
  const actions = { fetchRepositories }

  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Find)
