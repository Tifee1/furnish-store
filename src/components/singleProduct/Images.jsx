import { useState } from 'react'

const Images = ({ images = [{ url: '' }] }) => {
  const [index, setIndex] = useState(0)

  return (
    <section className='mb-6'>
      <div className=' overflow-hidden'>
        <img
          src={images[index].url}
          alt='main'
          className='trans w-full h-[300px] im:h-[600px] md:h-[500px] rounded-md hover:scale-125'
        />
      </div>
      <div className='mt-8 grid grid-cols-5 gap-2'>
        {images.map((item, i) => {
          return (
            <img
              src={item.url}
              alt={item.id}
              key={i}
              className={`h-[50px] im:h-[100px] md:h-[75px] w-full rounded-md cursor-pointer ${
                i === index && 'border border-yel shadow-dark'
              }`}
              onClick={() => setIndex(i)}
            />
          )
        })}
      </div>
    </section>
  )
}
export default Images
