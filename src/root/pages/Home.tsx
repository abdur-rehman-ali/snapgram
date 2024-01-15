import PostCard from "@/components/shared/Cards/PostCard/PostCard"
import Loader from "@/components/shared/Loader"
import { useGetPosts } from "@/lib/react-query/queries"

const Home = () => {
  const { data: posts, isPending, isError, error } = useGetPosts()

  return (
    <div className="home-posts">
      <h1 className="h3-bold md:h2-bold text-left w-full">Home Feed</h1>
      {
        isPending ? <Loader /> :
          (<ul className="flex flex-col flex-1 gap-9 w-full">
            {
              posts && posts.documents.map(post => {
                return (
                  <li className="flex justify-center w-full">
                    <PostCard post={post} />
                  </li>
                )
              })
            }
          </ul>)
      }
    </div>
  )
}

export default Home
