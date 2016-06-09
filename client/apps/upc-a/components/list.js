import React, { Component, PropTypes } from 'react'
import * as LocalPropTypes from './prop-types'
import ListItem from './list-item'

export default class extends Component {
  static propTypes = {
    onDelete: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    onValid: PropTypes.func.isRequired,
    onInvalid: PropTypes.func.isRequired,
    productCodes: PropTypes.arrayOf(LocalPropTypes.PRODUCT_CODE_SHAPE).isRequired
  }

  render () {
    const {
      onDelete,
      onChange,
      onValid,
      onInvalid,
      productCodes
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
      </div>
    )
  }
}
