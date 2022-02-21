const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
 mongoose.connect("mongodb://localhost:27017/schoolDB",{useNewUrlParser:true});
//mongoose.connect("mongodb+srv://admin-teboho:070997@cluster0.iffup.mongodb.net/schoolDB",{useNewUrlParser:true});

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


const course2 = new UL({
  name : "Extended Law",
  code: "LLB",
  years: "5 years",
  stream: "Law",
  school:{
    name:["UL"],
    aps:[26]
  },
  subjects:{
    lifeScience: 0,
    mathLit: 0,
    english: 0,
    math: 5,
    physics: 0,
    economics: 0
  },
    career:["Magistrate","Advocate","Attorney","Commissioner"]
});
const course3 = new UL({
  name : "Law",
  code: "LLB",
  years: "4 years",
  stream: "Law",
  school:{
    name:["UL"],
    aps:[30]
  },
  subjects:{
    lifeScience: 0,
    mathLit: 0,
    english: 5,
    math: 0,
    physics: 0,
    economics: 0
  },
  career:["Magistrate","Advocate","Attorney","Commissioner"]


});

//Science and Agriculture
const course4 = new UL({
  name : "Life Sciences Stream",
  code: "BSc",
  years: "3 years",
  stream: "Science",
  school:{
    name:["UL"],
    aps:[26]
  },
  subjects:{
    lifeScience: 4,
    mathLit: 0,
    english: 4,
    math: 5,
    physics: 5,
    economics: 0
  },
    career:["Biotechnology related Occupancies","Environmental Management","Entomology","Environmental Impact Consultant"]
});
const course5 = new UL({
  name : "Extended Life Sciences Stream",
  code: "BSc",
  years: "4 years",
  stream: "Science",
  school:{
    name:["UL"],
    aps:[22]
  },
  subjects:{
    lifeScience: 3,
    mathLit: 0,
    english: 4,
    math: 4,
    physics: 0,
    economics: 0
  },
  career:["Biotechnology related Occupancies","Environmental Management","Entomology","Environmental Impact Consultant"]

});

//Education

const course8 = new UL({
  name : "Senior and Further Education and Training",
  code: "BEd",
  years: "4 years",
  stream: "Education",
  school:{
    name:["UL"],
    aps:[24]
  },
  subjects:{
    lifeScience: 0,
    mathLit: 0,
    english: 4,
    math: 0,
    physics: 0,
    economics: 0
  }
});

//Natural and agricultural Science
const course9 = new UL({
  name : "Mathematical Sciences Stream",
  code: "BSc",
  years: "3 years",
  stream: "Science And Agriculture",
  school:{
    name:["UL"],
    aps:[24]
  },
  subjects:{
    lifeScience: 0,
    mathLit: 0,
    english: 4,
    math: 5,
    physics: 5,
    economics: 0
  },
  career:["System Analysts","Computer Programmers","Aerospace Engineer","Statisticians"]
});
const course10 = new UL({
  name : "Extended Mathematical Sciences Stream",
  code: "BSc",
  years: "3 years",
  stream: "Science And Agriculture",
  school:{
    name:["UL"],
    aps:[22]
  },
  subjects:{
    lifeScience: 0,
    mathLit: 0,
    english: 4,
    math: 4,
    physics: 4,
    economics: 0
  },
  career:["System Analysts","Computer Programmers","Aerospace Engineer","Statisticians"]
});
const course11 = new UL({
  name : "Agricultural Management",
  code: "BAgricMan",
  years: "3 years",
  stream: "Science And Agriculture",
  school:{
    name:["UL"],
    aps:[24]
  },
  subjects:{
    lifeScience: 4,
    mathLit: 0,
    english: 4,
    math: 3,
    physics: 0,
    economics: 0
  },
  career:["Agricultural Extension Officers","Farm Managers","Research Assistant"]
});
const course12 = new UL({
  name : "Agricultural Economics",
  code: "BSc",
  years: "4 years",
  stream: " Science and Agriculture",
  school:{
    name:["UL"],
    aps:[24]
  },
  subjects:{
    lifeScience: 4,
    mathLit: 0,
    english: 4,
    math: 4,
    physics: 4,
    economics: 0
  },
  career:["Pulic and Private Sector","Agricultural Economist","Farm Manager"]
});
const course13 = new UL({
  name : "Plant Production",
  code: "BSc",
  years: "4 years",
  stream: "Science and Agriculture",
  school:{
    name:["UL"],
    aps:[24]
  },
  subjects:{
    lifeScience: 4,
    mathLit: 0,
    english: 4,
    math: 4,
    physics: 4,
    economics: 0
  },
  career:["Pulic and Private Sector","Agronomist","Farm Manager"]

});
const course14 = new UL({
  name : "Animal Production",
  code: "BSc",
  years: "4 years",
  stream: "Science and Agriculture",
  school:{
    name:["UL"],
    aps:[24]
  },
  subjects:{
    lifeScience: 4,
    mathLit: 0,
    english: 4,
    math: 4,
    physics: 4,
    economics: 0
  },
  career:["Pulic and Private Sector","Animal Breeder","Livestock Scientist"]

});
const course15 = new UL({
  name : "Soil Science",
  code: "BSc",
  years: "4 years",
  stream: "Science and Agriculture",
  school:{
    name:["UL"],
    aps:[25]
  },
  subjects:{
    lifeScience: 4,
    mathLit: 0,
    english: 4,
    math:4,
    physics: 5,
    economics: 0
  },
  career:["Soil Scientist","Soil Analyst","Laboratory Manager"]

});

