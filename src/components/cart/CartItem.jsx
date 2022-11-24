import { FaMinus, FaPlus, FaTrash } from 'react-icons/fa'
import useCartContext from '../../context/cartContext'
import { formatPrice } from '../../utils/helpers'

const CartItem = (product) => {
  const { toggleAmount, removeItem } = useCartContext()
  const { name, id, price, image, amount, stock, color, shipping } = product

  const increase = () => {
    let real = amount + 1
    if (real > stock) {
      real = stock
    }
    return real
  }
  const decrease = () => {
    let real = amount - 1
    if (real < 1) {
      real = 1
    }
    return real
  }
  return (
    <article className='grid grid-cols-[200px_auto_auto] grid-rows-[75px] place-items-center gap-x-12 gap-y-4 mb-12'>
      <div className='grid grid-cols-[75px_125px] grid-rows-[75px] items-center gap-x-4 tracking-widest'>
        {/* Image */}
        <img src={image} alt={name} className='h-full w-full rounded-md' />

        {/* Info */}
        <div>
          <h5 className='capitalize font-semibold'>{name}</h5>
          <p className='flex justify-start items-center capitalize text-black/70'>
            color :{' '}
            <span
              className='w-2 h-2 rounded-full ml-2 flex'
              style={{ background: color, opacity: '0.6' }}
            ></span>
          </p>
          {shipping && <p className='text-black/70'>Free Shipping</p>}
          <p className='text-yel'>{formatPrice(price)}</p>
        </div>
      </div>

      {/* Amount Btns */}
      <div className='w-[75px] grid grid-cols-3 place-items-center font-semibold '>
        <button
          className='text-base w-4 h-2 flex items-center justify-center text-[0.75rem]'
          onClick={() => toggleAmount(id, 'dec', stock)}
        >
          <FaMinus />
        </button>
        <span className='text-[1rem]'>{amount}</span>
        <button
          className='text-base w-4 h-2 flex items-center justify-center text-[0.75rem]'
          onClick={() => toggleAmount(id, 'inc', stock)}
        >
          <FaPlus />
        </button>
      </div>

      {/* Delete Btn  */}
      <div>
        <button
          className='bg-red-700 text-white w-6 h-6 text-[0.75rem] flex items-center justify-center rounded-md'
          onClick={() => removeItem(id)}
        >
          <FaTrash />
        </button>
      </div>
    </article>
  )
}
export default CartItem
