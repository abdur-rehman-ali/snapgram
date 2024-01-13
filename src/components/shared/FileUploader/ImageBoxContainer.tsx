import { Button } from '@/components/ui/button'

const ImageBoxContainer = () => {
  return (
    <div className='file_uploader-box'>
      <img
        src="/assets/icons/file-upload.svg"
        alt="uploader-logo"
      />
      <h1 className='text-light-2 my-2'>Drag image here</h1>
      <Button
        type='button'
        className='shad-button_dark_4'
      >
        Browser from computer
      </Button>
    </div>
  )
}

export default ImageBoxContainer
