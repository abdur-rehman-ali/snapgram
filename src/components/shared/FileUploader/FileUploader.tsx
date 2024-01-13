import { useCallback, useState } from 'react'
import { useDropzone, FileWithPath } from 'react-dropzone'
import ImageBox from './ImageBox'
import ImageBoxContainer from './ImageBoxContainer'

type FileUploaderProps = {
  fieldChange: (files: File[]) => void;
};

const FileUploader = ({ fieldChange }: FileUploaderProps) => {
  const [fileURL, setFileURL] = useState('')

  const onDrop = useCallback((acceptedFiles: FileWithPath[]) => {
    setFileURL(URL.createObjectURL(acceptedFiles[0]));
    fieldChange(acceptedFiles)
  }, [])

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".png", ".jpeg", ".jpg"],
    },
  })

  return (
    <div {...getRootProps()}
      className="flex flex-col flex-center bg-dark-3 rounded-xl cursor-pointer"
    >
      <input {...getInputProps()} />
      {
        fileURL ? <ImageBox imageURL={fileURL} /> : <ImageBoxContainer />
      }
    </div>
  )
}

export default FileUploader
