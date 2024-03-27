import conf from "../conf/conf";
import { Client,ID , Databases,Storage,Query } from "appwrite";

export class Service{
    client = new Client();
    databases;
    bucket;
   
    constructor(){
        this.cleint
        .setEndpoint(conf.appwriteUrl) // Your API Endpoint
        .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);               // Your project ID
        this.bucket = new Storage(this.client);

    }
    
    async 



}

const service = new Service()
export default service