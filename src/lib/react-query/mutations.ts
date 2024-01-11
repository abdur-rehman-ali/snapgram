import { INewUser } from '@/interfaces'
import { useMutation } from '@tanstack/react-query'
import { createUserAccount, createUserSession, deleteUserSession } from '../appwrite/api'

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
