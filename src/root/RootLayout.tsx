import Bottombar from "@/components/shared/Bottombar/Bottombar"
import Navbar from "@/components/shared/Navbar/Navbar"
import Sidebar from "@/components/shared/Sidebar/Sidebar"
import { Outlet } from "react-router-dom"

const RootLayout = () => {
  return (
    <section className="w-full md:flex">
      <Sidebar />
      <Navbar />
      <section className="flex flex-1 h-full">
        <Outlet />
      </section>
      <Bottombar />
    </section>
  )
}

export default RootLayout
