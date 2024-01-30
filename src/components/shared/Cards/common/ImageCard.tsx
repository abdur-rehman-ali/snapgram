type ImageCardProps = {
  imageURL: string
}

const ImageCard = ({ imageURL }: ImageCardProps) => {
  return (
    <img
      src={imageURL}
      alt="image here"
      className="h-64 w-60 rounded-[10px] object-cover max-sm:h-56 max-sm:w-48"
    />
  )
}

export default ImageCard
