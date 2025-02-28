process.on('uncaughtException',(err)=>{console.log('Error in Code',err);})
import express from 'express'
import { DBConnect } from './DB/db.connection.js'
import { bootstrap } from './src/modules/Bootstrap.js';
import { AppError } from './src/utils/appError.js'
import { globalError } from './src/MiddleWares/globalError.js'
import dotenv from 'dotenv'
import { sendEmail } from './src/Email/email.js';
dotenv.config()
const app = express()
const port= 3000 
app.use(express.json())
bootstrap(app)
app.use('/uploads',express.static('uploads'))
sendEmail()


app.use('*', (req,res,next)=>{
        next(new AppError(`Route Not Found ${req.originalUrl}`,404))
})

app.use(globalError)
process.on('unhandledRejection',(err)=>{
console.log("Error",err);

})

app.listen(port,()=>{
    console.log('Server is running..');
    
})
