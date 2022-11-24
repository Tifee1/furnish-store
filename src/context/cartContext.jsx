import React, { useContext, useReducer } from 'react'
import reducer from './cartReducer'

const initialState = {
  cart: [],
  noOfItems: 0,
  totalAmount: 0,
}

const CartContext = React.createContext()

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const addToCart = (amount, color, product) => {
    dispatch({ type: 'ADD_TO_CART', payload: { amount, color, product } })
  }

  const toggleAmount = (id, type, max) => {
    dispatch({ type: 'TOGGLE_AMOUNT', payload: { id, type, max } })
  }

  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id })
  }

  return (
    <CartContext.Provider
      value={{ ...state, addToCart, toggleAmount, removeItem }}
    >
      {children}
    </CartContext.Provider>
  )
}

const useCartContext = () => {
  return useContext(CartContext)
}

export default useCartContext
