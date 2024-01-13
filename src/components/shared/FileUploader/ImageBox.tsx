type ImageBoxProps = { imageURL: string }

const ImageBox = ({ imageURL }: ImageBoxProps) => {
  return (
    <>
      <div className="flex flex-1 justify-center w-full p-5 lg:p-10">
        <img src={imageURL} alt="image" className="file_uploader-img" />
      </div>
      <p className="file_uploader-label">Click or drag photo to replace</p>
    </>
  )
}

export default ImageBox
