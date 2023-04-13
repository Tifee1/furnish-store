import { Navigate } from 'react-router-dom'
import Hero from '../components/Hero'
import useUserContext from '../context/usercontext'

const Receipt = () => {
  document.title = 'Comfy Sloth || RECEIPT'
  const { ref } = useUserContext()

  if (Object.keys(ref).length === 0) {
    return <Navigate to='/' />
  }
  return (
    <main>
      <Hero title='receipt' />
      <main className='section-center page py-20'>
        <p className='capitalize'>
          your order was successful with reference number:
          <span className='text-yel font-semibold'> {ref.reference}</span> and
          transaction number:{' '}
          <span className='text-yel font-semibold'>{ref.trans}</span>
          <br />
          <br />
          your order will be delivered within{' '}
          <span className='text-yel font-semibold'>12days</span>.
        </p>
      </main>
    </main>
  )
}

export default Receipt
