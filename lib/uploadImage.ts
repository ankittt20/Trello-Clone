import {ID, storage} from "@/appwrite";

const uploadImage = async (file: File) => {
    if(!file) return;

    const fileUploaded = await storage.createFile("64d1db15de8e74679552", ID.unique(), file);

    return fileUploaded;
}

export default uploadImage;