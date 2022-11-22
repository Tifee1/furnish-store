import React from 'react'
import { useReducer } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import useProductContext from './productContext'
import reducer from './filterReducer'

const FilterContext = React.createContext()

const initialState = {
  all_products: [],
  filtered_products: [],
  grid_view: true,
}

export const FilterProvider = ({ children }) => {
  const { products } = useProductContext()
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    dispatch({ type: 'SET_PRODUCTS', payload: products })
  }, [products])

  const setGridView = () => {
    dispatch({ type: 'SET_GRIDVIEW' })
  }
  const setListView = () => {
    dispatch({ type: 'SET_LISTVIEW' })
  }

  return (
    <FilterContext.Provider value={{ ...state, setGridView, setListView }}>
      {children}
    </FilterContext.Provider>
  )
}

const useFilterContext = () => {
  return useContext(FilterContext)
}

export default useFilterContext
