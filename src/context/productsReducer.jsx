const reducer = (state, action) => {
  if (action.type === 'SET_LOADING') {
    return { ...state, loading: true, error: false }
  }
  if (action.type === 'SET_DATA') {
    const featured = action.payload.filter((item) => item.featured === true)
    return { ...state, products: action.payload, loading: false, featured }
  }
  if (action.type === 'SET_ERROR') {
    return { ...state, error: true, loading: false }
  }
  if (action.type === 'SET_SINGLE_LOADING') {
    return { ...state, singleLoading: true, singleError: false }
  }
  if (action.type === 'SET_SINGLE_PRODUCT') {
    return { ...state, singleProduct: action.payload, singleLoading: false }
  }
  if (action.type === 'SET_SINGLE_ERROR') {
    return { ...state, singleError: true, singleLoading: false }
  }
  throw new Error(`no matching '${action.type}' action type`)
}

export default reducer
