
const express = require('express')
const cors = require('cors')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const passportlocalMongoose =require('passport-local-mongoose');
const Pusher = require("pusher");
const fs = require("fs");
const path = require("path");
const multer = require("multer");
require("dotenv/config");



app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())
app.use(express.static('public'));
app.use(cors())
app.use(session({
  secret:"my little secret.",
  resave:false,
  saveUninitialized:false
}));

app.use(passport.initialize());
app.use(passport.session());

 mongoose.connect("mongodb://localhost:27017/schoolDB",{useNewUrlParser:true, useUnifiedTopology:true});
mongoose.set("useCreateIndex",true);
// mongoose.connect("mongodb+srv://admin-teboho:070997@cluster0.iffup.mongodb.net/schoolDB",{useNewUrlParser:true,useUnifiedTopology:true});
const pusher = new Pusher({
  appId: "1118414",
  key: "ab47a5ed9c98a4ad045e",
  secret: "d7dcf5f5ec202d32a10b",
  cluster: "mt1",
  useTLS: true
});

const userSchema = new mongoose.Schema({
  email: String,
  password: String
});

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

 userSchema.plugin(passportlocalMongoose);

const User = new mongoose.model("User",userSchema);
passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

const Profile = new mongoose.model("Profile",profileSchema)
const Nwu = mongoose.model("Nwu",nwuSchema,"nwus");


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

const UPP = mongoose.model("UP",upSchema,"ups");
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

const Wits = mongoose.model("Wit",witsSchema,'wits');
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

const UJ = mongoose.model("UJ",UJSchema,'ujs')
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

const UL = mongoose.model("UL",UlSchema);

const postSchema = {
  username:String,
  date: String,
  title: String,
  content: String,
  count: Number,
  tags:[String],
  day: Date,
  time:Date,
  email:String,
  img:{
    data: Buffer,
    contentType: String
  },
  likers:[ {
    name: String
  }]
  }
  const commentSchema = {
    post_id: String,
    name: String,
    content:String,
    count: Number,
    date: Date


  }






const Post = mongoose.model("Post", postSchema);
const Comment = mongoose.model("Comment",commentSchema);

const storage = multer.diskStorage({
  destination:(req,file,cb)=>{
    fs.mkdir("./uploads/",(err)=>{
      cb(null,"./uploads/")
    })
  },
  filename:(req,file,cb)=>{
    cb(null,file.fieldname + "-"+ Date.now())
  }
});

const upload = multer({storage:storage});

let initial = "";
let userName = "";
let course_name = "";
let stream = "";
let year = 0;
let tuition ="";
var search_result;
var search_count = "";
var nwus;
var ups;
var wits;
var jhb;
var limpopo;
let universityCount = 0;
let courseCount = 0;
let count_comment = 0;;
var nwunsp = io.of('/nwu');

const rooms = { };
 var date
app.get('/',(req,res)=>{

  res.render("login")
      //res.render("home_screen");
      //  console.log(nwunsp);


});




app.get('/results',(req,res)=>{
  res.render("results",{Number:search_count,Course: search_result});

});

