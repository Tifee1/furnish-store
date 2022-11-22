import DisplayProducts from './DisplayProducts'

const GridView = ({ products }) => {
  return (
    <section className='grid gap-x-8 gap-y-6 md:grid-cols-2 xl:grid-cols-3'>
      {products.map((product) => {
        return <DisplayProducts key={product.id} {...product} />
      })}
    </section>
  )
}
export default GridView
