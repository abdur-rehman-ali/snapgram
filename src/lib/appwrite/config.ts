import {
  Client,
  Account,
} from 'appwrite'

export const appwriteConfig = {
  projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
  endpoint: import.meta.env.VITE_APPWRITE_ENDPOINT,
}

export const client = new Client();
client.setProject(appwriteConfig.projectId)
client.setEndpoint(appwriteConfig.endpoint)

export const account = new Account(client);

