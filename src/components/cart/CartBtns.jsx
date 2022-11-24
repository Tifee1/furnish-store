import { FaShoppingCart } from 'react-icons/fa'
import { FiUserPlus } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import useAppContext from '../../context/appcontext'
import useCartContext from '../../context/cartContext'

const CartBtns = () => {
  const { setIsSidebar } = useAppContext()
  const { noOfItems } = useCartContext()
  return (
    <div className='grid grid-cols-2 w-[200px] mx-auto items-center text-pry-100 text-2xl'>
      <Link
        to='/cart'
        className='btn shadow-none flex items-center'
        onClick={() => setIsSidebar(false)}
      >
        <span className='pr-2'>Cart</span>
        <span className='flex items-center relative'>
          <FaShoppingCart className='h-[2rem] -ml-2' />
          <span className='absolute top-[-10px] bottom-[-16px] bg-yel w-4 h-4 flex items-center justify-center rounded-full text-sm p-3'>
            {noOfItems}
          </span>
        </span>
      </Link>
      <button className='btn shadow-none hover:text-yel'>
        <span className='pr-2'>Login</span>

        <FiUserPlus />
      </button>
    </div>
  )
}
export default CartBtns