app.get('/home_screen',(req,res)=>{
//  console.log(req.session.passport.user);
var init = "";

  const id = req.session.passport.user;
   if(req.isAuthenticated()){
     Profile.findOne({'email':id},(err,found)=>{
        if(err){
          console.log(err);
        }
        else{
          init = found.firstname.charAt(0).toUpperCase() + found.lastname.charAt(0).toUpperCase();

             res.render("home_screen",{initial:init});
        }
      });


   }
   else{
     res.redirect("/login")
   }
});
app.get('/upload',(req,res)=>{
  res.render("profile_upload");
})
app.get("/calculator",(req,res)=>{
  var init = "";

    const id = req.session.passport.user;
     if(req.isAuthenticated()){
       Profile.findOne({'email':id},(err,found)=>{
          if(err){
            (err);
          }
          else{
            init = found.firstname.charAt(0).toUpperCase() + found.lastname.charAt(0).toUpperCase();

               res.render("calculator",{initial:init});
          }
        });


     }
     else{
       res.redirect("/login")
     }
});
app.post("/register",(req,res)=>{
  const profile = new Profile({
    firstname: req.body.fname,
    lastname: req.body.lname,
    email: req.body.username

  });
  profile.save(function(err){
    if(err){
      console.log(err);
    }

  });

  initial = req.body.fname.charAt(0).toUpperCase()+req.body.lname.charAt(0).toUpperCase();
  userName = req.body.fname + " " + req.body.lname;

User.register({username:req.body.username},
              req.body.password,function(err,user){
                if(err){
                  console.log(err);
                  res.redirect("/register")
                }
                else{
                  passport.authenticate("local")(req,res,function(){

                    res.redirect("/home_screen")

                  })
                }
              });


});
app.post("/upload",upload.single("image"),(req,rs,next)=>{
  const id =  req.session.passport.user;
    const filter = {"email": id}


  Profile.findOneAndUpdate(filter,{"$set":{
    "img.data": fs.readFileSync(path.join(__dirname+"/uploads/"+req.file.filename)),
    "img.contentType": "image/png"
  }},{new:true},(err,doc)=>{
    if(!err)
    {
    
    }
  })
})
 app.get('/register',(req,res)=>{
  res.render('register')
});
app.post('/login',(req,res)=>{
  const user = new User({
    username: req.body.username,
    password: req.body.password
  });
  req.login(user,function(err){
    if(err){
      console.log(err);

    }
    else{
      passport.authenticate("local")(req,res,function(){

        Profile.findOne({'email':req.body.username},(err,found)=>{
          if(err){
            console.log(err);
          }
          else{
            initial = found.firstname.charAt(0).toUpperCase() + found.lastname.charAt(0).toUpperCase();

            userName = found.firstname + " " + found.lastname;
          }
        });
        res.redirect("/home_screen")

      });
    }
  });

});
app.post('/toggleLikePost',(req,res)=>{
       const id = req.session.passport.user;


       	var _id = mongoose.Types.ObjectId(req.body.id);



        Profile.findOne({"email":id},(err,user)=>{
          if(user==null){
            res.json({
              "status":"error",
              "message":"User is logged out please login again"
            })
          }
          else{
            Post.findOne({"_id":_id},(err,post)=>{
              if(post==null){
                res.json({
                  "status":"error",
                  "message":"Post does not exist"
                })
              }
              else{
                var isLiked = false;
                for(var i = 0 ;i < post.likers.length ; i++){
                  var liker = post.likers[i];
                  if(liker._id.toString() === user._id.toString()){
                    isLiked = true;
                    break;
                  }
                }
                if(isLiked){
                  Post.findOneAndUpdate({"_id":_id},{$pull:{"likers":{"_id":user._id}}},function(error,data){
                    console.log(user.firstname+" unliked the post");
                    res.json({
                      "status":"unliked",
                      "message":"user has unliked the post"
                    });
                  })
                }
                else{
                  Post.findOneAndUpdate({"_id":_id},{$push:{
                    "likers":{
                      "_id":user._id,
                      name:user.firstname
                    }
                  }},function(err,data){
                    console.log(user.firstname+" liked post");
                    res.json({
                      "status":"success",
                      "message":"post has been liked"
                    })
                  })
                }
              }
            })
          }
        })
});


