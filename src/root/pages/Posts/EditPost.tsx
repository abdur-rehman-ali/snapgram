import CreatePostForm from "@/components/forms/CreatePostForm"
import PostFormHeader from "@/components/shared/Headers/PostFormHeader"
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
      <PostFormHeader title="Edit post" />
      <CreatePostForm post={post} />
    </div>
  )
}

export default EditPost
