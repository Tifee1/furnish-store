import Choose from '../components/Choose'
import Discover from '../components/Discover'
import FeaturedProducts from '../components/FeaturedProducts'

import Slide from '../components/Slide'

const Home = () => {
  return (
    <main className='page'>
      <Slide />
      <Choose />
      <Discover />
      <FeaturedProducts />
    </main>
  )
}
export default Home
