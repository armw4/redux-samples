import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import style from './style.css'

const PRODUCT_CODE_SHAPE = PropTypes.shape({
  value: PropTypes.string
})

class Container extends Component {
  static propTypes = {
    productCodes: PropTypes.arrayOf(PRODUCT_CODE_SHAPE).isRequired,
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
