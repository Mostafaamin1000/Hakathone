import { Schema , model } from "mongoose";


const schema = new Schema({
    title: {
        type: String,
        required: [true, 'title is required'],
        trim: true
    },
    image: {
        type: String,
        required: [true, 'image is required'],
        trim: true
    },                            
    description: {
        type: String,
        required: [true, 'description is required'],
        trim: true
    }
},{
        timestamps: true,   
        versionKey: false }
)

schema.post('init',function (doc){
    if(doc.image) doc.image = process.env.BASE_URL + doc.image
})

export const Home = model('Home',schema)