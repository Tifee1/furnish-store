import { FaHome, FaRegQuestionCircle, FaAward } from 'react-icons/fa'
import { HiOutlineBookOpen, HiOutlineBriefcase } from 'react-icons/hi'
import { BsFillCreditCard2FrontFill } from 'react-icons/bs'
import { SlDiamond, SlWallet } from 'react-icons/sl'
import {
  RiContactsFill,
  RiCustomerService2Line,
  RiPagesLine,
  RiExchangeDollarFill,
  RiTeamFill,
} from 'react-icons/ri'
import {
  MdOutlinePolicy,
  MdOutlineProductionQuantityLimits,
} from 'react-icons/md'

export const links = [
  { label: 'home', url: '/', icon: <FaHome /> },
  {
    label: 'pages',
    url: '/',
    icon: <RiPagesLine />,
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

export const chooseUs = [
  {
    label: 'best quality',
    icon: <SlDiamond />,
    text: 'Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo.',
  },
  {
    label: 'experienced',
    icon: <HiOutlineBriefcase />,
    text: 'Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo.',
  },
  {
    label: 'expert team',
    icon: <RiTeamFill />,
    text: 'Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo.',
  },
  {
    label: 'affordable services',
    icon: <SlWallet />,
    text: 'Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo.',
  },
  {
    label: '90 days guaranteed',
    icon: <RiExchangeDollarFill />,
    text: 'Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo.',
  },
  {
    label: 'award winning',
    icon: <FaAward />,
    text: 'Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo.',
  },
]
