import { Spending } from "../../../DB/models/spending.schema.js";
import { catchError } from "../../MiddleWares/CatchError.js";


const AddSpending = catchError(async (req,res,next)=>{
    const spend = await Spending.insertMany(req.body)
    res.status(201).json({message:"spending Added Successfully ..", spend})
})

const GetAllSpending = catchError(async (req,res,next)=>{
    const spend = await Spending.find()
    res.status(201).json({message:"spending Added Successfully ..", spend})
})

const updateOnSpending = catchError(async (req,res,next)=>{
    const spend = await Spending.findByIdAndUpdate(req.params.id,req.body)
    res.status(201).json({message:"spending updated Successfully ..", spend})
})

export{
AddSpending,
GetAllSpending,
updateOnSpending
}