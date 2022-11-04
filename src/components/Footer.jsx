import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-[#333333] py-8 text-center text-grey tracking-widest'>
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
        <a href='https://linkedin.com/tifee1' className='trans hover:text-yel'>
          <FaLinkedin />
        </a>
      </div>
    </footer>
  )
}
export default Footer
