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
    
    // Creating the post in databases

    async createPost ({title, slug, content, freaturedImage, status, userID}) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    freaturedImage,
                    status,
                    userID,
                }
            )
        } catch (error) {
            console.log("Appwrite create post" , error);
        }
    }
// updating the post in the databases

async updatePost (slug,{title, content, freaturedImage, status}){

    try {
        return await this.databases.updateDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug,
            {
                title,
                content,
                freaturedImage,
                status
            }
        )
    } catch (error) {
        console.log("appwrite updatePost ",error);
    }
}

// deleting the post in database

async deletePost(slug){
    try {
        await this.databases.deleteDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug
        )
        return true;
    } catch (error) {
        console.log("Appwrite deleting post",error);
        return false;
    }
}

// getting a post 

async getPost(slug){
    try {
        return await this.databases.getDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug
        )
    } catch (error) {
        console.log("appwrite getting post ", error);
        
    }
}

async getPosts (queries = [Query.equal("status","active")]){
  try {
     return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries,

     )
  } catch (error) {
    console.log("Appwrite getPosts",error);
    return false
  }
}

// file upload services

async uploadFile (file){
 try {
    return await this.bucket.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file
    )
 } catch (error) {
    console.log("Appwrite file doenload",error);
    
 }
}

// delete file services

async deleteFile(fileId){
    try {
        await this.bucket.deleteFile(
            conf.appwriteBucketId,
            fileId
        )
        return true
    } catch (error) {
        console.log("Appwrite delete file",error);
        
    }
}

// file preview

getFilePreview(fileId){
    return this.bucket.getFilePreview(
        conf.appwriteBucketId,
        fileId
    )
}


}

const service = new Service()
export default service