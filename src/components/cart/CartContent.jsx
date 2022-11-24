import useCartContext from '../../context/cartContext'
import CartColumn from './CartColumn'
import CartItem from './CartItem'

const CartContent = () => {
  const { cart } = useCartContext()
  return (
    <section>
      <CartColumn />
      <div>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />
        })}
      </div>
    </section>
  )
}
export default CartContent
