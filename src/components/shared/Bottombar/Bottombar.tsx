import { bottomBarLinks } from "@/constants"
import BottombarLink from "./BottombarLink"

const Bottombar = () => {
  return (
    <nav className="bottom-bar">
      {
        bottomBarLinks.map(bottomBarLink => <BottombarLink
          route={bottomBarLink.route}
          imgURL={bottomBarLink.imgURL}
          label={bottomBarLink.label}
          key={bottomBarLink.label}
        />)
      }
    </nav>
  )
}

export default Bottombar
