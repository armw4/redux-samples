import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addUpc, saveProductCodes } from '../actions'
import ListContainer from './list-container'
import SubmitContainer from './submit-container'
import style from './style.css'

class Container extends Component {
  static propTypes = {
    addUpc: PropTypes.func.isRequired,
    saveProductCodes: PropTypes.func.isRequired
  }

  handleSubmit = (e) => {
    const { saveProductCodes } = this.props

    e.preventDefault()

    saveProductCodes()
  }

  render () {
    const { addUpc } = this.props

    return (
      <div className={style.root}>
        <button type="button" onClick={addUpc}>Add UPC +</button>
        <form onSubmit={this.handleSubmit}>
          <ListContainer />
          <SubmitContainer />
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  const actions = { addUpc, saveProductCodes }

  return bindActionCreators(actions, dispatch)
}

// no state needed so we don't subscribe to the store. this means we don't rerender
// when child/constituent components update the state. we only want to interface w/ the store
// solely for the means of dispatching. this way we maintain optimal performance. we have containers
// within a container, which *could* hurt performance if not properly configured. here, the container
// components that care about the state do so further down the line, with this container component serving as
// their parent...but not burdening them with unnecessary renders just for the purposes of handling submission.
export default connect(null, mapDispatchToProps)(Container)
