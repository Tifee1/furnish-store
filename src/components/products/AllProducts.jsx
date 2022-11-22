import useFilterContext from '../../context/filterContext'

const AllProducts = () => {
  const { filtered_products: products } = useFilterContext()

  if (products.length < 1) {
    return <h5>sorry no products matched your search</h5>
  }
  return <>hello</>
}
export default AllProducts
