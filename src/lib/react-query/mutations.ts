import { INewPost, INewUser } from '@/interfaces'
import { useMutation } from '@tanstack/react-query'
import { createPost, createUserAccount, createUserSession, deleteUserSession } from '../appwrite/api'
import { queryClient } from './QueryProvider'
import { QUERY_KEYS } from './queryKeys'

export const useCreateUserAccount = () => {
  return useMutation({
    mutationFn: (user: INewUser) => createUserAccount(user),
  })
}

export const useCreateUserSession = () => {
  return useMutation({
    mutationFn: (user: { email: string, password: string }) => {
      return createUserSession(user)
    }
  })
}

export const useDeleteUserSession = () => useMutation({ mutationFn: deleteUserSession })

export const useCreatePost = () => {
  return useMutation({
    mutationFn: (post: INewPost) => createPost(post),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.GET_POSTS] })
    }
  });
};
