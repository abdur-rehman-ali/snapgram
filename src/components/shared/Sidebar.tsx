const Sidebar = () => {
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
          <li className="leftsidebar-link w-full group">
            <a href="" className="flex gap-4 items-center p-4 ">
              <img
                src="/assets/icons/home.svg"
                alt="home"
                className="group-hover:invert-white"
              />
              Home
            </a>
          </li>
          <li className="leftsidebar-link w-full group">
            <a href="" className="flex gap-4 items-center p-4">
              <img
                src="/assets/icons/home.svg"
                alt="home"
                className="group-hover:invert-white"
              />
              Home
            </a>
          </li>
        </ul>
      </div>


      <a href="" className="flex gap-4 items-center pl-10">
        <img
          src="/assets/icons/logout.svg"
          alt="home"
        />
        Logout
      </a>

    </nav>
  )
}

export default Sidebar