const course16 = new UL({
  name : "Environmental and Resource Studies",
  code: "BSc",
  years: "4 years",
  stream: "Science and Agriculture",
  school:{
    name:["UL"],
    aps:[24]
  },
  subjects:{
    lifeScience: 4,
    mathLit: 0,
    english: 4,
    math: 4,
    physics: 0,
    economics: 0
  },
  career:["Environmental Officers","Development Planner","Cartographer"]

});
const course17 = new UL({
  name : "Water and Sanitation Science",
  code: "BSc",
  years: "4 years",
  stream: "Science and Agriculture",
  school:{
    name:["UL"],
    aps:[24]
  },
  subjects:{
    lifeScience: 4,
    mathLit: 0,
    english: 4,
    math: 5,
    physics: 4,
    economics: 0
  }
});

const course18 = new UL({
  name : "Extended Physics",
  code: "BSc",
  years: "3 years",
  stream: "Science and Agriculture",
  school:{
    name:["UL"],
    aps:[22]
  },
  subjects:{
    lifeScience: 3,
    mathLit: 0,
    english: 4,
    math: 4,
    physics: 4,
    economics: 0
  },
  career:["Physicists","Chemical Industry","Consultancy"]
});

const course19 = new UL({
  name : "Geology",
  code: "BSc",
  years: "3 years",
  stream: "Science and Agriculture",
  school:{
    name:["UL"],
    aps:[26]
  },
  subjects:{
    lifeScience: 0,
    mathLit: 0,
    english: 4,
    math: 5,
    physics: 5,
    economics: 0
  },
  career:["Geologist","Earth Scientist","Hydrologist"]
});

//health Science
const course69 = new UL({
  name : "Medicine and Surgery",
  code: "MBChB",
  years: "6 years",
  stream: "Health Sciences",
  school:{
    name:["UL"],
    aps:[27]
  },
  subjects:{
    lifeScience: 5,
    mathLit: 0,
    english: 4,
    math: 5,
    physics: 5,
    economics: 0
  },
  career:["General Practitioner","Medical Research Institutes"]
});
const course70 = new UL({
  name : "Optometry",
  code: "BOptom",
  years: "4 years",
  stream: "Health Sciences",
  school:{
    name:["UL"],
    aps:[27]
  },
  subjects:{
    lifeScience: 5,
    mathLit: 0,
    english: 4,
    math: 5,
    physics: 5,
    economics: 0
  },
  career:["Optometrist"]
});
const course71 = new UL({
  name : "Dietetics",
  code: "BSc",
  years: "4 years",
  stream: "Health Sciences",
  school:{
    name:["UL"],
    aps:[26]
  },
  subjects:{
    lifeScience: 5,
    mathLit: 0,
    english: 4,
    math: 4,
    physics: 5,
    economics: 0
  }
});
const course72 = new UL({
  name : "Medical Science",
  code: "Bsc",
  years: "4 years",
  stream: "Health Sciences",
  school:{
    name:["UL"],
    aps:[26]
  },
  subjects:{
    lifeScience: 5,
    mathLit: 0,
    english: 4,
    math: 4,
    physics: 5,
    economics: 0
  },
  career:["Medical Scientist","Laboratory Researchers"]
});
const course73 = new UL({
  name : "Nursing",
  code: "BNurs",
  years: "4 years",
  stream: "Health Sciences",
  school:{
    name:["UL"],
    aps:[26]
  },
  subjects:{
    lifeScience: 5,
    mathLit: 0,
    english: 4,
    math: 5,
    physics: 5,
    economics: 0
  },
  career:["Mid-Wife","General Nurse","Community Nurse","Psychiatric Nurse"]
});
const course74 = new UL({
  name : "Pharmacy",
  code: "BPharm",
  years: "4 years",
  stream: "Health Sciences",
  school:{
    name:["UL"],
    aps:[24]
  },
  subjects:{
    lifeScience: 5,
    mathLit: 0,
    english: 4,
    math: 5,
    physics: 5,
    economics: 0
  },
  career:["Retail Medicine","Medical Control Center","Industrial Environment"]
});

