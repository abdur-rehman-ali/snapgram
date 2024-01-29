import CreatePostForm from "@/components/forms/CreatePostForm"
import PageHeader from "@/components/shared/Headers/PageHeader"

const CreatePost = () => {
  return (
    <div className="w-full">
      <PageHeader title="Create new post" headerIconUrl="/assets/icons/gallery-add.svg" />
      <CreatePostForm />
    </div>
  )
}

export default CreatePost
