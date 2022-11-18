import Hero from '../components/Hero'
import { services } from '../utils'

const Services = () => {
  return (
    <>
      <Hero title='services' />
      <section className='py-12 px-6'>
        <h2 className='font-bold text-center'>our services</h2>
        <div className='underline'></div>
        <div className='grid tm:grid-cols-3 tm:gap-8 mt-12'>
          {services.map((item, index) => {
            return (
              <div
                key={index}
                className='service relative mb-8 overflow-hidden'
              >
                <img src={item.img} alt={item.label} className='trans img' />
                <h2 className='h2 text-3xl w-full max-w-[500px] absolute bottom-0 bg-black/50 text-white text-center py-4 font-black tracking-widest'>
                  {item.label}
                </h2>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}
export default Services
