const reducer = (state, action) => {
  if (action.type === 'SET_PRODUCTS') {
    return {
      ...state,
      all_products: action.payload,
      filtered_products: action.payload,
    }
  }
  if (action.type === 'SET_GRIDVIEW') {
    return { ...state, grid_view: true }
  }
  if (action.type === 'SET_LISTVIEW') {
    return { ...state, grid_view: false }
  }
  throw new Error(`no matching '${action.type}' action type`)
}
export default reducer
