import { Client, Account, Databases, Storage} from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('67b9a3910037abe54add');

export const account = new Account(client);
export { ID } from 'appwrite';
export const DB = new Databases(client)
export const storage = new Storage(client)