//Humanities

const course92 = new UL({
  name : "Criminology and Psychology Stream",
  code: "BA",
  years: "3 years",
  stream: "Humanities",
  school:{
    name:["UL"],
    aps:[25]
  },
  subjects:{
    lifeScience: 0,
    mathLit: 5,
    english: 4,
    math: 3,
    physics: 0,
    economics: 0
  },
  career:["Psychometrist","Private Investigator","Correctional Officer","Crime Scene Expert"]
});
const course93 = new UL({
  name : "Cultural Studies Stream",
  code: "BA",
  years: "3 years",
  stream: "Humanities",
  school:{
    name:["UL"],
    aps:[25]
  },
  subjects:{
    lifeScience: 0,
    mathLit: 5,
    english: 4,
    math: 3,
    physics: 0,
    economics: 0
  },
  career:["Development Officer","Cultural Officer","Community Officer"]

});
const course94 = new UL({
  name : "Sociology and Anthropology Stream",
  code: "BA",
  years: "3 years",
  stream: "Humanities",
  school:{
    name:["UL"],
    aps:[25]
  },
  subjects:{
    lifeScience: 0,
    mathLit: 05,
    english: 4,
    math: 3,
    physics: 0,
    economics: 0
  },
  career:["Labour Relations Specialist","Research Officer","Population Analyst"]

});
const course95 = new UL({
  name : "Political Studies Steam",
  code: "BA",
  years: "3 years",
  stream: "Humanities",
  school:{
    name:["UL"],
    aps:[25]
  },
  subjects:{
    lifeScience: 0,
    mathLit: 0,
    english: 4,
    math: 0,
    physics: 0,
    economics: 0
  },
  career:["Political Analysts","Politician"]

});
const course96 = new UL({
  name : "Psychology",
  code: "BPsych",
  years: "4 years",
  stream: "Humanities",
  school:{
    name:["UL"],
    aps:[25]
  },
  subjects:{
    lifeScience: 0,
    mathLit: 5,
    english: 4,
    math: 3,
    physics: 0,
    economics: 4
  },
  career:["Psychometrist","Employee Assistance Practitioner"]
});
const course97 = new UL({
  name : "Extended Criminology and Psychology Stream",
  code: "BA",
  years: "4 years",
  stream: "Humanities",
  school:{
    name:["UL"],
    aps:[24]
  },
  subjects:{
    lifeScience: 0,
    mathLit: 5,
    english: 4,
    math: 3,
    physics: 0,
    economics: 0
  },
  career:["Psychometrist","Private Investigator","Correctional Officer","Crime Scene Expert"]
});
const course98 = new UL({
  name : "Social Work",
  code: "BSW",
  years: "4 years",
  stream: "Humanities",
  school:{
    name:["UL"],
    aps:[25]
  },
  subjects:{
    lifeScience: 0,
    mathLit: 5,
    english: 4,
    math: 3,
    physics: 0,
    economics: 0
  },
  career:["Social Worker","Counsellor","Employee Assistance Practitioner"]
});
const course99 = new UL({
  name : "Languages",
  code: "BA",
  years: "3 years",
  stream: "Humanities",
  school:{
    name:["UL"],
    aps:[25]
  },
  subjects:{
    lifeScience: 0,
    mathLit: 0,
    english: 4,
    math: 0,
    physics: 0,
    economics: 4
  },
  career:["Language Practitioner"]
});
const course100 = new UL({
  name : "Translation and Linguistics Stream",
  code: "BA",
  years: "3 years",
  stream: "Humanities",
  school:{
    name:["UL"],
    aps:[25]
  },
  subjects:{
    lifeScience: 0,
    mathLit: 0,
    english: 4,
    math: 0,
    physics: 0,
    economics: 0
  },
  career:["Language Practitioner","Interpreter","Translator"]
});
const course101 = new UL({
  name : "Performing Arts",
  code: "BA",
  years: "3 years",
  stream: "Humanities",
  school:{
    name:["UL"],
    aps:[25]
  },
  subjects:{
    lifeScience: 0,
    mathLit: 0,
    english: 4,
    math: 0,
    physics: 0,
    economics: 5
  },
  career:["Performing Artist","Dramatist","Script Writer"]
});
const course102 = new UL({
  name : "Information Studies",
  code: "BInf",
  years: "34 years",
  stream: "Humanities",
  school:{
    name:["UL"],
    aps:[25]
  },
  subjects:{
    lifeScience: 0,
    mathLit: 0,
    english: 4,
    math: 0,
    physics: 0,
    economics: 0
  },
  career:["Indexer","Abstractor","Librarian"]
});
const course103 = new UL({
  name : "Contemporary English and Multilingual Studies",
  code: "BA",
  years: "3 years",
  stream: "Humanities",
  school:{
    name:["UL"],
    aps:[25]
  },
  subjects:{
    lifeScience: 0,
    mathLit: 0,
    english: 4,
    math: 0,
    physics: 0,
    economics: 0
  },
  career:["Bilingual Expert","Interpreter","Translator"]
});
const course104 = new UL({
  name : "Communication Studies",
  code: "BA",
  years: "3 years",
  stream: "Humanities",
  school:{
    name:["UL"],
    aps:[25]
  },
  subjects:{
    lifeScience: 0,
    mathLit: 0,
    english: 4,
    math: 0,
    physics: 0,
    economics: 0
  },
  career:["Public Relations Officer","Community Practitioner","Sales Promoter"]
});
const course105 = new UL({
  name : "Media Studies",
  code: "BA",
  years: "3 years",
  stream: "Humanities",
  school:{
    name:["UL"],
    aps:[25]
  },
  subjects:{
    lifeScience: 0,
    mathLit: 0,
    english: 4,
    math: 0,
    physics: 0,
    economics: 0
  },
  career:["Radio Broadcasting","Journalist","Radio and Film Producer"]
});

