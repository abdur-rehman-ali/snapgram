import { Link, useLocation } from "react-router-dom"

type IBottomBarLink = {
  route: string,
  imgURL: string,
  label: string,
}

const BottombarLink = ({ route, imgURL, label }: IBottomBarLink) => {
  const { pathname } = useLocation()
  const isActive = pathname === route
  return (
    <Link to={route} className={`bottom-bar-link ${isActive && 'bg-primary-500 '}`}>
      <img
        src={imgURL}
        alt="Home"
        className={`w-8 h-8 ${isActive && 'invert-white'} `}
      />
      <p className="tiny-medium text-light-2">{label}</p>
    </Link>
  )
}

export default BottombarLink
