import { FaHome, FaRegQuestionCircle } from 'react-icons/fa'
import { HiOutlineBookOpen } from 'react-icons/hi'
import { BsFillCreditCard2FrontFill } from 'react-icons/bs'
import { RiContactsFill, RiCustomerService2Line } from 'react-icons/ri'
import {
  MdOutlinePolicy,
  MdOutlineProductionQuantityLimits,
} from 'react-icons/md'

export const links = [
  { label: 'home', url: '/', icon: <FaHome /> },
  {
    label: 'pages',
    url: '/',
    icon: <FaHome />,
    items: [
      { name: 'about us', link: '/about', icon: <HiOutlineBookOpen /> },
      { name: 'contact', link: '/contact', icon: <RiContactsFill /> },
      { name: 'FAQ', link: '/faq', icon: <FaRegQuestionCircle /> },
      { name: 'privacy policy', link: '/privacy', icon: <MdOutlinePolicy /> },
    ],
  },
  { label: 'services', url: '/services', icon: <RiCustomerService2Line /> },
  {
    label: 'all products',
    url: '/products',
    icon: <MdOutlineProductionQuantityLimits />,
  },
  { label: 'checkout', url: '/checkout', icon: <BsFillCreditCard2FrontFill /> },
]
