import mongoose, {Schema,model} from "mongoose";

const schema=new Schema({
name:{
    type:String,
    required:[true,'Name is required'],
},
email:{
    type:String,
    unique:true,
    required:true
},
password:{
    type:String,
    required:true,
    minLength:7
},

},{
    timestamps:false,
    versionKey:false
})

schema.pre('save',function(){
    this.password=bcrypt.hashSync(this.password,10)

})

export const User= model('User',schema)