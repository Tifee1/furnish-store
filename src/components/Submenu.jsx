import { useEffect } from 'react'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import useUserContext from '../context/usercontext'

const Submenu = () => {
  const LinkRef = useRef(null)
  const { location, link, isSubmenu } = useUserContext()

  useEffect(() => {
    const curr = LinkRef.current
    curr.style.top = `${location.bottom}px`
    curr.style.left = `${location.center}px`
  }, [location])

  return (
    <aside ref={LinkRef} className={isSubmenu ? 'submenu show' : 'submenu'}>
      <section>
        {link.map((c, index) => {
          return (
            <article key={index}>
              <Link to={c.link}>
                {c.icon}
                {c.name}
              </Link>
            </article>
          )
        })}
      </section>
    </aside>
  )
}
export default Submenu
