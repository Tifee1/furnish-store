const reducer = (state, action) => {
  if (action.type === 'SET_PRODUCTS') {
    return {
      ...state,
      all_products: action.payload,
      filtered_products: action.payload,
    }
  }
  throw new Error(`no matching '${action.type}' action type`)
}
export default reducer
