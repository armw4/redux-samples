import { createSelector } from 'reselect'

const getProductCodes = ({ productCodes }) => productCodes

export const getValidProductCodes = createSelector([getProductCodes], (productCodes) => {
  return productCodes.filter(({ valid }) => valid)
})
