import { Navigate } from 'react-router-dom'
import useUserContext from '../context/usercontext'

const PrivateWrapper = ({ children }) => {
  const { isUser } = useUserContext()

  if (!isUser) {
    return <Navigate to='/' />
  }
  return <>{children}</>
}
export default PrivateWrapper
