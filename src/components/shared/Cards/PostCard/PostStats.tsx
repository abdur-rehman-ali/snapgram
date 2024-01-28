import { useUserContext } from '@/context/AuthProvider'
import { useSavePost, useUnSavePost, useUpdateLikeOnPost } from '@/lib/react-query/mutations'
import { isPostLiked, isPostSavedByCurrentUser } from '@/lib/utils'
import { Models } from 'appwrite'
import { useGetCurrentUser } from '@/lib/react-query/queries'
import { useEffect, useState } from 'react'

const PostStats = ({ post }: { post: Models.Document }) => {
  const { user } = useUserContext()
  const [isPostSaved, setIsPostSaved] = useState(false)
  const { mutate: likePost } = useUpdateLikeOnPost()
  const { data: currentUser } = useGetCurrentUser()
  const { mutate: savePost } = useSavePost()
  const { mutate: unSaveUserPost } = useUnSavePost()

  const handleSavePost = () => {
    savePost({ postID: post.$id, userID: user.id })
    setIsPostSaved(true)
  }

  const handleUnSavePost = () => {
    unSaveUserPost({ userID: user.id, postID: post.$id })
    setIsPostSaved(false)
  }

  useEffect(() => {
    setIsPostSaved(isPostSavedByCurrentUser(currentUser, post))
  }, [currentUser])

  return (
    <div className='flex justify-between'>
      <img
        src={`${isPostLiked(post, user.id) ?
          '/assets/icons/liked.svg' :
          '/assets/icons/like.svg'}`
        }
        alt="like-image"
        className='cursor-pointer'
        width={20}
        height={20}
        onClick={() => likePost({ postID: post.$id, userID: user.id })}
      />
      {
        isPostSaved ? (
          <img
            src={'/assets/icons/saved.svg'}
            alt="save-image"
            className='cursor-pointer'
            width={20}
            height={20}
            onClick={handleUnSavePost}
          />
        ) : (
          <img
            src={'/assets/icons/save.svg'}
            alt="save-image"
            className='cursor-pointer'
            width={20}
            height={20}
            onClick={handleSavePost}
          />
        )
      }
    </div>
  )
}

export default PostStats
