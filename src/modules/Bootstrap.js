import authRouter from "./auth/auth.router.js"
import HomeRouter from "./Home/home.router.js"
import SpendingRouter from "./spend/spending,router.js"


export const bootstrap=(app)=>{
    app.use('/api/Home', HomeRouter)
    app.use('/api/auth', authRouter)
    app.use('/api/spend', SpendingRouter)
}