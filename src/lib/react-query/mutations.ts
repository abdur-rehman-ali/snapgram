import { INewPost, INewUser, IUpdatePost } from '@/interfaces'
import { useMutation } from '@tanstack/react-query'
import {
  createPost,
  createUserAccount,
  createUserSession,
  deleteUserSession,
  savePost,
  unSaveUserPost,
  updateLikeOnPost,
  updateSinglePost
} from '../appwrite/api'
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

export const useUpdatePost = () => {
  return useMutation({
    mutationFn: (post: IUpdatePost) => updateSinglePost(post),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.GET_POSTS] })
    }
  })
}

export const useUpdateLikeOnPost = () => {
  return useMutation({
    mutationFn: ({ postID, userID }: { postID: string, userID: string }) => updateLikeOnPost(postID, userID),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.GET_POSTS] })
    }
  })
}

export const useSavePost = () => {
  return useMutation({
    mutationFn: ({ postID, userID }: { postID: string, userID: string }) => savePost(postID, userID),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.GET_POSTS] })
    }
  })
}

export const useUnSavePost = () => {
  return useMutation({
    mutationFn: ({ userID,  postID}: { userID: string, postID: string }) => unSaveUserPost(userID, postID),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.GET_POSTS] })
    }
  })
}
