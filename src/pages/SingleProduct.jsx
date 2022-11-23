import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import useProductContext from '../context/productContext'
import Hero from '../components/Hero'
import Images from '../components/singleProduct/Images'
import Stars from '../components/singleProduct/Stars'
import AddToCart from '../components/singleProduct/AddToCart'
import { formatPrice } from '../utils/helpers'

const SingleProduct = () => {
  const {
    fetchSingleProduct,
    singleProduct: product,
    singleLoading,
  } = useProductContext()
  const { id } = useParams()

  useEffect(() => {
    fetchSingleProduct(id)
  }, [id])

  const {
    images,
    name,
    price,
    description,
    stock,
    company,
    shipping,
    reviews,
    stars,
  } = product

  if (singleLoading) {
    return (
      <section className='mb-12'>
        <div className='loading'></div>
      </section>
    )
  }

  return (
    <>
      <Hero title='products' subtitle={product.name} />
      <main className='section-center py-20'>
        <Link
          to='/products'
          className='trans bg-yel px-3 py-2 uppercase text-base text-white tracking-wider rounded-md hover:bg-black'
        >
          back to products
        </Link>
        <div className='md:grid md:grid-cols-2 md:gap-16 md:items-center my-12'>
          <Images images={images} />
          <section>
            <h2 className='tracking-wider font-bold'>{name}</h2>
            <Stars stars={stars} reviews={reviews} />
            <h3 className='text-yel tracking-wide mb-4'>
              {formatPrice(price)}
            </h3>
            <p className='text-black/70 mb-4'>{description}</p>

            <p className='mb-6 w-[300px] grid grid-cols-[125px_1fr] capitalize'>
              <span className='font-semibold'> Available : </span>
              {stock < 1 ? 'out of stock' : `in stock (${stock} units)`}
            </p>
            <p className='mb-6 w-[300px] grid grid-cols-[125px_1fr] capitalize'>
              <span className='font-semibold'> SKU : </span>
              {id}
            </p>
            <p className='mb-6 w-[300px] grid grid-cols-[125px_1fr] capitalize'>
              <span className='font-semibold'>Brand : </span>
              {company}
            </p>
            <p className='mb-6 w-[300px] grid grid-cols-[125px_1fr] capitalize'>
              <span className='font-semibold'>Free Shipping : </span>
              {shipping ? 'Yes' : 'no'}
            </p>
            <hr className='border-black/20' />
            {stock > 0 && <AddToCart product={product} />}
          </section>
        </div>
      </main>
    </>
  )
}
export default SingleProduct
