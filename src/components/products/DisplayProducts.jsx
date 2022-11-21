import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import useProductContext from '../../context/productContext'
import { formatPrice } from '../../utils/helpers'

const DisplayProducts = ({ products }) => {
  const { loading, error } = useProductContext()

  if (loading) {
    return <div className='loading'></div>
  }

  if (error) {
    return <h2>oops,there was an error</h2>
  }

  return (
    <section className='grid tm:grid-cols-2 xl:grid-cols-3 tm:gap-8'>
      {products.map((product) => {
        const { id, name, price, image } = product
        return (
          <article
            key={id}
            className='product bg-black text-white p-2 mb-8 rounded-md'
          >
            <div className='relative overflow-hidden'>
              <img
                src={image}
                alt={name}
                className='trans h-[225px] w-full rounded-md'
              />
              <Link
                to={`/products/${id}`}
                className='link absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yel rounded-full w-[2.5rem] h-[2.5rem] flex items-center justify-center text-[1.25rem] opacity-0'
              >
                <FaSearch />
              </Link>
            </div>
            <div className='flex justify-between items-center px-4 py-4 tracking-wider'>
              <h4>{name}</h4>
              <h4 className='text-yel'>{formatPrice(price)}</h4>
            </div>
          </article>
        )
      })}
    </section>
  )
}
export default DisplayProducts
