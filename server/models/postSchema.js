import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    author: String,
    tags: [String],
    selectedFile: String,
    likeCount:{
        type:Number,
        default: 0
    },
    createdAt:{
        type: Date,
        default: new Date()
    }
});
const UJSchema = {
    name: String,
    code: String,
    years: String,
    stream: String,
    school:{
      name: [String],
      aps: [Number]
    },
    subjects:{
      accounting: Number,
      mathLit: Number,
      english: Number,
      math: Number,
      physics: Number,
      lifeScience: Number
  
    },
    career:[String]
  
  }


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
  const nwuSchema = {
    name: String,
    code: String,
    years: String,
    stream: String,
    school:{
      name: [String],
      aps: [Number]
    },
    subjects:{
      accounting: Number,
      mathLit: Number,
      english: Number,
      math: Number,
      physics: Number,
      home: Number
  
    }
  
  }
  const upSchema = {
    name: String,
    code: String,
    years: String,
    stream: String,
    school:{
      name: [String],
      aps: [Number]
    },
    subjects:{
      accounting: Number,
      mathLit: Number,
      english: Number,
      math: Number,
      physics: Number,
      home: Number
  
    },
    career:[String]
  
  }
  const witsSchema = {
    name: String,
    code: String,
    years: String,
    stream: String,
    school:{
      name: [String],
      aps: [Number]
    },
    subjects:{
      accounting: Number,
      mathLit: Number,
      english: Number,
      math: Number,
      physics: Number,
      lifeScience: Number
  
    },
    career:[String]
  
  }

  const UlSchema = {
    name: String,
    code: String,
    years: String,
    stream: String,
    school:{
      name: [String],
      aps: [Number]
    },
    subjects:{
      lifeScience: Number,
      mathLit: Number,
      english: Number,
      math: Number,
      physics: Number,
      economics: Number
  
    }
  
  }


const PostMessage = mongoose.model("PostMessage",postSchema);


export const Profile = new mongoose.model("Profile",profileSchema)

export const Nwu = mongoose.model("Nwu",nwuSchema,"nwus");

export const UPP = mongoose.model("UP",upSchema,"ups");

export const Wits = mongoose.model("Wit",witsSchema,'wits');

export const UJ = mongoose.model("UJ",UJSchema,'ujs')

export const UL = mongoose.model("UL",UlSchema);


export default PostMessage;
