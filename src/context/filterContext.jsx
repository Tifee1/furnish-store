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
  sort: 'p-lowest',
  filters: {
    search: '',
    category: 'all',
    company: 'all',
    color: 'all',
    price: 0,
    maxPrice: 0,
    shipping: false,
  },
}

export const FilterProvider = ({ children }) => {
  const { products } = useProductContext()
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    dispatch({ type: 'SET_PRODUCTS', payload: products })
  }, [products])

  useEffect(() => {
    dispatch({ type: 'SET_FILTERS' })
    dispatch({ type: 'SORT' })
  }, [state.filters, state.sort])

  const setGridView = () => {
    dispatch({ type: 'SET_GRIDVIEW' })
  }
  const setListView = () => {
    dispatch({ type: 'SET_LISTVIEW' })
  }

  const changeSort = (value) => {
    dispatch({ type: 'CHANGE_SORT', payload: value })
  }

  const changeFilter = ({ name, value }) => {
    dispatch({ type: 'CHANGE_FILTER', payload: { name, value } })
  }

  const clearFilters = () => {
    dispatch({ type: 'CLEAR_FILTERS' })
  }

  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        changeFilter,
        clearFilters,
        changeSort,
      }}
    >
      {children}
    </FilterContext.Provider>
  )
}

const useFilterContext = () => {
  return useContext(FilterContext)
}

export default useFilterContext
