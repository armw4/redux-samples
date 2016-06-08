import React, { Component, PropTypes } from 'react'
import * as LocalPropTypes from './prop-types'
import UPCListItem from './upc-list-item'

export default class extends Component {
  static propTypes = {
    onAdd: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    onValid: PropTypes.func.isRequired,
    onInvalid: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    productCodes: PropTypes.arrayOf(LocalPropTypes.PRODUCT_CODE_SHAPE).isRequired,
    productCodesInvalid: PropTypes.bool.isRequired
  }

  handleSubmit = (e) => {
    const { onSubmit } = this.props

    e.preventDefault()

    onSubmit()
  }

  render () {
    const {
      onAdd,
      onDelete,
      onChange,
      onValid,
      onInvalid,
      productCodes,
      productCodesInvalid
    } = this.props

    return (
      <div>
        <button type="button" onClick={onAdd}>Add UPC +</button>
        <form onSubmit={this.handleSubmit}>
          {
            productCodes.map((productCode, index) => {
              return (
                <UPCListItem
                  key={index}
                  onDelete={onDelete}
                  onChange={onChange}
                  onValid={onValid}
                  onInvalid={onInvalid}
                  productCode={productCode}
                  index={index}
                />
              )
            })
          }
          <input type="submit" value="Submit" disabled={productCodesInvalid} />
        </form>
      </div>
    )
  }
}
