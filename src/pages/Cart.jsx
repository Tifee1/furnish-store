import { Link } from 'react-router-dom'
import CartContent from '../components/cart/CartContent'
import Hero from '../components/Hero'
import useCartContext from '../context/cartContext'

const Cart = () => {
  const { cart } = useCartContext()

  if (cart.length < 1) {
    return (
      <main>
        <Hero title='cart' />
        <section className='min-h-[calc(100vh-20rem)] text-center mt-8'>
          <h2 className='font-semibold mb-8'>Your Cart is empty</h2>
          <Link
            to='/products'
            className='trans bg-yel text-white px-6 py-2 capitalize text-xl rounded-lg hover:bg-black'
          >
            fill it
          </Link>
        </section>
      </main>
    )
  }
  return (
    <main>
      <Hero title='cart' />
      <main className='section-center py-20'>
        <CartContent />
      </main>
    </main>
  )
}
export default Cart
