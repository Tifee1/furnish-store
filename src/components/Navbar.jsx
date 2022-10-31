import logo from '../assets/logo.png'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import useAppContext from '../context/appcontext'

const Navbar = () => {
  const { setIsSidebar } = useAppContext()
  return (
    <nav className='w-full flex justify-between p-6 mt-6'>
      <Link to='/'>
        <img src={logo} alt='furnish' className='h-[40px]' />
      </Link>
      <button
        className='btn text-3xl text-pry-100 hover:text-pry-500/70 hover:scale-150 shadow-none'
        onClick={() => setIsSidebar(true)}
      >
        <FaBars />
      </button>
    </nav>
  )
}
export default Navbar
