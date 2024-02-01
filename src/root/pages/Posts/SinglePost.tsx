import SinglePostCard from "@/components/shared/Cards/PostCard/SinglePostCard"
import { useGetSinglePost } from "@/lib/react-query/queries"
import { Loader } from "lucide-react"
import { useParams } from "react-router-dom"

const SinglePost = () => {
  const { postID } = useParams()
  if (!postID) return

  const { data: post, isPending } = useGetSinglePost(postID)

  if (isPending) {
    return <Loader />
  }

  return (
    <>
      {post && <SinglePostCard post={post} />}
    </>
  )
}

export default SinglePost
