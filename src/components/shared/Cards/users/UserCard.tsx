import { Models } from "appwrite"

const UserCard = ({ user }: { user: Models.Document }) => {
  return (
    <div className="user-card w-1/4 max-sm:w-full">
      <img
        src={user.imageURL ||
          "/assets/images/profile.png"}
        alt="Profile Image"
        className="w-14 h-14 lg:w-20 lg:h-20 rounded-full object-cover"
      />
      <h1>{user.name}</h1>
      <span className="text-[#7878A3]">@{user.username}</span>
    </div>
  )
}

export default UserCard
