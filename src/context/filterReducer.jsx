const reducer = (state, action) => {
  if (action.type === 'SET_PRODUCTS') {
    const maxPrice = Math.max(...action.payload.map((item) => item.price))
    return {
      ...state,
      filters: { ...state.filters, price: maxPrice, maxPrice },
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

  if (action.type === 'CHANGE_SORT') {
    return { ...state, sort: action.payload }
  }

  if (action.type === 'CHANGE_FILTER') {
    return {
      ...state,
      filters: {
        ...state.filters,
        [action.payload.name]: action.payload.value,
      },
    }
  }

  if (action.type === 'CLEAR_FILTERS') {
    return {
      ...state,
      filters: {
        ...state.filters,
        search: '',
        category: 'all',
        company: 'all',
        color: 'all',
        price: state.filters.maxPrice,
        shipping: false,
      },
    }
  }

  if (action.type === 'SET_FILTERS') {
    const { search, color, company, category, shipping, price } = state.filters
    let filtered_products = [...state.all_products]

    // search
    if (search) {
      filtered_products = filtered_products.filter((c) =>
        c.name.toLowerCase().includes(search.toLowerCase())
      )
    }

    // company
    if (company !== 'all') {
      filtered_products = filtered_products.filter((c) => c.company === company)
    }

    // category
    if (category !== 'all') {
      filtered_products = filtered_products.filter(
        (c) => c.category === category
      )
    }

    // colors
    if (color !== 'all') {
      filtered_products = filtered_products.filter((c) => {
        return c.colors.find((d) => d === color)
      })
    }

    // price
    filtered_products = filtered_products.filter((c) => c.price <= price)

    // shipping
    if (shipping) {
      filtered_products = filtered_products.filter(
        (c) => c.shipping === shipping
      )
    }
    return { ...state, filtered_products }
  }

  if (action.type === 'SORT') {
    let filtered_products = [...state.filtered_products]

    // price lowest
    if (state.sort === 'p-lowest') {
      filtered_products = filtered_products.sort((a, b) => a.price - b.price)
    }

    // price highest
    if (state.sort === 'p-highest') {
      filtered_products = filtered_products.sort((a, b) => b.price - a.price)
    }

    // name a-z
    if (state.sort === 'a-z') {
      filtered_products = filtered_products.sort((a, b) =>
        a.name.localeCompare(b.name)
      )
    }

    // name z-a
    if (state.sort === 'z-a') {
      filtered_products = filtered_products.sort((a, b) =>
        b.name.localeCompare(a.name)
      )
    }
    return { ...state, filtered_products }
  }

  throw new Error(`no matching '${action.type}' action type`)
}
export default reducer
