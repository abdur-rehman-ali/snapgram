import { INewPost, INewUser, IUpdatePost } from "@/interfaces";
import { account, appwriteConfig, avatars, databases, storage } from "./config";
import { ID, Query } from 'appwrite'
import { toast } from 'react-toastify';
import { getTagsArray } from "../utils";


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

export const createPost = async (post: INewPost) => {
  try {
    const uploadedFile = await uploadFile(post.file[0])
    if (!uploadedFile) throw Error;

    const fileURL = await getUploadFilePreview(uploadedFile.$id)
    if (!fileURL) {
      await deleteFile(uploadedFile.$id)
      throw Error;
    }

    const tags = getTagsArray(post.tags)

    const createdPost = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.postsCollectionId,
      ID.unique(),
      {
        creator: post.userID,
        caption: post.caption,
        imageURL: fileURL,
        imageID: uploadedFile.$id,
        location: post.location,
        tags: tags,
      }
    );

    if (!createdPost) {
      await deleteFile(uploadedFile.$id);
      throw Error;
    }

    return createdPost;
  } catch (error: any) {
    toast.error(error.message);
  }
}

export const uploadFile = async (file: File) => {
  try {
    const uploadedFile = await storage.createFile(
      appwriteConfig.storageId,
      ID.unique(),
      file
    );
    return uploadedFile;
  } catch (error: any) {
    toast.error(error.message);
    return null;
  }
}

export const getUploadFilePreview = async (fileID: string) => {
  try {
    const uploadedFileURL = await storage.getFilePreview(
      appwriteConfig.storageId,
      fileID,
      1800,
      0,
      'center',
      50,
    );
    if (!uploadedFileURL) throw Error
    return uploadedFileURL;
  } catch (error: any) {
    toast.error(error.message);
    return null;
  }
}

export const deleteFile = async (fileID: string) => {
  try {
    const deletedFile = await storage.deleteFile(
      appwriteConfig.storageId,
      fileID
    );
    return deletedFile;
  } catch (error: any) {
    toast.error(error.message);
    return null;
  }
}

export const getAllPosts = async () => {
  try {
    const allPosts = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.postsCollectionId,
      [
        Query.orderDesc('$createdAt')
      ]
    )
    return allPosts;
  } catch (error: any) {
    toast.error(error.message);
  }
}

export const getSinglePost = async (postID: string) => {
  try {
    const post = await databases.getDocument(
      appwriteConfig.databaseId,
      appwriteConfig.postsCollectionId,
      postID,
    )
    return post;
  } catch (error: any) {
    toast.error(error.message);
  }
}

export const updateSinglePost = async (postData: IUpdatePost) => {
  try {
    const tags = getTagsArray(postData.tags)
    const updatedDocument = await databases.updateDocument(
      appwriteConfig.databaseId,
      appwriteConfig.postsCollectionId,
      postData.postId,
      {
        caption: postData.caption,
        location: postData.location,
        tags: tags
      }
    );
    return updatedDocument;
  } catch (error: any) {
    toast.error(error.message);
  }
}
