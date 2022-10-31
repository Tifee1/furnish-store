import logo from '../assets/logo.png'
import { FaBars, FaShoppingCart } from 'react-icons/fa'
import { FiUserPlus } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import useAppContext from '../context/appcontext'
import { links } from '../utils'

const Navbar = () => {
  const { setIsSidebar } = useAppContext()
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
          return (
            <li
              key={index}
              className='trans uppercase px-3 text-xl font-bold tracking-widest hover:text-yel'
            >
              <Link to={item.url}>{item.label}</Link>
            </li>
          )
        })}
      </ul>
      <div className='hidden md:flex md:justify-between md:items-center text-pry-100 text-4xl'>
        <button className='btn shadow-none hover:text-yel pr-4'>
          <FaShoppingCart />
        </button>
        <button className='btn shadow-none hover:text-yel pr-4'>
          <FiUserPlus />
        </button>
      </div>
    </nav>
  )
}
export default Navbar
