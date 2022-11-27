import { Link } from 'react-router-dom'
import useCartContext from '../../context/cartContext'
import CartColumn from './CartColumn'
import CartItem from './CartItem'
import CartTotals from './CartTotals'

const CartContent = () => {
  const { cart, clearCart } = useCartContext()
  return (
    <section>
      <CartColumn />
      <div>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />
        })}
        <hr className='border-[#617d98]' />
      </div>
      <div className='flex justify-between items-center text-white mt-8 mb-20'>
        <Link
          to='/products'
          className='trans bg-yel px-3 py-2 rounded-lg capitalize tracking-wider hover:bg-yel/75'
        >
          continue shopping
        </Link>
        <button
          className='trans bg-black px-3 py-2 rounded-lg capitalize tracking-wide hover:bg-black/75'
          onClick={clearCart}
        >
          clear shopping cart
        </button>
      </div>
      <CartTotals />
    </section>
  )
}
export default CartContent
