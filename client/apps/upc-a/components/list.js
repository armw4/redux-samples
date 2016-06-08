import React, { Component, PropTypes } from 'react'
import * as LocalPropTypes from './prop-types'
import ListItem from './list-item'

export default class extends Component {
  static propTypes = {
    onDelete: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    onValid: PropTypes.func.isRequired,
    onInvalid: PropTypes.func.isRequired,
    productCodes: PropTypes.arrayOf(LocalPropTypes.PRODUCT_CODE_SHAPE).isRequired,
    productCodesInvalid: PropTypes.bool.isRequired
  }

  render () {
    const {
      onDelete,
      onChange,
      onValid,
      onInvalid,
      productCodes,
      productCodesInvalid
    } = this.props

    return (
      <div>
        {
          productCodes.map((productCode, index) => {
            return (
              <ListItem
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
      </div>
    )
  }
}
