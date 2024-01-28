import { Models } from "appwrite"
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getTagsArray = (tags?: string) => (
  tags && tags !== '' ? tags.replace(/ /g, "").split(',') : []
)

export const timeAgo = (dateString: string) => {
  const currentDate = new Date();
  const date = new Date(dateString);

  const timeDifference = currentDate.getTime() - date.getTime();
  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) {
    return `${days} day${days > 1 ? 's' : ''} ago`;
  } else if (hours > 0) {
    return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  } else if (minutes > 0) {
    return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
  } else {
    return `${seconds} second${seconds !== 1 ? 's' : ''} ago`;
  }
}

export const getPostLikesList = (post: Models.Document) => {
  return post.likes.map((like: Models.Document) => like.$id)
}

export const isPostLiked = (post: Models.Document, userID: string) => {
  return getPostLikesList(post).includes(userID)
}

export const isPostSavedByCurrentUser = (user?: Models.Document, post?: Models.Document) => {
  return user?.save.find(
    (record: Models.Document) => record.post.$id === post?.$id
  );
}