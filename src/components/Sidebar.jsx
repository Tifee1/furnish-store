import { FaPlus, FaTimes } from 'react-icons/fa'
import { links } from '../utils'
import logo from '../assets/logo.png'
import { useState } from 'react'

const Sidebar = () => {
  const [click, setClick] = useState(false)

  return (
    <aside className='sidebar show-sidebar'>
      <div className='px-6  py-4 flex justify-between items-center'>
        <img src={logo} alt='furnish' className='h-[50px]' />
        <button className='btn text-red-500 shadow-none text-5xl hover:text-red-800'>
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
                <div className='trans capitalize text-xl flex justify-between bg-blue-500'>
                  <div className='w-full px-6 py-4 '>
                    <span className='text-blue-900/60 pr-4 text-2xl'>
                      {z.icon}
                    </span>
                    <span className='tracking-widest'>{z.label}</span>
                  </div>
                  <button className='trans border-l px-6 py-4 hover:bg-[#ffc107]'>
                    <FaPlus />
                  </button>
                </div>

                {/* list pages links */}

                {click && (
                  <section>
                    {z.items.map((t, index) => {
                      return (
                        <article key={index}>
                          <a
                            href={z.url}
                            className='trans px-6 py-4 capitalize text-xl hover:bg-[#ffc107] border block'
                          >
                            <span className='text-blue-900/60 pr-4 text-2xl'>
                              {t.icon}
                            </span>
                            <span className='tracking-widest'>{t.name}</span>
                          </a>
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
              <a
                href={z.url}
                className='trans px-6 py-4 capitalize text-xl hover:bg-[#ffc107] border block'
              >
                <span className='text-blue-900/60 pr-4 text-2xl'>{z.icon}</span>
                <span className='tracking-widest'>{z.label}</span>
              </a>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}
export default Sidebar
