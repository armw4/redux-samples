import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addUpc, deleteUpc, changeUpc, validateUpc, invalidateUpc, saveProductCodes } from '../actions'
import List from './list'
import style from './style.css'
import * as LocalPropTypes from './prop-types'

class Container extends Component {
  static propTypes = {
    deleteUpc: PropTypes.func.isRequired,
    changeUpc: PropTypes.func.isRequired,
    validateUpc: PropTypes.func.isRequired,
    invalidateUpc: PropTypes.func.isRequired,
    productCodes: PropTypes.arrayOf(LocalPropTypes.PRODUCT_CODE_SHAPE).isRequired,
    productCodesInvalid: PropTypes.bool.isRequired
  }

  render () {
    const {
      deleteUpc,
      changeUpc,
      validateUpc,
      invalidateUpc,
      productCodes,
      productCodesInvalid
    } = this.props

    return (
      <List
        onDelete={deleteUpc}
        onChange={changeUpc}
        onValid={validateUpc}
        onSubmit={saveProductCodes}
        onInvalid={invalidateUpc}
        productCodes={productCodes}
        productCodesInvalid={productCodesInvalid}
      />
    )
  }
}

const mapStateToProps = ({ productCodes }) => {
  return {
    productCodes,
    productCodesInvalid: productCodes.filter(({ valid }) => valid).length !== productCodes.length
  }
}

const mapDispatchToProps = (dispatch) => {
  const actions ={ deleteUpc, changeUpc, validateUpc, invalidateUpc }

  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)
