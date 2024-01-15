import { timeAgo } from "@/lib/utils";
import { Models } from "appwrite";

const PostCard = ({ post }: { post: Models.Document }) => {
  const { creator, caption, location, tags, $createdAt, imageURL } = post
  return (
    <div className="post-card">
      <div className="flex-between">
        <div className="flex items-center gap-3">
          <div>
            <img
              src={
                creator.imageURL ||
                "/assets/icons/profile-placeholder.svg"
              }
              alt="creator"
              className="w-12 lg:h-12 rounded-full"
            />
          </div>

          <div className="flex flex-col">
            <p className="base-medium lg:body-bold text-light-1">
              {caption}
            </p>
            <div className="flex-center gap-2 text-light-3">
              <p className="subtle-semibold lg:small-regular">
                {timeAgo($createdAt)}
              </p>
              {
                location &&
                <>
                  <span>•</span>
                  <p className="subtle-semibold lg:small-regular">
                    {location}
                  </p>
                </>
              }
            </div>
          </div>
        </div>

        <div>
          <img
            src={"/assets/icons/edit.svg"}
            alt="edit"
            width={20}
            height={20}
          />
        </div>
      </div>

      <div >
        <div className="small-medium lg:base-medium py-5">
          <ul className="flex gap-1 mt-2">
            {
              tags.length > 0 && tags.map((tag: string, index: string) => (
                <li className="text-light-3 small-regular" key={index}>
                  #{tag}
                </li>
              ))
            }
          </ul>
        </div>

        <img
          src={imageURL || "/assets/icons/wallpaper.svg"}
          alt="post image"
          className="post-card_img"
        />
      </div>
    </div>
  );
}

export default PostCard
