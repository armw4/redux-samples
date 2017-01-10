import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchRepositories, setUser } from '../actions'
import Find from '../components/Find'

const Container = props => {
  const { user, fetchRepositories: onFind, setUser: onUserChange } = props
  const boundProps = { user, onFind, onUserChange }

  return <Find {...boundProps} />
}

const mapStateToProps = state => {
  const { user } = state

  return { user }
}

const mapDispatchToProps = dispatch => {
  const actions = { fetchRepositories, setUser }

  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)
