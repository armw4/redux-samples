import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Submit from './submit'

class Container extends Component {
  static propTypes = {
    productCodesInvalid: PropTypes.bool.isRequired
  }

  render () {
    const { productCodesInvalid } = this.props

    return <Submit productCodesInvalid={productCodesInvalid} />
  }
}

const mapStateToProps = ({ productCodes }) => {
  return {
    productCodesInvalid: productCodes.filter(({ valid }) => valid).length !== productCodes.length
  }
}

export default connect(mapStateToProps)(Container)
