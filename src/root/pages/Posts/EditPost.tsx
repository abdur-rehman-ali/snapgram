import PostFormHeader from "@/components/shared/Headers/PostFormHeader"
import { useParams } from "react-router-dom"

const EditPost = () => {
  const { postID } = useParams()
  return (
    <div className="w-full">
      <PostFormHeader title="Edit post" />
      <span>{postID}</span>
    </div>
  )
}

export default EditPost
