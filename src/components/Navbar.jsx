import logo from '../assets/logo.png'
import { FaBars, FaShoppingCart } from 'react-icons/fa'
import { FiUserPlus } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import useUserContext from '../context/usercontext'
import { links } from '../utils/constant'
import CartBtns from './cart/CartBtns'

const Navbar = () => {
  const { setIsSidebar, openSubmenu, isUser } = useUserContext()

  // const displaySubmenu = (e) => {
  //   const text = e.currentTarget.textContent
  //   const temp = e.currentTarget.getBoundingClientRect()
  //   const center = (temp.left + temp.right) / 2
  //   const bottom = temp.bottom - 6
  //   openSubmenu(center, bottom, text)
  // }

  return (
    <nav className='w-full flex justify-between items-center p-6 mt-6 md:container md:max-w-7xl mx-auto'>
      <Link to='/'>
        <img src={logo} alt='furnish' className='h-[40px] xl:h-[75px]' />
      </Link>
      <button
        className='md:hidden btn text-3xl text-pry-100 hover:text-pry-500/70 hover:scale-150 shadow-none'
        onClick={() => setIsSidebar(true)}
      >
        <FaBars />
      </button>
      <ul className='hidden md:flex md:justify-between md:items-center'>
        {links.map((item, index) => {
          if (item.label === 'pages') {
            return (
              <li
                // onMouseOver={() => {
                //   displaySubmenu()
                // }}
                key={index}
                className='trans uppercase px-3 text-lg font-bold tracking-widest hover:text-yel'
              >
                <button className='page-nav uppercase'>{item.label}</button>
              </li>
            )
          }

          return (
            <li
              key={index}
              className='trans uppercase px-3 text-lg font-bold tracking-widest hover:text-yel'
            >
              <Link to={item.url}>{item.label}</Link>
            </li>
          )
        })}
        {isUser && (
          <li className='trans uppercase px-3 text-lg font-bold tracking-widest hover:text-yel'>
            <Link to='/checkout'>checkout</Link>
          </li>
        )}
      </ul>
      <div className='hidden md:block'>
        <CartBtns />
      </div>
    </nav>
  )
}
export default Navbar
