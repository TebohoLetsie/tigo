import jwt from "jsonwebtoken"
import User from "../models/userSchema.js"


const protect = async (req,res,next)=>{
    let token 

    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        try{
            token = req.headers.authorization.split("")[1];
            const decoded = jwt.verify(token,process.env.JWT_SECRET)

            req.user = await User.findById(decoded.id).select("-password")
            next()
        }
        catch(error){
         console.error(error)
         res.status(401)
         throw new error("not authorized token failed")   
        }


    }
    if(!token){
        res.status(401)
        throw new Error("access denied, no token")
    }
}

export default protect;