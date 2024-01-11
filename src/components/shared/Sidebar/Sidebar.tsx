import { sidebarLinks } from "@/constants"
import SidebarLink from "./SidebarLink"
import { useDeleteUserSession } from "@/lib/react-query/mutations"
import { useNavigate } from "react-router-dom"

const Sidebar = () => {
  const navigate = useNavigate()
  const { mutate: deleteUserSession } = useDeleteUserSession()

  const handleDeleteUserSession = async () => {
    deleteUserSession()
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
            src="/assets/images/profile.png"
            alt="Profile"
            className="h-14 w-14 rounded-full"
          />
          <div className="flex flex-col">
            <p className="body-bold">Name</p>
            <p className="small-regular text-light-3">@Username</p>
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
