import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useProductContext from '../context/productContext'
import Hero from '../components/Hero'

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

  console.log(product)

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
    </>
  )
}
export default SingleProduct
