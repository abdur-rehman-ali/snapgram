import React from 'react'
import { createContext, useContext, useEffect, useState } from "react";

import { IContextType, IUser } from '@/interfaces'
import { getCurrentUser } from '@/lib/appwrite/api';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const INITIAL_USER_VALUES = {
  id: '',
  username: '',
  name: '',
  email: '',
  bio: '',
  imageURL: ''
}

const INITIAL_STATES = {
  user: INITIAL_USER_VALUES,
  isAuthenticated: false,
  isLoading: false,
  setUser: () => { },
  setIsAuthenticated: () => { },
  checkAuthenticatedUser: async () => false as boolean
}


const AuthContext = createContext<IContextType>(INITIAL_STATES)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<IUser>(INITIAL_USER_VALUES)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const cookieFallback = localStorage.getItem("cookieFallback");
    if (cookieFallback === "[]" || cookieFallback === null || cookieFallback === undefined) {
      navigate("/register");
    } 
    checkAuthenticatedUser()
  }, [])

  const checkAuthenticatedUser = async () => {
    setIsLoading(true)
    try {
      const currentUser = await getCurrentUser();
      if (currentUser) {
        setUser({
          id: currentUser.$id,
          username: currentUser.username,
          name: currentUser.name,
          email: currentUser.email,
          bio: currentUser.bio,
          imageURL: currentUser.imageURL
        });
        setIsAuthenticated(true)
        return true
      }
      return false
    } catch (error: any) {
      toast.error(error.message);
      return false;
    } finally {
      setIsLoading(false)
    }
  }

  const value = {
    user,
    isAuthenticated,
    isLoading,
    setUser,
    setIsAuthenticated,
    checkAuthenticatedUser
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export const useUserContext = () => useContext(AuthContext)