app.post("/aps",(req,res)=>{
  // (req.session.passport.user);
const mark1 = Number(req.body.mark1);
const mark2 = Number(req.body.mark2);
const mark3 = Number(req.body.mark3);
const mark4 = Number(req.body.mark4);
const mark5 = Number(req.body.mark5);
const mark6 = Number(req.body.mark6);
const mark7 = Number(req.body.mark7);
const markarr = [mark1,mark2,mark3,mark4,mark5,mark6,mark7];
const subArr = [req.body.HL,req.body.FAL,req.body.Maths,req.body.other1,req.body.other2,req.body.other3,req.body.other4];
const mathType = req.body.Maths;
const mathMark = mark3;

const wits_math = mathType;
let witsAps = 0;
let upaps = 0;
let ulaps = 0;
let ujaps = 0;
let nwuaps =0;


var mathAps = getMathAps(mathMark);



//wits aps
// ("wits Aps is : "+ calculateWitsAps(subArr,markarr));


witsAps = calculateWitsAps(subArr,markarr);
upaps = calculateNwuAps(subArr,markarr);
ulaps = calculateNwuAps(subArr,markarr);
ujaps = calculateNwuAps(subArr,markarr);
nwuaps = calculateNwuAps(subArr,markarr)



if(mathType == 'maths'){

  let course_up = UPP.find({$and:[{'school.aps':{$lte:upaps}},{'subjects.math': {$lte:mathAps}}]},(err,found)=>{
    if(err){
      console.log(err);
    }
    else{

      demo =found;


    }
  });



  let course_nwu = Nwu.find({$and:[{'school.aps':{$lte:nwuaps}},{'subjects.math':{$lte:mathAps}}]},(err,found)=>{
    if(err){
      console.log(err);
    }
    else{
      nwus = found;
      console.log(nwus);
    }
  })
  //
  let course_wits = Wits.find({$and:[{'school.aps':{$lte:witsAps}},{'subjects.math':{$lte:mathAps}}]},(err,found)=>{
    if(err){
      console.log(err);
    }
    else{

      wits = found
    }
  })
  let course_ul = UL.find({$and:[{'school.aps':{$lte:ulaps}},{'subjects.english':{$lte:mathAps}}]},(err,found)=>{
    if(err){
      console.log(err);
    }
    else{

      limpopo = found;
    }
  })
  let course_uj = UJ.find({$and:[{'school.aps':{$lte:ujaps}},{'subjects.math':{$lte:mathAps}}]},(err,found)=>{
    if(err){
      console.log(err);

    }
    else{

      jhb = found;
    }
  })

  let count1 = 0;
  let count2 = 0;
  let  count_wits = 0;
  let count_uj =0;
  let count_ul=0;

    course_up.countDocuments((err,count)=>{
      universityCount = 0;
        count1 = count;

        if(count1 > 0){
          universityCount +=1;
        }
        courseCount = 0;
        courseCount += count;

    course_nwu.countDocuments((err,count1)=>{
            count2 = count1;
            if(count2 >0){
              universityCount += 1;
            }
            courseCount +=count;

      course_wits.countDocuments((err,count3)=>{
            count_wits = count3;

            if(count_wits > 0){
              universityCount += 1;
            }
            courseCount += count;

             course_uj.countDocuments((err,count4)=>{
              count_uj = count4;
              if(count_uj > 0){
                universityCount += 1;
              }
              courseCount +=count;
              course_ul.countDocuments((err,count5)=>{
                count_ul = count5;
                if(count_ul > 0){
                  universityCount += 1
                }
                courseCount += count;
                res.render('display',{NwuNo:count2,NwuAps:nwuaps,UpNo:count1,UpAps:upaps,
                  WitsNo:count_wits,WitsAps:witsAps,ULNo:count_ul,  ULAps:ulaps,UjNo:count_uj,UjAps:ujaps,Course:courseCount,University: universityCount});
                nwuaps = 0;
                upaps = 0;
              })
            })
          })




        });


    });


}
 else if (mathType === "mathsL") {

   var aps_count =   Nwu.find({$and:[{'school.aps': {$lte:nwuaps}},{'subjects.mathLit':{$lte:mathAps}},{'subjects.math':{$lte:0}}]},(err,found)=>{
       if(err){


         console.log(err);

      }
      else{
             nwus = found;

      }
    });
    var up_count =   UPP.find({$and:[{'school.aps': {$lte:upaps}},{'subjects.mathLit': {$lte:mathAps}},{'subjects.math':{$lte:0}}]},(err,found)=>{
        if(err){
           console.log(err);
       }
       else {
        ups = found;

       }
     });
     var wits_aps =   Wits.find({$and:[{'school.aps': {$lte:witsAps}},{'subjects.mathLit':{$lte:mathAps}},{'subjects.math':{$lte:0}}]},(err,found)=>{
         if(err){
           console.log(err);
        }
        else{
          wits = found;
        }
      });
      var uj_aps =   UJ.find({$and:[{'school.aps': {$lte:ujaps}},{'subjects.mathLit':{$lte:mathAps}},{'subjects.math':{$lte:0}}]},(err,found)=>{
          if(err){
          console.log(err);
         }
         else{
          // console.log(found);
         }
       });
       var ul_aps =   UL.find({$and:[{'school.aps': {$lte:ulaps}},{'subjects.mathLit':{$lte:mathAps}},{'subjects.math':{$lte:0}}]},(err,found)=>{
           if(err){
             console.log(err);
          }
          else{
            limpopo = found
          }
        });

     let count1 = 0;
     let count2 = 0;
     let  count_wits = 0;
     let count_uj =0;
     let count_ul=0;

     up_count.count((err,count)=>{
       universityCount = 0;
         count1 = count;

         if(count1 > 0){
           universityCount +=1;
         }
         courseCount = 0;
         courseCount += count;

         aps_count.count((err,count)=>{
             count2 = count;
             if(count2 >0){
               universityCount += 1;
             }
             courseCount +=count;
           wits_aps.count((err,count)=>{
             count_wits = count;

             if(count_wits > 0){
               universityCount += 1;
             }
             courseCount += count;

             uj_aps.count((err,count)=>{
               count_uj = count;
               if(count_uj > 0){
                 universityCount += 1;
               }
               courseCount +=count;
               ul_aps.count((err,found)=>{
                 count_ul = count;
                 if(count_ul > 0){
                   universityCount += 1
                 }
                 courseCount += count;
                 res.render('display',{NwuNo:count2,NwuAps:nwuaps,UpNo:count1,UpAps:upaps,
                   WitsNo:count_wits,WitsAps:witsAps,ULNo:count_ul,  ULAps:ulaps,UjNo:count_uj,UjAps:ujaps,Course:courseCount,University: universityCount});
                 nwuaps = 0;
                 upaps = 0;
               })
             })
           })




         });


     });


}



});