const course106 = new UL({
  name : "Media Studies",
  code: "BA",
  years: "3 years",
  stream: "Humanities",
  school:{
    name:["UL"],
    aps:[23]
  },
  subjects:{
    lifeScience: 0,
    mathLit: 0,
    english: 4,
    math: 0,
    physics: 0,
    economics: 0
  },
  career:["Radio Broadcasting","Journalist","Radio and Film Producer"]
});

//Economic and Management Sciences
const course111 = new UL({
  name : "Accountancy",
  code: "BCom",
  years: "3 years",
  stream: "Management",
  school:{
    name:["UL"],
    aps:[28]
  },
  subjects:{
    lifeScience: 0,
    mathLit: 0,
    english: 4,
    math: 4,
    physics: 0,
    economics: 0
  },
  career:["Management Accountants","Internal Auditors","Consultants","Business Entrepreneurs","Accountants"]
});
const course112 = new UL({
  name : "Accountancy",
  code: "BAcc",
  years: "4 years",
  stream: "Management",
  school:{
    name:["UL"],
    aps:[30]
  },
  subjects:{
    lifeScience: 0,
    mathLit: 0,
    english: 4,
    math: 4,
    physics: 0,
    economics: 0
  },
  career:["Management Accountants","Internal Auditors","Consultants","Business Entrepreneurs","Accountants"]

});
const course113 = new UL({
  name : "Accountancy",
  code: "BCom",
  years: "4 years",
  stream: "Management",
  school:{
    name:["UL"],
    aps:[26]
  },
  subjects:{
    lifeScience: 0,
    mathLit: 0,
    english: 4,
    math: 4,
    physics: 0,
    economics: 0
  },
  career:["Management Accountants","Internal Auditors","Consultants","Business Entrepreneurs","Accountants"]

});

