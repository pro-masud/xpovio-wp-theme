// create a mongodb database system
import mongoose from "mongoose";

export const mongodbCollection = async () => {
    try{
        const connection = await mongoose.connect('mongodb://localhost/Amazon');
        console.log(`Connction Within MongoDB Database`.bgBlue.black);
    }catch(error){
        console.log(`MongoDB Database Connection Field`.bgRed.black);
    }
}