app.post('/edit_profile',(req,res)=>{
const id =  req.session.passport.user;
const about = req.body.postAbout;
const highSchool = req.body.postSchool;
const matric = req.body.postYear;
const local = req.body.postLocal;


Profile.findOneAndUpdate({'email':id},{"$set":{"about":about,"school":highSchool,"year":matric,"location":local}}).exec(function(err,found){
  if(err){
    console.log(err);
    res.status(500).send(err);
  }
  else{
    res.render("profile")
  }
});

});

app.get("/nwu",(req,res)=>{

      console.log(req.params);
              res.render("rest",{Course:nwus});
            // nwus.forEach((course) => {
            //   if (rooms[course.name] != null) {
            //
            //   }
            //   rooms[course.name] = { users: {} }
            //
            //   nwunsp.emit('room-created', course.name)
            //
            //
            // });



});
app.get('/profile',(req,res)=>{

const id =  req.session.passport.user;

let name = "";
var init = "";
Profile.findOne({'email':id},(err,found)=>{
  if(err){
    console.log(err);
  }
  else{
    Post.find({'email': id},(err,post)=>{
      if(!err){
        name = found.firstname +" "+found.lastname;
          init = found.firstname.charAt(0).toUpperCase() + found.lastname.charAt(0).toUpperCase();

        res.render("profile",{name:name,found:found,posts:post,initial:init});

      }
    });

  }
});



});
app.get("/home", function(req, res){

  var init = "";

    const id = req.session.passport.user;
     if(req.isAuthenticated()){
       Profile.findOne({'email':id},(err,found)=>{
          if(err){
            console.log(err);
          }
          else{
            init = found.firstname.charAt(0).toUpperCase() + found.lastname.charAt(0).toUpperCase();
            Post.find({}, function(err, posts){

              res.render("home", {

                posts: posts,initial:init
                });
            });

          }
        });


     }
     else{
       res.redirect("/login")
     }




});

