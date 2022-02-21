import User from "../models/userSchema.js";
import generateToken from "../utils/generateToken.js"


export const getUser = async (req,res)=>{
    const {email,password} = req.body;

    console.log("from user : "+email + " password : "+ password)

    const user = await User.findOne({email});

    if(user && (await user.matchPassword(password))){
      console.log(user);
      res.json({
        _id : user._id,
        name: user.initial,
        email: user.email,
        token: generateToken(user._id)
      })

    }
    else{
      res.status(401)
      throw new Error("Invalid email or password")
    }

    
     
  };


  export const registerUser = async (req,res) =>{
    const {firstname,lastname,email,password} = req.body;


    
    const initial = (firstname.charAt(0) + lastname.charAt(0)).toUpperCase()
    
    console.log("initial is "+ initial);
    const userExist = await User.findOne({email});

   if(userExist){
    res.status(400)
    throw new Error("User already exists");  
   }
   
   const user = await User.create({
     firstname,
     lastname,
     initial,
     email,
     password
   })

   if(user){
     console.log(user)
     res.status(201).json({
       _id: user._id,
       name: user.initial,
       email: user.email,
       token: generateToken(user._id)

     })
   }
   else{
     res.status(400)
     throw new Error("invalid user data")
   }
  }

  export const profile = async (req,res)=>{
    const user = await User.findById(req.user._id);
     
    if(user){
      res.json({
        _id: user._id,
        name: user.initial,
        email: user.email

      })
    }
    else{
      res.status(401);
      throw new Error("user not found");
    }
  }