import CreatePostForm from "@/components/forms/CreatePostForm"
import CreatePostHeader from "./CreatePostHeader"

const CreatePost = () => {
  return (
    <div className="w-full">
      <CreatePostHeader />
      <CreatePostForm />
    </div>
  )
}

export default CreatePost
