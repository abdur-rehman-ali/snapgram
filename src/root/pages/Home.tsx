import PostCard from "@/components/shared/Cards/PostCard/PostCard"

const Home = () => {
  return (
    <div className="home-posts">
      <h1 className="h3-bold md:h2-bold text-left w-full">Home Feed</h1>
      <ul className="flex flex-col flex-1 gap-9 w-full">
        <li className="flex justify-center w-full">
          <PostCard />
        </li>
      </ul>
    </div>
  )
}

export default Home
