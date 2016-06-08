import React, { Component, PropTypes } from 'react'
import * as LocalPropTypes from './prop-types'
import ListItem from './list-item'

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
          {// NOTE: it probably would have been better to make the button and the list of
           // product codes two separate container components, as they're likely to have divergent
           // keys that they consume from the state tree in the future (i.e. disable button while request
           // is pending). we got a bit eager here. the parent container component sitting above these two
           // would become a normal component, encapsulating two container components. this is fine, but
           // splitting these out in advance would ease refactoring. it's kool, though. there is a YAGNI principal
           // there and i'm fine with being pragmatic. i'd say it's just a judgement call
          }
          <input type="submit" value="Submit" disabled={productCodesInvalid} />
        </form>
      </div>
    )
  }
}
