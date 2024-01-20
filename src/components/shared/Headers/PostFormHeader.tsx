type PostFormHeaderProps = {
  title: string
}

const PostFormHeader = ({ title }: PostFormHeaderProps) => {
  return (
    <div className="flex gap-3 items-center">
      <img
        src="/assets/icons/gallery-add.svg"
        alt="add-post-image-here"
        className="w-10 h-10 max-sm:w-8 max-sm:h-8"
      />
      <h1 className="text-4xl font-extrabold max-sm:text-2xl">{title}</h1>
    </div>
  )
}

export default PostFormHeader
