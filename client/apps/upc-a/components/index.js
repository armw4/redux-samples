import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addUpc, changeUpc, validateUpc, invalidateUpc } from '../actions'
import UPCList from './upc-list'
import style from './style.css'
import * as LocalPropTypes from './prop-types'

class Container extends Component {
  static propTypes = {
    productCodes: PropTypes.arrayOf(LocalPropTypes.PRODUCT_CODE_SHAPE).isRequired,
    productCodesInvalid: PropTypes.bool.isRequired,
    addUpc: PropTypes.func.isRequired,
    changeUpc: PropTypes.func.isRequired,
    validateUpc: PropTypes.func.isRequired,
    invalidateUpc: PropTypes.func.isRequired
  }

  render () {
    const { productCodes, productCodesInvalid, addUpc, changeUpc, validateUpc, invalidateUpc } = this.props

    return (
      <div className={style.root}>
        <UPCList
          onAdd={addUpc}
          onChange={changeUpc}
          onValid={validateUpc}
          onInvalid={invalidateUpc}
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

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ addUpc, changeUpc, validateUpc, invalidateUpc }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)