const course114 = new UL({
  name : "Human Resource Management",
  code: "BCom",
  years: "3 years",
  stream: "Management",
  school:{
    name:["UL"],
    aps:[26]
  },
  subjects:{
    lifeScience: 0,
    mathLit: 3,
    english: 4,
    math: 3,
    physics: 0,
    economics: 0
  },
  career:["Marketing Officer","Human Resource Practitioner","Purchasing Officer","Business Entrepreneurs"]

});
const course115 = new UL({
  name : "Business Management",
  code: "BCom",
  years: "3 years",
  stream: "Economic and Management Sciences",
  school:{
    name:["UL"],
    aps:[26]
  },
  subjects:{
    lifeScience: 0,
    mathLit: 3,
    english: 4,
    math: 3,
    physics: 0,
    economics: 0
  },
  career:["Financial Officer","Human Resource Practitioner","Purchasing Officer","Business Entrepreneurs"]

});
const course116 = new UL({
  name : "Extended Human Resource Management",
  code: "BCom",
  years: "4 years",
  stream: "Management",
  school:{
    name:["UL"],
    aps:[22]
  },
  subjects:{
    lifeScience: 0,
    mathLit: 3,
    english: 4,
    math: 3,
    physics: 0,
    economics: 0
  },
  career:["Marketing Officer","Human Resource Practitioner","Purchasing Officer","Business Entrepreneurs"]

});
const course117 = new UL({
  name : "Extended Business Mangement",
  code: "BCom",
  years: "4 years",
  stream: "Management",
  school:{
    name:["UL"],
    aps:[22]
  },
  subjects:{
    lifeScience: 0,
    mathLit: 3,
    english: 4,
    math: 3,
    physics: 0,
    economics: 0
  },
  career:["Marketing Officer","Human Resource Practitioner","Purchasing Officer","Business Entrepreneurs"]

});
const course118 = new UL({
  name : "Economics",
  code: "BCom",
  years: "3 years",
  stream: "Management",
  school:{
    name:["UL"],
    aps:[26]
  },
  subjects:{
    lifeScience: 0,
    mathLit: 3,
    english: 4,
    math: 3,
    physics: 0,
    economics: 4
  },
  career:["Economist","Consultants","Business Entrepreneurs"]

});
const course119 = new UL({
  name : "Extended Economics",
  code: "BCom",
  years: "4 years",
  stream: "Economic and Management Sciences",
  school:{
    name:["UL"],
    aps:[24]
  },
  subjects:{
    lifeScience: 0,
    mathLit: 3,
    english: 4,
    math: 3,
    physics: 0,
    economics: 4
  },
  career:["Economist","Consultants","Business Entrepreneurs"]

});
const course120 = new UL({
  name : "Administration",
  code: "BAdmin",
  years: "3 years",
  stream: "Economic and Management Sciences",
  school:{
    name:["UL"],
    aps:[26]
  },
  subjects:{
    lifeScience: 0,
    mathLit: 0,
    english: 4,
    math: 0,
    physics: 0,
    economics: 0
  },
  career:["Local Government Practitioners","Public Relations Practitioner","Consultants"]

});
const course121 = new UL({
  name : "Local Government",
  code: "BAdmin",
  years: "3 years",
  stream: "Economic and Management Sciences",
  school:{
    name:["UL"],
    aps:[26]
  },
  subjects:{
    lifeScience: 0,
    mathLit: 0,
    english: 4,
    math: 0,
    physics: 0,
    economics: 0
  },
  career:["Project Managers","Local Government Officers","Consultants"]

});
const course122 = new UL({
  name : "Planning and Management",
  code: "BDev",
  years: "3 years",
  stream: "Economic and Management Sciences",
  school:{
    name:["UL"],
    aps:[26]
  },
  subjects:{
    lifeScience: 0,
    mathLit: 5,
    english: 4,
    math: 3,
    physics: 0,
    economics: 4
  },
  career:["Development Environmental Managers","Facilitators","Planners"]

});












app.get('/',(req,res)=>{

  const courseArray = [course2,course3,course4,course5,course8,course9,course10,course11,course12,course13,course14,course15,course16,
  course17,course18,course19,course69,
  course70,course71,course72,course73,course74,course92,course93,course94,
  course95,course96,course97,course98,course99,course100,course101,course102,course103,
  course104,course105,course106,course111,course112,course113,
  course114,course115,course116,course117,course118,course119,course120,course121,course122];


  UL.find((err,items)=>{
    if(items.length == 0){
      UL.insertMany(courseArray,(err)=>{
        if(err){
          console.log("did not insert");
        }
        else{
          console.log("Inserted");
        }
      });
      console.log("not found");
        //res.render("economics");
    }
    else{
      console.log("found");
      //res.render("economics");
    }
  });


  });



app.listen(2000,()=>{
  console.log("nwu server running");
});
