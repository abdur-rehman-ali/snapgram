import { useQuery } from "@tanstack/react-query";
import { getAllPosts } from "../appwrite/api";

export const useGetPosts = () => {
  return useQuery({
    queryKey: ["getPosts"],
    queryFn: getAllPosts,
  })
}
