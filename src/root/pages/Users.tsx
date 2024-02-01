import UserCard from "@/components/shared/Cards/users/UserCard"
import PageHeader from "@/components/shared/Headers/PageHeader"
import { useGetAllUsers } from "@/lib/react-query/queries"
import { Loader } from "lucide-react"

const Users = () => {
  const { data: allUsers, isPending } = useGetAllUsers()

  if (isPending) {
    return <Loader />
  }

  return (
    <div>
      <PageHeader title="All Users" headerIconUrl="/assets/icons/people.svg" />
      <div className="pt-10 flex flex-wrap gap-4">
        {
          allUsers && allUsers.documents.map((user) => (
            <UserCard user={ user} />
          ))
        }
      </div>
    </div>
  )
}

export default Users
