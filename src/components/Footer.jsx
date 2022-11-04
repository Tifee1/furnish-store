import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <div className='bg-[#111111] text-slate-50'>
        <section className='w-[90vw] max-w-[500px] tm:max-w-6xl mx-auto  px-4 pt-20 grid tm:grid-cols-3 gap-10'>
          <article className='pb-16'>
            <h3 className='uppercase tracking-widest pb-2'>furnish</h3>
            <div className='bg-yel h-1 w-[50px]'></div>
            <p className='text-slate-400 pt-2'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ex
              ut amet perspiciatis pariatur rerum quos laborum, quia nobis dolor
              eveniet quis reiciendis est inventore repudiandae perferendis
              quae, assumenda blanditiis nam, totam quisquam esse! Sit!
            </p>
          </article>
          <article className='pb-16'>
            <h3 className='uppercase tracking-widest pb-2'>additional links</h3>
            <div className='bg-yel h-1 w-[50px]'></div>
            <ul className='text-slate-400 pt-2 capitalize text-xl'>
              <li className='trans hover:text-yel pb-[1.2rem]'>
                &gt; <Link to='/about'>about us</Link>
              </li>
              <li className='trans hover:text-yel pb-[1.2rem]'>
                &gt; <Link to='/privacy'>privacy</Link>
              </li>
              <li className='trans hover:text-yel pb-[1.2rem]'>
                &gt; <Link to='/contact'>contact</Link>
              </li>
              <li className='trans hover:text-yel pb-[1.2rem]'>
                &gt; <Link to='/faq'>FAQ</Link>
              </li>
            </ul>
          </article>
          <article className='pb-16 w-1/2 max-w-[300px]'>
            <h3 className='uppercase tracking-widest pb-2'>contact us</h3>
            <div className='bg-yel h-1 w-[50px]'></div>
            <p className='text-slate-400 pt-2'>
              {' '}
              123, Bay Area, Southern California, California
            </p>
            <p className='text-slate-400 pt-2'>+2349023873658</p>
            <form
              action='https://formspree.io/f/mgeqpbny'
              method='POST'
              className='grid grid-cols-[1fr_auto] pt-2'
            >
              <input
                type='email'
                name='email'
                className='px-1 py-2 text-pry-500'
              />

              <button type='submit' className='bg-yel px-2 text-xl'>
                <MdEmail />
              </button>
            </form>
          </article>
        </section>
      </div>

      {/* copyright */}
      <section className='bg-[#333333] py-8 text-center text-grey tracking-widest'>
        <h3>
          Furnish by{' '}
          <a href='https://github.com/tifee1' className='text-yel underline'>
            TIFEE
          </a>{' '}
          &copy; {new Date().getFullYear()}
        </h3>
        <h4 className='my-8'>all rights reserved</h4>
        <div className=' flex justify-center items-center gap-3 text-xl '>
          <a href='https://facebook.com/tifee' className='trans hover:text-yel'>
            <FaFacebook />
          </a>
          <a href='https://twitter.com/tifee1' className='trans hover:text-yel'>
            <FaTwitter />
          </a>
          <a
            href='https://instagram.com/mi_larey'
            className='trans hover:text-yel'
          >
            <FaInstagram />
          </a>
          <a
            href='https://linkedin.com/tifee1'
            className='trans hover:text-yel'
          >
            <FaLinkedin />
          </a>
        </div>
      </section>
    </footer>
  )
}
export default Footer
