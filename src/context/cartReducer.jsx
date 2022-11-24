const reducer = (state, action) => {
  if (action.type === 'ADD_TO_CART') {
    const { product, amount, color } = action.payload
    const { name, shipping, images, price, stock } = product
    const newId = product.id + color
    const exist = state.cart.find((c) => c.id === newId)
    let cart = [...state.cart]
    if (exist) {
      cart = state.cart.map((item) => {
        if (item.id === newId) {
          return { ...item, amount: item.amount + amount }
        }
        return { ...item }
      })
    } else {
      const newItem = {
        name,
        price,
        shipping,
        image: images[0].url,
        stock,
        id: newId,
        color,
        amount,
      }
      cart = [...state.cart, newItem]
    }
    return { ...state, cart }
  }

  if (action.type === 'TOGGLE_AMOUNT') {
    const cart = state.cart.map((item) => {
      if (item.id === action.payload.id) {
        if (action.payload.type === 'inc') {
          let amount = item.amount + 1
          if (amount > action.payload.max) {
            amount = action.payload.max
          }
          return { ...item, amount }
        }
        if (action.payload.type === 'dec') {
          let amount = item.amount - 1
          if (amount < 1) {
            amount = 1
          }
          return { ...item, amount }
        }
      }
      return { ...item }
    })

    return { ...state, cart }
  }

  if (action.type === 'REMOVE_ITEM') {
    const cart = state.cart.filter((item) => item.id !== action.payload)
    return { ...state, cart }
  }

  throw new Error(`no matching '${action.type} action type`)
}

export default reducer
