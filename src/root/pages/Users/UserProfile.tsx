import { useParams } from "react-router-dom"

const UserProfile = () => {
  const { userID } = useParams()
  return (
    <div>
      <h1>User Profile {userID}</h1>
    </div>
  )
}

export default UserProfile
