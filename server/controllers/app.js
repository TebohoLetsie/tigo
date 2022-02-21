import express from 'express';
import mongoose from 'mongoose';

import PostMessage,{UJ,Nwu,UPP,UL,Wits} from '../models/postSchema.js';

const router = express.Router();
let initial,userName,course_name,stream,tuition,search_count= "";

let year,universityCount,courseCount,count_comment= 0;

var search_result,nwus,ups,wits,jhb,limpopo;




export const getPosts = async (req, res) => { 
    // try {
    //     const postMessages = await PostMessage.find();
                
    //     res.status(200).json(postMessages);
    // } catch (error) {
    //     res.status(404).json({ message: error.message });
    // }
    
}
export const data = (req,res)=>{

}
export const getPost = async (req, res) => { 
    const { id } = req.params;

    try {
        const post = await PostMessage.findById(id);
        
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPost = async (req, res) => {
    console.log(req.body.HL)
    const { title, message, selectedFile, creator, tags } = req.body;

    const newPostMessage = new PostMessage({ title, message, selectedFile, creator, tags })

    try {
        await newPostMessage.save();

        res.status(201).json(newPostMessage );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const calculate = (req,res)=>{

const mark1 = Number(req.body.mark.HL);
const mark2 = Number(req.body.mark.FAL);
const mark3 = Number(req.body.mark.Math);
const mark4 = Number(req.body.mark.subject3);
const mark5 = Number(req.body.mark.subject4);
const mark6 = Number(req.body.mark.subject5);
const mark7 = Number(req.body.mark.subject6);
const markarr = [mark1,mark2,mark3,mark4,mark5,mark6,mark7];
const subArr = [req.body.subject.HL,req.body.subject.FAL,req.body.subject.Math,req.body.subject.subject3,req.body.subject.subject4,req.body.subject5,req.body.subject.subject6];
const mathType = req.body.subject.Math;
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

var demo;

if(mathType == 'maths'){

  let course_up = UPP.find({$and:[{'school.aps':{$lte:upaps}},{'subjects.math': {$lte:mathAps}}]},(err,found)=>{
    if(err){
      console.log(err);
    }
    else{

      demo =found;


    }
  });



  let course_nwu =  Nwu.find({$and:[{'school.aps':{$lte:30}},{'subjects.math':{$lte:mathAps}}]},(err,found)=>{
    if(err){
      console.log(err);
    }
    else{
      nwus = found;
     
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
  let course_ul =  UL.find({$and:[{'school.aps':{$lte:ulaps}},{'subjects.english':{$lte:mathAps}}]},(err,found)=>{
    if(err){
      console.log(err);
    }
    else{

      limpopo = found;
    }
  })
  let course_uj =  UJ.find({$and:[{'school.aps':{$lte:ujaps}},{'subjects.math':{$lte:mathAps}}]},(err,found)=>{
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
                // res.status(201).json({NwuNo:count2,NwuAps:nwuaps,UpNo:count1,UpAps:upaps,
                //   WitsNo:count_wits,WitsAps:witsAps,ULNo:count_ul,  ULAps:ulaps,UjNo:count_uj,UjAps:ujaps,Course:courseCount,University: universityCount});
                res.status(201).json({NwuNo:count2,NwuAps:nwuaps,UpNo:count1,UpAps:upaps,
                     WitsNo:count_wits,WitsAps:witsAps,ULNo:count_ul,  ULAps:ulaps,UjNo:count_uj,UjAps:ujaps,Course:courseCount,University: universityCount})
                nwuaps = 0;
                upaps = 0;
              })
            })
          })




        });


    });


}
 else if (mathType === "mathsL") {

   var aps_count =    Nwu.find({$and:[{'school.aps': {$lte:nwuaps}},{'subjects.mathLit':{$lte:mathAps}},{'subjects.math':{$lte:0}}]},(err,found)=>{
       if(err){


         console.log(err);

      }
      else{
             nwus = found;

      }
    });
    var up_count =    UPP.find({$and:[{'school.aps': {$lte:upaps}},{'subjects.mathLit': {$lte:mathAps}},{'subjects.math':{$lte:0}}]},(err,found)=>{
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
      var uj_aps =  UJ.find({$and:[{'school.aps': {$lte:ujaps}},{'subjects.mathLit':{$lte:mathAps}},{'subjects.math':{$lte:0}}]},(err,found)=>{
          if(err){
          console.log(err);
         }
         else{
          // console.log(found);
         }
       });
       var ul_aps =  UL.find({$and:[{'school.aps': {$lte:ulaps}},{'subjects.mathLit':{$lte:mathAps}},{'subjects.math':{$lte:0}}]},(err,found)=>{
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


}

export const updatePost = async (req, res) => {
    const { id } = req.params;
    const { title, message, creator, selectedFile, tags } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPost = { creator, title, message, tags, selectedFile, _id: id };

    await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedPost);
}

export const deletePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await PostMessage.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}

export const likePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    
    const post = await PostMessage.findById(id);

    const updatedPost = await PostMessage.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true });
    
    res.json(updatedPost);
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

export default router;