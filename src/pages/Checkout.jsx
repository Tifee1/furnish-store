import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import Paystack from '../components/Paystack'
import useCartContext from '../context/cartContext'
import useUserContext from '../context/usercontext'

const Checkout = () => {
  const { cart } = useCartContext()
  const { user } = useUserContext()

  if (cart.length < 1) {
    return (
      <main>
        <Hero title='checkout' />
        <section className='min-h-[calc(100vh-20rem)] text-center mt-20'>
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
      <Hero title='checkout' />
      <section className='min-h-[calc(100vh-20rem)] flex items-center justify-center mt-20'>
        <Paystack />
      </section>
    </main>
  )
}
export default Checkout
