import { useQuery } from "@tanstack/react-query";
import {
  getAllPosts,
  getAllUsers,
  getCurrentUser,
  getSinglePost
} from "../appwrite/api";
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

export const useGetCurrentUser = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_CURRENT_USER],
    queryFn: async () => await getCurrentUser(),
  })
}

export const useGetAllUsers = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_ALL_USERS],
    queryFn: getAllUsers,
    staleTime: Infinity,
  })
}
