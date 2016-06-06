import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import style from './style.css'
import * as Types from './prop-types'

class Container extends Component {
  static propTypes = {
    productCodes: PropTypes.arrayOf(Types.PRODUCT_CODE_SHAPE).isRequired,
    productCodesInvalid: PropTypes.bool.isRequired
  }

  render () {
    return <div className={style.root}>Hello @wacky-world.net</div>
  }
}

const mapStateToProps = (state) => {
  return {
    productCodes: state.productCodes,
    productCodesInvalid: true
  }
}

export default connect(mapStateToProps)(Container)
