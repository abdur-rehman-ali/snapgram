import { useQuery } from "@tanstack/react-query";
import { getAllPosts, getSinglePost } from "../appwrite/api";
import { QUERY_KEYS } from "./queryKeys";

export const useGetPosts = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_POSTS],
    queryFn: getAllPosts,
    staleTime: Infinity,
  })
}

export const useGetSinglePost = (postID: string) => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_SINGLE_POST, postID],
    queryFn: async () => await getSinglePost(postID),
    staleTime: Infinity,
    enabled: !!postID,
  })
}