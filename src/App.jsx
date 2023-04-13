import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Footer, Navbar, Sidebar, Submenu } from './components'
// import useAppContext from './context/usercontext'
import {
  About,
  AuthWrapper,
  Cart,
  Checkout,
  Contact,
  Error,
  Faq,
  Home,
  Privacy,
  PrivateWrapper,
  Products,
  Receipt,
  Services,
  SingleProduct,
} from './pages'

const App = () => {
  // const { closeSubmenu } = useAppContext()

  // const removeSubmenu = (e) => {
  //   if (!e.target.classList.contains('page-nav')) {
  //     closeSubmenu()
  //   }
  //   if (!e.target.classList.contains('show')) {
  //     closeSubmenu()
  //   }
  // }

  return (
    <BrowserRouter>
      <AuthWrapper>
        {/* <main onMouseOver={removeSubmenu}> */}
        <Navbar />
        <Sidebar />
        {/* <Submenu /> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='cart' element={<Cart />} />
          <Route
            path='checkout'
            element={
              <PrivateWrapper>
                <Checkout />
              </PrivateWrapper>
            }
          />
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
        {/* </main> */}
      </AuthWrapper>
    </BrowserRouter>
  )
}
export default App
