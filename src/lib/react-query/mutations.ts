import { INewUser } from '@/interfaces'
import { useMutation } from '@tanstack/react-query'
import { createUserAccount } from '../appwrite/api'

export const useCreateUserAccount = () => {
  return useMutation({
    mutationFn: (user: INewUser) => createUserAccount(user) ,
  })
}
