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

}

const authService = new Authservice();


export default authService