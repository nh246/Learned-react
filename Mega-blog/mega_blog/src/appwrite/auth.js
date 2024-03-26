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
// the create account 
    async createAccount({email,password,name}){
        try {
         const userAccount = await this.account.create(ID.unique(), email,password,name);

         if (userAccount) {
            // call another method 
            return this.login({email, password});

         } else {
            return userAccount;
         }
        } catch (error) {
            throw error;
        }
    }
// the user login 
    async login({email,password}) {
        try {
           return await this.account.createEmailSession(email,password);

        } catch (error) {
            throw error;
        }
    }
// get current user 

async getCurrentUser(){
    try {
        return await this.account.get()
    }
    catch (error){
        console.log("This is an appwirte error :: getCurrentUser::error",error);
    }

    return null;
}
// logout sessions
 
async logout(){
    try {
        await this.account.deleteSessions()
    } catch (error) {
        console.log("This is an appwrite logout:: error",error);
    }
}


}

const authService = new Authservice();


export default authService