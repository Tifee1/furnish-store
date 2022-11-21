import { Link } from 'react-router-dom'
import useProductContext from '../context/productContext'
import DisplayProducts from './products/DisplayProducts'

const FeaturedProducts = () => {
  const { featured } = useProductContext()

  return (
    <section className='py-20 grid items-center'>
      <h2 className='font-[800] text-center uppercase'>featured products</h2>
      <div className='underline'></div>
      <div className='px-8 py-16'>
        <DisplayProducts products={featured.slice(0, 3)} />
        <Link
          to='/products'
          className='trans w-[200px] text-center block mx-auto bg-yel text-white uppercase px-6 py-3 rounded-lg tracking-widest hover:bg-black mt-4'
        >
          all products
        </Link>
      </div>
    </section>
  )
}
export default FeaturedProducts
