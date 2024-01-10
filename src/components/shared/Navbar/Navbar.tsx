const Navbar = () => {
  return (
    <nav className="sticky top-0 z-10 flex bg-[#09090A] min-h-[8vh] w-full items-center justify-between px-6 md:hidden">
      <div>
        <img
          src="/assets/images/logo.svg"
          alt="Logo here"
        />
      </div>
      <div className="flex justify-between w-[15%] max-sm:w-[20%]">
        <div>
          <img
            src="/assets/icons/profile-placeholder.svg"
            alt="Profile image here"
            className="h-8 w-8 rounded-full"
          />
        </div>
        <div>
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
