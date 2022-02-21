import mongoose from "mongoose";
import bcrypt from "bcryptjs"


//Schemas

const userSchema = new mongoose.Schema({
  name: String,
  initial: String,
  email: String,
  password: String
});



//models

userSchema.methods.matchPassword = async function(enteredpassword){
  return await bcrypt.compare(enteredpassword,this.password)
}

userSchema.pre("save",async function(next){
  if(!this.isModified("password")){
    next();
  }
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password,salt)
})

const User = new mongoose.model("User",userSchema);






export default User;
