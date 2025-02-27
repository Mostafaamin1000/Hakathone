import mongoose from "mongoose";

export const DBConnect= mongoose.connect('mongodb://127.0.0.1:27017/Hakathone').then(()=>{
    console.log('DB Connected Successfully..');
}).catch(()=>{
    console.log('Error in DB Connection');
    
})