import { Router } from "express";
import { AddSpending, GetAllSpending, updateOnSpending } from "./spending.controller.js";

const SpendingRouter = Router()

SpendingRouter.post('/',AddSpending)
SpendingRouter.get('/',GetAllSpending)
SpendingRouter.put('/:id',updateOnSpending)


export default SpendingRouter 