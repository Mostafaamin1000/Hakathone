import { Router } from "express";
import { AddtoHome, GetFromHome } from "./home.controller.js";
import { uploadSinleFile } from "../../fileUpload/fileUpload.js";
const HomeRouter =  Router()

HomeRouter.post('/',uploadSinleFile('image','Home'),AddtoHome)
HomeRouter.get('/',GetFromHome)



export default HomeRouter 