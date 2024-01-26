import { useUserContext } from '@/context/AuthProvider'
import { useSavePost, useUpdateLikeOnPost } from '@/lib/react-query/mutations'
import { isPostLiked } from '@/lib/utils'
import { Models } from 'appwrite'

const PostStats = ({ post }: { post: Models.Document }) => {
  const { user } = useUserContext()
  const { mutate: likePost } = useUpdateLikeOnPost()
  const { mutate: savePost } = useSavePost()
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
      <img
        src={'/assets/icons/save.svg'}
        alt="save-image"
        className='cursor-pointer'
        width={20}
        height={20}
        onClick={() => savePost({ postID: post.$id, userID: user.id })}
      />
    </div>
  )
}

export default PostStats
