import Hero from '../components/Hero'
import AllProducts from '../components/products/AllProducts'
import FilterProducts from '../components/products/FilterProducts'
import Sort from '../components/products/Sort'

const Products = () => {
  return (
    <>
      <Hero title='products' />
      <section className='section-center gap-x-12 gap-y-6 grid tm:grid-cols-[200px,1fr] my-16 mx-auto'>
        <FilterProducts />
        <div>
          <Sort />
          <AllProducts />
        </div>
      </section>
    </>
  )
}
export default Products
