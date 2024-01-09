import { Link, useLocation } from "react-router-dom";

type ISidebarLink = {
  label: string,
  imgURL: string,
  route: string,
}

const SidebarLink = ({ label, route, imgURL }: ISidebarLink) => {
  const { pathname } = useLocation();
  const isActive = pathname === route;
  return (
    <li className={`leftsidebar-link w-full group ${isActive && `bg-primary-500`} `}>
      <Link to={`${route}`} className="flex gap-4 items-center p-4 ">
        <img
          src={imgURL}
          alt={label}
          className={isActive ? 'invert-white' : 'group-hover:invert-white'}
        />
        {label}
      </Link>
    </li>
  )
}

export default SidebarLink;
