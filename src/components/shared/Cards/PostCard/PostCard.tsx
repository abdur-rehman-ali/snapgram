
const PostCard = () => {
  return (
    <div className="post-card">
      <div className="flex-between">
        <div className="flex items-center gap-3">
          <div>
            <img
              src={
                "/assets/icons/profile-placeholder.svg"
              }
              alt="creator"
              className="w-12 lg:h-12 rounded-full"
            />
          </div>

          <div className="flex flex-col">
            <p className="base-medium lg:body-bold text-light-1">
              Joiya
            </p>
            <div className="flex-center gap-2 text-light-3">
              <p className="subtle-semibold lg:small-regular ">
                2 hours ago
              </p>
              •
              <p className="subtle-semibold lg:small-regular">
                Texas
              </p>
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
          <p>Hard work beats talent</p>
          <ul className="flex gap-1 mt-2">
            <li className="text-light-3 small-regular">
              #react
            </li>
            <li className="text-light-3 small-regular">
              #angular
            </li>
            <li className="text-light-3 small-regular">
              #typescript
            </li>
          </ul>
        </div>

        <img
          src={"/assets/icons/wallpaper.svg"}
          alt="post image"
          className="post-card_img"
        />
      </div>
    </div>
  );
}

export default PostCard
