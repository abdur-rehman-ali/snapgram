import { useQuery } from "@tanstack/react-query";
import { getAllPosts } from "../appwrite/api";
import { QUERY_KEYS } from "./queryKeys";

export const useGetPosts = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_POSTS],
    queryFn: getAllPosts,
    staleTime: Infinity,
  })
}
