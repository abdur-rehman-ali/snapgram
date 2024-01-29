import CreatePostForm from "@/components/forms/CreatePostForm"
import PageHeader from "@/components/shared/Headers/PageHeader"
import { useGetSinglePost } from "@/lib/react-query/queries"
import { Loader } from "lucide-react"
import { useParams } from "react-router-dom"

const EditPost = () => {
  const { postID } = useParams()
  const { data: post, isPending } = useGetSinglePost(postID || "")

  if (isPending) {
    return (
      <div className="w-full flex justify-center">
        <Loader />
      </div>
    )
  }

  return (
    <div className="w-full">
      <PageHeader title="Edit post" headerIconUrl="/assets/icons/gallery-add.svg" />
      <CreatePostForm post={post} />
    </div>
  )
}

export default EditPost
