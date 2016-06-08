import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addUpc, deleteUpc, changeUpc, validateUpc, invalidateUpc, saveProductCodes } from '../actions'
import UPCList from './upc-list'
import style from './style.css'
import * as LocalPropTypes from './prop-types'

class Container extends Component {
  static propTypes = {
    productCodes: PropTypes.arrayOf(LocalPropTypes.PRODUCT_CODE_SHAPE).isRequired,
    productCodesInvalid: PropTypes.bool.isRequired,
    addUpc: PropTypes.func.isRequired,
    deleteUpc: PropTypes.func.isRequired,
    changeUpc: PropTypes.func.isRequired,
    validateUpc: PropTypes.func.isRequired,
    invalidateUpc: PropTypes.func.isRequired,
    saveProductCodes: PropTypes.func.isRequired
  }

  render () {
    const {
      productCodes,
      productCodesInvalid,
      addUpc,
      deleteUpc,
      changeUpc,
      validateUpc,
      invalidateUpc,
      saveProductCodes
    } = this.props

    return (
      <div className={style.root}>
        <UPCList
          onAdd={addUpc}
          onDelete={deleteUpc}
          onChange={changeUpc}
          onValid={validateUpc}
          onSubmit={saveProductCodes}
          onInvalid={invalidateUpc}
          productCodes={productCodes}
          productCodesInvalid={productCodesInvalid}
        />
      </div>
    )
  }
}

const mapStateToProps = ({ productCodes }) => {
  return {
    productCodes: productCodes,
    productCodesInvalid: productCodes.filter(({ valid }) => valid).length !== productCodes.length
  }
}

const mapDispatchToProps = (dispatch) => {
  const actions ={ addUpc, deleteUpc, changeUpc, validateUpc, invalidateUpc, saveProductCodes }

  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)
