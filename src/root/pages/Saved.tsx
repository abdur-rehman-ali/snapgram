import ImageCard from "@/components/shared/Cards/common/ImageCard"
import PageHeader from "@/components/shared/Headers/PageHeader"
import { useGetCurrentUser } from "@/lib/react-query/queries"
import { Loader } from "lucide-react"

const Saved = () => {
  const { data: user, isPending } = useGetCurrentUser()

  return (
    <div>
      <PageHeader
        title="Saved Posts"
        headerIconUrl="/assets/icons/save.svg"
      />
      <div className="w-full flex flex-row flex-wrap justify-center gap-4 mt-10 max-sm:gap-2">
        {
          isPending ? (
            <Loader />
          ) : (
            user?.save?.map((saveRecord: { post: any }) => (
              <ImageCard key={saveRecord.post.$id} imageURL={saveRecord.post.imageURL} />
            )))
        }
      </div>
    </div>
  )
}

export default Saved
