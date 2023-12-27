import { INewUser } from "@/interfaces";
import { account, appwriteConfig, avatars, databases } from "./config";
import { ID } from 'appwrite'


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
  } catch (error) {
    console.log(error);
    return error;
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
  } catch (error) {
    console.log(error);
    return error;
  }
}
