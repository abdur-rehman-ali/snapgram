import { bottomBarLinks } from "@/constants"
import { Link, useLocation } from "react-router-dom"

const Bottombar = () => {
  const { pathname } = useLocation()

  return (
    <nav className="bottom-bar">
      {
        bottomBarLinks.map(bottomBarLink => {
          const isActive = pathname === bottomBarLink.route
          return (
            <Link to={bottomBarLink.route} className={`bottom-bar-link ${isActive && 'bg-primary-500 '}`}>
              <img
                src={bottomBarLink.imgURL}
                alt="Home"
                className={`w-8 h-8 ${isActive && 'invert-white'} `}
              />
              <p className="tiny-medium text-light-2">{bottomBarLink.label}</p>
            </Link>
          )
        })
      }
    </nav>
  )
}

export default Bottombar
