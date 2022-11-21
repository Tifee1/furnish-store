import { formatPrice } from '../../utils/helpers'

const DisplayProducts = ({ products }) => {
  return (
    <section>
      {products.map((product) => {
        const { id, name, price, image } = product
        return (
          <article key={id}>
            <img src={image} alt={name} />
            <div>
              <h2>{name}</h2>
              <p>{formatPrice(price)}</p>
            </div>
          </article>
        )
      })}
    </section>
  )
}
export default DisplayProducts
