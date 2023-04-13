import { usePaystackPayment } from 'react-paystack'
import { formatPrice } from '../utils/helpers'
import { useNavigate } from 'react-router-dom'
import useCartContext from '../context/cartContext'
import useUserContext from '../context/usercontext'

const Paystack = () => {
  const { totalAmount, shippingFee, clearCart } = useCartContext()
  const { user, setRef } = useUserContext()
  const navigate = useNavigate()

  const config = {
    reference: new Date().getTime().toString(),
    email: user.email || user.name,
    amount: parseInt(totalAmount + shippingFee),
    publicKey: import.meta.env.VITE_PAYSTACK_TEST_PUBLIC,
  }

  const onSuccess = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    setRef(reference)
    clearCart()
    setTimeout(() => {
      navigate('/receipt')
    }, 2000)
  }

  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log('closed')
  }

  const PaystackComp = () => {
    const initializePayment = usePaystackPayment(config)
    return (
      <div>
        <button
          className='trans bg-yel w-full font-bold text-white py-2 uppercase tracking-widest text-xl hover:bg-yel/75'
          onClick={() => {
            initializePayment(onSuccess, onClose)
          }}
        >
          Pay
        </button>
      </div>
    )
  }
  return (
    <section>
      <article className='mb-4'>
        <h3 className='mb-4'>
          Hello,<span className='font-semibold'> {user && user.name} </span>
        </h3>
        <p className='mb-2'>
          Your total is{' '}
          <span className='font-semibold'>
            {formatPrice(totalAmount + shippingFee)}
          </span>
        </p>
        <p className='mb-2'>
          Test Card Number :{' '}
          <span className='font-semibold'>5078 5078 5078 5078 12</span>
        </p>
        <p className='mb-2'>
          Cvv: <span className='font-semibold'>081</span>
        </p>
        <p className='mb-2'>
          Pin: <span className='font-semibold'>1111</span>
        </p>
      </article>
      <PaystackComp />
    </section>
  )
}

export default Paystack
