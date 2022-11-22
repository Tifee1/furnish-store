import { Link } from 'react-router-dom'
import { formatPrice } from '../../utils/helpers'

const ListView = ({ products }) => {
  return (
    <section className=''>
      {products.map((product) => {
        const { id, name, price, image, description } = product

        return (
          <article
            className='grid md:grid-cols-[auto_1fr] md:gap-8 items-center justify-center text-white p-2 mb-8 rounded-md'
            key={id}
          >
            <div className='overflow-hidden'>
              <img
                src={image}
                alt={name}
                className='trans w-[300px] h-[200px] object-cover rounded-md hover:scale-[1.5]'
              />
            </div>
            <div className='text-black'>
              <h2 className='font-bold mt-4'>{name}</h2>
              <h4 className='text-yel tracking-wider mt-2'>
                {formatPrice(price)}
              </h4>
              <p className='my-4'>{description.slice(0, 145)}...</p>
              <Link
                to={`/product/${id}`}
                className='trans bg-yel uppercase text-white p-1 rounded-md hover:bg-black tracking-wider'
              >
                details
              </Link>
            </div>
          </article>
        )
      })}
    </section>
  )
}
export default ListView
