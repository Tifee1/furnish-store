import Loading from '../components/Loading'
import useUserContext from '../context/usercontext'

const AuthWrapper = ({ children }) => {
  const { isLoading } = useUserContext()

  if (isLoading) {
    return <Loading />
  }
  return <>{children}</>
}
export default AuthWrapper
