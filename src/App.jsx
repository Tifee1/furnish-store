import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Footer, Navbar, Sidebar } from './components'
import {
  About,
  Cart,
  Checkout,
  Contact,
  Error,
  Faq,
  Home,
  Privacy,
  Products,
  Receipt,
  Services,
  SingleProduct,
} from './pages'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='cart' element={<Cart />} />
        <Route path='checkout' element={<Checkout />} />
        <Route path='contact' element={<Contact />} />
        <Route path='faq' element={<Faq />} />
        <Route path='privacy' element={<Privacy />} />
        <Route path='products' element={<Products />} />
        <Route path='receipt' element={<Receipt />} />
        <Route path='services' element={<Services />} />
        <Route path='products/:id' element={<SingleProduct />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
export default App
