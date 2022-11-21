import useProductContext from '../context/productContext'
import DisplayProducts from './products/DisplayProducts'

const FeaturedProducts = () => {
  const { featured } = useProductContext()
  return (
    <section className='section'>
      <h2 className='font-[800] text-center uppercase'>featured products</h2>
      <div className='underline'></div>
      <DisplayProducts products={featured.slice(0, 3)} />
    </section>
  )
}
export default FeaturedProducts