app.get("/compose", function(req, res){
  res.render("compose");
});

app.post("/compose", function(req, res){
  const id =  req.session.passport.user;

  let name = "";
  const today = new Date();
  var options ={
    weekday:"long",
    day:"numeric",
    month:"long"
  }
  var day = today.toLocaleDateString("en-us",options);
  var time = today.toLocaleTimeString("en-us");
  var post_time = day +" "+time
  var tags = req.body.tags;
  var tags_arr = tags.split(',');


  Profile.findOne({'email':id},(err,found)=>{
    if(err){
      console.log(err);
    }
    else{
      name = found.firstname +" "+found.lastname


      const post = new Post({
        username: name,
        title: req.body.postTitle,
        content: req.body.postBody,
        count: 0,
        date: post_time,
        tags:tags_arr,
        email: id,
        img:{
          data:found.img.data,
          contentType:found.img.contentType
        }

      });


      post.save(function(err){
        if (!err){
            res.redirect("/home");
        }
      });
    }
  });


});


app.get("/edit_profile",(req,res)=>{
  res.render("edit_profile");
});

app.get("/posts/:postId", function(req, res){

const requestedPostId = req.params.postId;

  Post.findOne({_id: requestedPostId}, function(err, post){


    Comment.find({"post_id":requestedPostId},function(err,comment){

      res.render("post", {



       username:post.username,
        title: post.title,
        content: post.content,
        postId: requestedPostId,
        comments:comment

      });
    })

  });
});
app.post('/post/:postId',(req,res)=>{

  const id = req.params.postId;

  const user_id =  req.session.passport.user;
  const text = req.body.comment_info;
 count_comment +=1;


  Profile.findOne({'email':user_id},(err,found)=>{
    if(err){

      console.log(err);
    }
    else{
      const filter = {_id: id};
      // const update = {comments:next};

      Post.findOne({_id:id},(err,comment)=>{
        if(!err){

          let count = comment.count;

          count++;

          Post.findOneAndUpdate(filter,{$set:{count:count}},{new:true},(err,doc)=>{
            if(!err){

            }
          })


        }
      })



        const name = found.firstname + " "+found.lastname;
        const blog = new Comment({
          post_id: id,
          name: name,
          content: text
        });
        blog.save(function(err){
          if(!err){
            var post = "/posts/"+id;
           res.redirect(post)
          }
        })


        // Comment.findOneAndUpdate({_id:id},{"$push":{"name":name,"content":text}}).exec(function(err,found1){
        //   if(err){
        //     console.log("3");
        //     console.log(err);
        //
        //   }
        //   else{
        //     console.log("4");
        //     var post = "/posts/"+id;
        //     res.redirect(post)
        //   }
        // });

    }
  }

);

});
app.get('/delete123qwertyui',(req,res)=>{
  Post.deleteMany({}, function (err) {
    if (err){
      res.send(err);
    }
    else{
     res.send("Success")
    }

});

Comment.deleteMany({}, function (err) {
if (err){
  res.send(err);
}
else{
res.send("Success")
}

});

});
app.get('/pretoria',(req,res)=>{
   res.render("construction");
  // console.log("PRETORIA");
  // console.log(ups);
// res.render("rest",{Course:ups});
//  res.render("construction");

 // nwus.forEach((course) => {
 //   if (rooms[course.name] != null) {
 //   //  return res.redirect('/rest')
 //   }
 //   rooms[course.name] = { users: {} }
 //   //res.redirect(course.name)
 // //   Send message that new room was created
 //   nwunsp.emit('room-created', course.name)
 //
 //
 // });
});
app.get("/limpopo",(req,res)=>{
//  console.log("LIMPOPO");
// console.log(limpopo);
  //  res.render("construction");
  res.render("rest",{Course:limpopo});
 // limps.forEach((course) => {
 //   if (rooms[course.name] != null) {
 //   //  return res.redirect('/rest')
 //   }
 //   rooms[course.name] = { users: {} }
 //   //res.redirect(course.name)
 // //   Send message that new room was created
 //   nwunsp.emit('room-created', course.name)
 //
 //
 // });
});
app.get("/wits",(req,res)=>{
// console.log("WITS");
//   console.log(wits);
  //  res.render("construction")
  res.render("rest",{Course:wits});
 // wits.forEach((course) => {
 //   if (rooms[course.name] != null) {
 //   //  return res.redirect('/rest')
 //   }
 //   rooms[course.name] = { users: {} }
 //   //res.redirect(course.name)
 // //   Send message that new room was created
 //   nwunsp.emit('room-created', course.name)
 //
 //
 // });
})
app.get('/:room', (req, res) => {
     res.render("construction");
  // if (rooms[req.params.room] == null) {
  //   return res.redirect('/')
  // }
  // res.render('room', { roomName: req.params.room ,userName: userName})
});

