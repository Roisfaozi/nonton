import Link from 'next/link'
import { withRouter } from 'next/router'
import { useEffect, useRef } from 'react'
import logo from '../../assets/tmovie.png'

const navigation = [
  {
    display: 'Home',
    path: '/',
  },
  {
    display: 'Movies',
    path: '/movie',
  },
  {
    display: 'TV Series',
    path: '/tv',
  },
]

function Header({ router }) {
  const { pathname } = router
  const headerRef = useRef(null)

  const active = navigation.findIndex((e) => e.path === pathname)
  useEffect(() => {
    const shrinkHeader = () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add('shrink')
      } else {
        headerRef.current.classList.remove('shrink')
      }
    }
    window.addEventListener('scroll', shrinkHeader)
    return () => {
      window.removeEventListener('scroll', shrinkHeader)
    }
  }, [])

  return (
    <div ref={headerRef} className='header'>
      <div className='header_wrap container'>
        <div className='logo'>
          <img src={logo.src} alt='' />
          <Link href='/'>
            <a>Nonton</a>
          </Link>
        </div>
        <ul className='header_nav'>
          {navigation.map((e, i) => (
            <li key={i} className={`${i === active ? 'active' : ''}`}>
              <Link href={e.path}>
                <a>{e.display}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default withRouter(Header)
