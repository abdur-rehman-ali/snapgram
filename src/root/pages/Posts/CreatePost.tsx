import CreatePostForm from "@/components/forms/CreatePostForm"
import PostFormHeader from "@/components/shared/Headers/PostFormHeader"

const CreatePost = () => {
  return (
    <div className="w-full">
      <PostFormHeader title="Create new post" />
      <CreatePostForm />
    </div>
  )
}

export default CreatePost
