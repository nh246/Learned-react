import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class Authservice {
    clint = new Client();
    account;

    constructor () {
        this.clint
        .setEndpoint(conf.appwriteUrl) // Your API Endpoint
        .setProject(conf.appwriteProjectId);               // Your project ID
        this.account = new Account(this.clint);
    
    }

    async createAccount({email,password,name}){
        try {
         const userAccount = await this.account.create(ID.unique(), email,password,name);

         if (userAccount) {
            // call another method 

         } else {
            return userAccount;
         }
        } catch (error) {
            throw error;
        }
    }

}

const authService = new Authservice();


export default authService