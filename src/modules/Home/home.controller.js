import { Home } from "../../../DB/models/home.schema.js";
import { catchError } from "../../MiddleWares/CatchError.js";


const AddtoHome =catchError(async(req,res,next)=>{
 req.body.image = req.file.filename
const home = await Home.insertMany(req.body)
res.status(201).json({message:"News Added Successfully ..", home})
})


const GetFromHome =catchError(async(req,res,next)=>{
const home = await Home.find()
res.status(201).json({message:"News Added Successfully ..", home})            
})

const updateHome =catchError(async(req,res,next)=>{
    req.body.image = req.file.filename
const home = await Home.findOneAndUpdate(req.params.id,req.body)
res.status(201).json({message:"News updated Successfully ..", home})            
})


export{
    AddtoHome,
    GetFromHome
}