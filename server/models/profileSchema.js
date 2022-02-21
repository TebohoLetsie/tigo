import mongoose from "mongoose"

const profileSchema = new mongoose.Schema({
  firstname:String,
  lastname:String,
  about:String,
  initials: String,
  location:String,
  year: String,
  school:String,
  aps:{
    nwu: Number,
    up: Number
  },
  email: String,
  img:{
    data: Buffer,
    contentType: String
  }

});

const Profile = new mongoose.model("Profile",profileSchema);

export default Profile;
