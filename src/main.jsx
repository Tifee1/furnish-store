import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { AppProvider } from './context/appcontext'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import './index.css'
import { ProductProvider } from './context/productContext'
import { FilterProvider } from './context/filterContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <ProductProvider>
        <FilterProvider>
          <App />
        </FilterProvider>
      </ProductProvider>
    </AppProvider>
  </React.StrictMode>
)
