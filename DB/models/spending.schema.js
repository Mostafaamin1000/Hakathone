import { Schema , model } from "mongoose";


const schema = new Schema({
    title: {
        type: String,
        required: [true, 'title is required'],
        trim: true
    },
    cost: {
        type: Number,
        required: [true, 'cost is required'],
        trim: true
    }
},{
        timestamps: true,   
        versionKey: false }
)

export const Spending = model('Spending',schema)