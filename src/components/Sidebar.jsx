import { FaMinus, FaPlus, FaShoppingCart, FaTimes } from 'react-icons/fa'
import { links } from '../utils/constant'
import logo from '../assets/logo.png'
import { useState } from 'react'
import useUserContext from '../context/usercontext'
import { Link } from 'react-router-dom'
import { FiUserPlus } from 'react-icons/fi'
import CartBtns from './cart/CartBtns'
import { BsFillCreditCard2FrontFill } from 'react-icons/bs'

const Sidebar = () => {
  const { setIsSidebar, isSidebar, isUser } = useUserContext()
  const [click, setClick] = useState(false)

  return (
    <main className='md:hidden'>
      <aside className={`${isSidebar ? 'show-sidebar sidebar' : 'sidebar'}`}>
        <div className='px-6  py-4 flex justify-between items-center'>
          <img src={logo} alt='furnish' className='h-[50px]' />
          <button
            className='btn text-red-500 shadow-none text-5xl hover:text-red-800'
            onClick={() => setIsSidebar(false)}
          >
            <FaTimes />
          </button>
        </div>
        <ul>
          {links.map((z, index) => {
            // for pages

            if (z.label === 'pages') {
              return (
                <li
                  onClick={() => {
                    setClick(!click)
                  }}
                  key={index}
                >
                  <div className='trans capitalize text-xl flex justify-between'>
                    <div className='w-full px-6 py-2 '>
                      <span className='text-blue-900/60 pr-4 text-2xl'>
                        {z.icon}
                      </span>
                      <span className='tracking-widest'>{z.label}</span>
                    </div>
                    {click ? (
                      <button className='trans bg-black text-white border-l px-6 py-2 hover:bg-yel'>
                        <FaMinus />
                      </button>
                    ) : (
                      <button className='trans border-l px-6 py-2 hover:bg-yel'>
                        <FaPlus />
                      </button>
                    )}
                  </div>

                  {/* list pages links */}

                  {click && (
                    <section>
                      {z.items.map((t, index) => {
                        return (
                          <article key={index}>
                            <Link
                              onClick={() => setIsSidebar(false)}
                              to={t.link}
                              className='trans px-6 py-2 capitalize text-xl hover:bg-yel border block'
                            >
                              <span className='text-blue-900/60 pr-4 text-2xl'>
                                {t.icon}
                              </span>
                              <span className='tracking-widest'>{t.name}</span>
                            </Link>
                          </article>
                        )
                      })}
                    </section>
                  )}
                </li>
              )
            }

            //other links

            return (
              <li key={index}>
                <Link
                  to={z.url}
                  className='trans px-6 py-2 capitalize text-xl hover:bg-[#ffc107] border block'
                  onClick={() => setIsSidebar(false)}
                >
                  <span className='text-blue-900/60 pr-4 text-2xl'>
                    {z.icon}
                  </span>
                  <span className='tracking-widest'>{z.label}</span>
                </Link>
              </li>
            )
          })}
          {isUser && (
            <li>
              <Link
                to='/checkout'
                className='trans px-6 py-2 capitalize text-xl hover:bg-[#ffc107] border block'
                onClick={() => setIsSidebar(false)}
              >
                <span className='text-blue-900/60 pr-4 text-2xl'>
                  <BsFillCreditCard2FrontFill />
                </span>
                <span className='tracking-widest'>checkout</span>
              </Link>
            </li>
          )}
        </ul>
        <div className='my-12'>
          <CartBtns />
        </div>
      </aside>
    </main>
  )
}
export default Sidebar
