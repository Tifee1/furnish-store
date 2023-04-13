import React, { useContext, useReducer } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { getLocalStorage } from '../utils/helpers'
import reducer from './cartReducer'

const initialState = {
  cart: getLocalStorage('cart'),
  noOfItems: 0,
  totalAmount: 0,
  shippingFee: 0,
}

const CartContext = React.createContext()

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.cart))
    dispatch({ type: 'UPDATE_TOTALS' })
  }, [state.cart])

  const addToCart = (amount, color, product) => {
    dispatch({ type: 'ADD_TO_CART', payload: { amount, color, product } })
  }

  const toggleAmount = (id, type, max) => {
    dispatch({ type: 'TOGGLE_AMOUNT', payload: { id, type, max } })
  }

  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id })
  }

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        toggleAmount,
        removeItem,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

const useCartContext = () => {
  return useContext(CartContext)
}

export default useCartContext
