export type INewUser = {
  name: string;
  username: string;
  email: string;
  password: string;
}

export type IUser = {
  id: string;
  username: string;
  name: string;
  email: string;
  bio: string;
  imageURL: string;
}

export type IContextType = {
  user: IUser;
  isLoading: boolean;
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  checkAuthenticatedUser: () => Promise<boolean>;
};

export type INewPost = {
  userID: string;
  caption?: string;
  file: File[];
  location?: string;
  tags?: string;
};
