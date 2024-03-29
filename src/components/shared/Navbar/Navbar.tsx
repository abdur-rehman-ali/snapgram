import { INITIAL_USER_VALUES, useUserContext } from "@/context/AuthProvider"
import { useDeleteUserSession } from "@/lib/react-query/mutations"
import { useNavigate } from "react-router-dom"

const Navbar = () => {
  const navigate = useNavigate()
  const { mutate: deleteUserSession } = useDeleteUserSession()
  const { setUser, setIsAuthenticated, user } = useUserContext()

  const handleDeleteUserSession = () => {
    deleteUserSession()
    setIsAuthenticated(false)
    setUser(INITIAL_USER_VALUES)
    navigate('/login')
  }

  return (
    <nav className="sticky top-0 z-10 flex bg-[#09090A] min-h-[8vh] w-full items-center justify-between px-6 md:hidden">
      <div>
        <img
          src="/assets/images/logo.svg"
          alt="Logo here"
        />
      </div>
      <div className="flex justify-between w-[15%] max-sm:w-[20%]">
        <div className="cursor-pointer">
          <img
            src={user.imageURL}
            alt="Profile image here"
            className="h-8 w-8 rounded-full"
          />
        </div>
        <div className="cursor-pointer" onClick={() => handleDeleteUserSession()}>
          <img
            src="/assets/icons/logout.svg"
            alt="Logout image here"
            className="h-8 w-8 rounded-full"
          />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
