import { INewUser } from "@/interfaces";
import { account, appwriteConfig, avatars, databases } from "./config";
import { ID, Query } from 'appwrite'
import { toast } from 'react-toastify';


export const createUserAccount = async (user: INewUser) => {
  try {
    const newAccount = await account.create(
      ID.unique(),
      user.email,
      user.password,
      user.name
    );

    if (!newAccount) throw Error;
    const avatarURL = avatars.getInitials(user.name)
    const newUser = await saveUserToDatabase({
      accountID: newAccount.$id,
      name: newAccount.name,
      email: newAccount.email,
      username: user.username,
      imageURL: avatarURL,
    });
    return newUser;
  } catch (error: any) {
    toast.error(error.message);
  }
};

export const saveUserToDatabase = async (user: {
  accountID: string,
  name: string,
  email: string,
  username?: string,
  imageURL: URL,
}) => {
  try {
    const newUser = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.usersCollectionId,
      ID.unique(),
      user,
    )
    return newUser;
  } catch (error: any) {
    toast.error(error.message);
  }
}

export const createUserSession = async (user: {
  email: string,
  password: string
}) => {
  try {
    const session = await account.createEmailSession(user.email, user.password)
    return session;
  } catch (error: any) {
    toast.error(error.message);
  }
}

export const getCurrentUserAccount = async () => {
  try {
    const currentUser = await account.get()
    return currentUser
  } catch (error: any) {
    toast.error(error.message);
  }
}

export const getCurrentUser = async () => { 
  try {
    const currentUserAccount = await getCurrentUserAccount();
    if (currentUserAccount) {
      const currentUser = await databases.listDocuments(
        appwriteConfig.databaseId,
        appwriteConfig.usersCollectionId,
        [Query.equal("accountID", currentUserAccount.$id)]
      )
      return currentUser.documents[0];
    }
  } catch (error: any) {
    toast.error(error.message);
  }
}

export const deleteUserSession = async () => {
  try {
    const session = await account.deleteSession("current");
    return session;
  } catch (error: any) {
    toast.error(error.message);
  }
}
