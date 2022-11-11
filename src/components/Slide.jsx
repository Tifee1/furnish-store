import { Carousel } from 'react-responsive-carousel'
import Slide1 from '../assets/slide1.jpg'
import Slide2 from '../assets/slide2.jpg'
import Slide3 from '../assets/slide3.jpg'

const Slide = () => {
  const arr = [Slide1, Slide2, Slide3]

  return (
    <>
      <section className='flex justify-center items-center min-h-[calc(100vh-72px)] bg-blue-300 lg:hidden'>
        <h2>Furnish</h2>
      </section>
      <section className=' justify-center items-center hidden lg:flex'>
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          interval='10000'
          showStatus={false}
          animationHandler='fade'
          stopOnHover={false}
          transitionTime='3000'
          swipeable={false}
        >
          {arr.map((item, index) => {
            return (
              <div key={index} className='relative'>
                <img
                  src={item}
                  className='bg-center bg-cover bg-no-repeat min-h-[calc(100vh-72px)]'
                />
                <h2 className='absolute top-1/2'>Hello world</h2>
              </div>
            )
          })}
        </Carousel>
      </section>
    </>
  )
}
export default Slide
