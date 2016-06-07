import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import UPCList from './upc-list'
import style from './style.css'
import * as LocalPropTypes from './prop-types'

class Container extends Component {
  static propTypes = {
    productCodes: PropTypes.arrayOf(LocalPropTypes.PRODUCT_CODE_SHAPE).isRequired,
    productCodesInvalid: PropTypes.bool.isRequired
  }

  handleChange = () => {

  }

  handleValid = () => {

  }

  handleInvalid = () => {

  }

  render () {
    const { productCodes, productCodesInvalid } = this.props

    return (
      <div className={style.root}>
        <UPCList
          onChange={this.handleChange}
          onValid={this.handleValid}
          onInvalid={this.handleInvalid}
          productCodes={productCodes}
          productCodesInvalid={productCodesInvalid}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    productCodes: state.productCodes,
    productCodesInvalid: true
  }
}

export default connect(mapStateToProps)(Container)
