import axios from 'axios'
import React, { useContext } from 'react'
import { useEffect } from 'react'
import { useReducer } from 'react'
import reducer from './productsReducer'

const ProductContext = React.createContext()

const initialState = {
  products: [],
  featured: [],
  loading: false,
  error: false,
  singleProduct: {},
  singleLoading: false,
  singleError: false,
}

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const fetchData = async (url) => {
    dispatch({ type: 'SET_LOADING' })
    try {
      const resp = await axios(url)
      const tempData = await resp.data
      const data = tempData.map((item) => {
        return { ...item, price: item.price * 420 }
      })

      dispatch({ type: 'SET_DATA', payload: data })
    } catch (error) {
      dispatch({ type: 'SET_ERROR' })
    }
  }

  const fetchSingleProduct = async (id) => {
    dispatch({ type: 'SET_SINGLE_LOADING' })
    try {
      const resp = await axios(
        `https://course-api.com/react-store-single-product?id=${id}`
      )
      const temp = await resp.data
      const data = { ...temp, price: temp.price * 420 }
      dispatch({ type: 'SET_SINGLE_PRODUCT', payload: data })
    } catch (error) {
      dispatch({ type: 'SET_SINGLE_ERROR' })
    }
  }

  useEffect(() => {
    fetchData('https://course-api.com/react-store-products')
  }, [])

  return (
    <ProductContext.Provider value={{ ...state, fetchSingleProduct }}>
      {children}
    </ProductContext.Provider>
  )
}

const useProductContext = () => {
  return useContext(ProductContext)
}

export default useProductContext
