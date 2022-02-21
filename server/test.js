import  express from "express";
import bodyParser from "body-parser"
import mongoose from "mongoose";
import postRoutes from "./routes/user.js"
import passport from 'passport';
import dotenv from "dotenv";
import cors from 'cors'


const app = express();
dotenv.config()

app.use(cors());

app.use(bodyParser.json({limit:'300mb',extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(passport.initialize());
app.use(passport.session());


app.use('/',postRoutes)


const PORT = process.env.PORT || 8080;




mongoose.set('useFindAndModify',false);


if(process.env.NODE_ENV === 'production'){
   
 app.use(express.static('client/build'))
//  app.get('*', (req, res) => {
//     res.sendFile(path.join(publicPath, 'index.html'));
//  });
  
}



// mongoose.connect("mongodb://localhost:27017/schoolDB",{useNewUrlParser:true}).then(()=> 
// app.listen(PORT,()=>{ console.log("Server running at port: 5000");})).catch((err)=>{
//     console.log(err);
// });

// mongoose.connect("mongodb+srv://admin-teboho:070997@cluster0.iffup.mongodb.net/schoolDB",{useNewUrlParser:true,useUnifiedTopology:true});
// mongoose.set('useFindAndModify',false);



mongoose.connect("mongodb://localhost:27017/schoolDB",{useNewUrlParser:true,useUnifiedTopology:true}).then(()=> 
app.listen(PORT,()=>{ console.log(`Server running at port: ${PORT}`);})).catch((err)=>{
    console.log(err);
});