app.get("/uni",(req,res)=>{
  if(req.isAuthenticated()){
    res.render("rest",{initial:initial});
    console.log("user successfully authenticated for uni");
  }
  else{
    console.log('user not legal');
    res.redirect("/login")
  }
});



nwunsp.on('connection', socket => {
  //console.log("user connected");
  socket.on('new-user', (room, name) => {
    //console.log("new user request");
    socket.join(room);
    rooms[room].users[socket.id] = name;
    socket.to(room).broadcast.emit('user-connected', name);
  });
  socket.on('send-chat-message', (room, message) => {
    socket.to(room).broadcast.emit('chat-message', { message: message, name: rooms[room].users[socket.id] })
    console.log("message sent");
  })
  socket.on('disconnect', () => {
    getUserRooms(socket).forEach(room => {
      socket.to(room).broadcast.emit('user-disconnected', rooms[room].users[socket.id])
      delete rooms[room].users[socket.id]
      console.log("user disconnected");
    })
  })
})

function getUserRooms(socket) {
  return Object.entries(rooms).reduce((names, [name, room]) => {
    if (room.users[socket.id] != null) names.push(name)
    return names
    console.log("user names :"+names);
  }, [])
}

function calculateWitsAps(subArray, marksArray){
  let witsAps = 0;
  for (var i = 0; i < subArray.length; i++) {
    if(subArray[i]=== 'English')
    {
       if(marksArray[i] > -1 && marksArray[i] < 30){
         witsAps+=0;

       }
       if(marksArray[i] > 29 && marksArray[i] < 40){

         witsAps+=0;
       }
       if(marksArray[i] > 39 && marksArray[i] < 50){

         witsAps+=3;
       }
       if(marksArray[i] > 49 && marksArray[i] < 60){

         witsAps+=4;
       }
       if(marksArray[i] > 59 && marksArray[i] < 70){
         witsAps+=7;

       }
       if(marksArray[i] > 69 && marksArray[i] < 80){

         witsAps+=8;
       }
       if(marksArray[i] > 79 && marksArray[i] < 90){
         witsAps+=9;
       }
       if(marksArray[i] > 89 && marksArray[i] < 101){
         witsAps+=10;
       }

    }
    else if(subArray[i]==='maths'){
      if(marksArray[i] > -1 && marksArray[i] < 30){
        witsAps+=0;
      }
      if(marksArray[i] > 29 && marksArray[i] < 40){
        witsAps+=0;
      }
      if(marksArray[i] > 39 && marksArray[i] < 50){
        witsAps+=3;
      }
      if(marksArray[i] > 49 && marksArray[i] < 60){
        witsAps+=4;
      }
      if(marksArray[i] > 59 && marksArray[i] < 70){
        witsAps+=7;
      }
      if(marksArray[i] > 69 && marksArray[i] < 80){
        witsAps+=8;
      }
      if(marksArray[i] > 79 && marksArray[i] < 90){
        witsAps+=9;
      }
      if(marksArray[i] > 89 && marksArray[i] < 101){
        witsAps+=10;
      }
    }
    else if (subArray[i]==="LO") {
      if(marksArray[i] > -1 && marksArray[i] < 30){
        witsAps+=0;
      }
      if(marksArray[i] > 29 && marksArray[i] < 40){
         console.log( subArray[i]+" mark is "+ 0);
        witsAps+=0;
      }
      if(marksArray[i] > 39 && marksArray[i] < 50){
         console.log( subArray[i]+" mark is "+ 0);
        witsAps+=0;
      }
      if(marksArray[i] > 49 && marksArray[i] < 60){
         console.log( subArray[i]+" mark is "+ 0);
        witsAps+=0;
      }
      if(marksArray[i] > 59 && marksArray[i] < 70){
        witsAps+=1;
         console.log( subArray[i]+" mark is "+ 1);
      }
      if(marksArray[i] > 69 && marksArray[i] < 80){
         console.log( subArray[i]+" mark is "+ 2);
        witsAps+=2;
      }
      if(marksArray[i] > 79 && marksArray[i] < 90){
        witsAps+=3;
         console.log( subArray[i]+" mark is "+ 3);
      }
      if(marksArray[i] > 89 && marksArray[i] < 101){
        witsAps+=4;
         console.log( subArray[i]+" mark is "+ 4);
      }
    }
    else{
      if(marksArray[i] > -1 && marksArray[i] < 30){
        witsAps+=0;
        console.log( subArray[i]+" mark is "+ 0);

      }
      if(marksArray[i] > 29 && marksArray[i] < 40){
        witsAps+=0;
        console.log( subArray[i]+" mark is "+ 0);
      }
      if(marksArray[i] > 39 && marksArray[i] < 50){
        witsAps+=3;
        console.log( subArray[i]+" mark is "+ 3);
      }
      if(marksArray[i] > 49 && marksArray[i] < 60){
        witsAps+=4;
        console.log( subArray[i]+" mark is "+ 4);
      }
      if(marksArray[i] > 59 && marksArray[i] < 70){
        witsAps+=5;
        console.log( subArray[i]+" mark is "+ 5);
      }
      if(marksArray[i] > 69 && marksArray[i] < 80){
        witsAps+=6;
        console.log( subArray[i]+" mark is "+ 6);
      }
      if(marksArray[i] > 79 && marksArray[i] < 90){
        witsAps+=7;
        console.log( subArray[i]+" mark is "+ 7);
      }
      if(marksArray[i] > 89 && marksArray[i] < 101){
        witsAps+=8;
        console.log( subArray[i]+" mark is "+ 8);
      }
    }


  }
  return witsAps;
}
function calculateNwuAps(subArray, marksArray){
  let nwuAps = 0;
  for (var i = 0; i < subArray.length; i++) {

   if (subArray[i]==="LO") {
      nwuAps +=0;
    }
    else{
      if(marksArray[i] > -1 && marksArray[i] < 30){
        nwuAps+=1;


      }
      if(marksArray[i] > 29 && marksArray[i] < 40){
        nwuAps+=2;

      }
      if(marksArray[i] > 39 && marksArray[i] < 50){
        nwuAps+=3;

      }
      if(marksArray[i] > 49 && marksArray[i] < 60){
        nwuAps+=4;

      }
      if(marksArray[i] > 59 && marksArray[i] < 70){
        nwuAps+=5;

      }
      if(marksArray[i] > 69 && marksArray[i] < 80){
        nwuAps+=6;

      }
      if(marksArray[i] > 79 && marksArray[i] < 90){
        nwuAps+=7;

      }
      if(marksArray[i] > 89 && marksArray[i] < 101){
        nwuAps+=8;

      }
    }


  }
  return nwuAps;
}
function getMathAps(math){
  let mark = 0;
  if(math >-1 && math < 30){
    mark = 1
  }
  if(math >29 && math < 40){
    mark = 2
  }
  if(math >39 && math < 50){
    mark = 3
  }
  if(math >49 && math < 60){
    mark = 4
  }
  if(math >59 && math < 70){
    mark = 5
  }
  if(math >69 && math < 80){
    mark = 6
  }
  if(math >79 && math < 101){
    mark = 7
  }
  return mark;
}


 server.listen(process.env.PORT || 5000,()=>{
  console.log("listening on port 5000");
});
