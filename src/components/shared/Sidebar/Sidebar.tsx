import { sidebarLinks } from "@/constants"
import SidebarLink from "./SidebarLink"
import { useDeleteUserSession } from "@/lib/react-query/mutations"
import { useNavigate } from "react-router-dom"
import { INITIAL_USER_VALUES, useUserContext } from "@/context/AuthProvider"

const Sidebar = () => {
  const navigate = useNavigate()
  const { mutate: deleteUserSession } = useDeleteUserSession()
  const { user, setIsAuthenticated, setUser } = useUserContext()

  const handleDeleteUserSession = () => {
    deleteUserSession()
    setIsAuthenticated(false)
    setUser(INITIAL_USER_VALUES)
    navigate('/login')
  }

  return (
    <nav className="leftsidebar">
      <div className="flex flex-col gap-10 pl-6">
        <img
          src="/assets/images/logo.svg"
          alt="Logo here"
          width={170}
        />
        <div className="flex flex-row items-center gap-4">
          <img
            src={user.imageURL}
            alt="Profile"
            className="h-10 w-10 rounded-full"
          />
          <div className="flex flex-col">
            <p className="body-bold">{ user.name }</p>
            <p className="small-regular text-light-3">@{ user.username}</p>
          </div>
        </div>

        <ul className="flex flex-col gap-2">
          {
            sidebarLinks.map(link => <SidebarLink
              label={link.label}
              imgURL={link.imgURL}
              route={link.route}
              key={link.label}
            />)
          }
        </ul>
      </div>


      <div
        className="flex gap-4 items-center pl-10 cursor-pointer"
        onClick={() => handleDeleteUserSession()}
      >
        <img
          src="/assets/icons/logout.svg"
          alt="home"
        />
        Logout
      </div>

    </nav>
  )
}

export default Sidebar
