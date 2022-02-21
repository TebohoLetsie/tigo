const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
// mongoose.connect("mongodb://localhost:27017/schoolDB",{useNewUrlParser:true});
mongoose.connect("mongodb+srv://admin-teboho:070997@cluster0.iffup.mongodb.net/schoolDB",{useNewUrlParser:true});


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

const Wits = mongoose.model("Wit",witsSchema);


//economic and management Sciences
const course1 = new Wits({
  name : "Accounting  Science",
  code: "BCom",
  years: "3 years",
  stream: "economic and management sciences",
  school:{
    name:["Wits"],
    aps:[42]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 6,
    physics: 0,
    lifeScience: 0

  },

  career:["Charted Accountant","Fund Manager","Internal Auditor"]

});

const course2 = new Wits({
  name : "General",
  code: "BCom",
  years: "3 years",
  stream: "Accountancy",
  school:{
    name:["Wits"],
    aps:[39]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 5,
    physics: 0,
    lifeScience: 0

  },
  career:["Chartered Certified Accountant","Internal Auditor","Management Accountant"]

});

const course3 = new Wits({
  name : "Information Science",
  code: "BCom",
  years: "3 years",
  stream: "Accountancy",
  school:{
    name:["Wits"],
    aps:[39]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 5,
    physics: 0,
    lifeScience: 0

  },
  career:["system analyst","application developer","change manager"],

});

const course4 = new Wits({
  name : "Economics Science",
  code: "BEconSci",
  years: "3 years",
  stream: "Economic and Business Sciences",
  school:{
    name:["Wits"],
    aps:[42]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 6,
    physics: 0,
    lifeScience: 0

  },
  career:["analyst","economist","manager","economic consultants"],

});


//health sciences
const course5 = new Wits({
  name : "Dental Science",
  code: "BDS",
  years: "5 years",
  stream: "Health Sciences",
  school:{
    name:["Wits"],
    aps:[35]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 5,
    physics: 5,
    lifeScience: 5

  },
  career:["Dentist","Specialist","Academics"],

});

const course6 = new Wits({
  name : "Oral Health",
  code: "BOHS",
  years: "3 years",
  stream: "Health Sciences",
  school:{
    name:["Wits"],
    aps:[25]
  },
  subjects:{
    accounting: 0,
    mathLit: 7,
    english: 4,
    math: 4,
    physics: 4,
    lifeScience: 4

  },
  career:["Oral hygienists"],

});


const course7 = new Wits({
  name : "Nursing",
  code: "BNurs",
  years: "4 years",
  stream: "Health Sciences",
  school:{
    name:["Wits"],
    aps:[28]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 4,
    math: 4,
    physics: 4,
    lifeScience: 4

  },
  career:["General nursing","midwifery","community nursing"],

});
const course8 = new Wits({
  name : "Occupational Therapy",
  code: "BSc(OT)",
  years: "4 years",
  stream: "Health Sciences",
  school:{
    name:["Wits"],
    aps:[30]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 4,
    math: 4,
    physics: 5,
    lifeScience: 5

  },
  career:["Age Care Facilities","Private Practice","Home Care Services"],

});
const course9 = new Wits({
  name : "Physiotherapy",
  code: "BPhysio",
  years: "4 years",
  stream: "Health Sciences",
  school:{
    name:["Wits"],
    aps:[30]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 5,
    physics: 5,
    lifeScience: 5

  },
  career:["Physiotherapist"],

});

const course10 = new Wits({
  name : "Clinical Medical Practice",
  code: "BCMP",
  years: "3 years",
  stream: "Health Sciences",
  school:{
    name:["Wits"],
    aps:[25]
  },
  subjects:{
    accounting: 0,
    mathLit: 7,
    english: 4,
    math: 4,
    physics: 4,
    lifeScience: 4

  },
  career:["Clinical associate","Specialist","Academics"],

});
const course11 = new Wits({
  name : "Medicine and Surgery",
  code: "MBChB",
  years: "6 years",
  stream: "Health Sciences",
  school:{
    name:["Wits"],
    aps:[35]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 5,
    physics: 5,
    lifeScience: 5

  },
  career:["General Medical practitioner","Specialist","Academics"],
  scarcity:4
});
const course12 = new Wits({
  name : "Sport Science",
  code: "BSportSci",
  years: "3 years",
  stream: "Health Sciences",
  school:{
    name:["Wits"],
    aps:[35]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 4,
    math: 4,
    physics: 4,
    lifeScience: 0

  },
  career:["biokinetics","Sport Scince research","teaching"],
  scarcity:4
});





//Engineering
const course13 = new Wits({
  name : "Industrial Engineering",
  code: "BScEng",
  years: "4 years",
  stream: "Engineering",
  school:{
    name:["Wits"],
    aps:[42]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 4,
    math: 0,
    physics: 0,
    lifeScience: 0

  },
  career:["Inventory Engineer","Logistic Engineer","Process Engineer"],

});

const course14 = new Wits({
  name : "Chemical Engineering",
  code: "BScEng",
  years: "4 years",
  stream: "Engineering",
  school:{
    name:["Wits"],
    aps:[42]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 5,
    physics: 5,
    lifeScience: 0

  },

  career:["Biomedical Engineer","Environmental Engineer","Food Processing Engineer"]

});
const course15 = new Wits({
  name : "Civil Engineering",
  code: "BEng",
  years: "4 years",
  stream: "Engineering",
  school:{
    name:["Wits"],
    aps:[42]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 5,
    physics: 5,
    lifeScience: 0

  },
  career:["Bridge Engineer","Hydrologist","Structural Engineer"],

});

const course16 = new Wits({
  name : "Electrical Engineering",
  code: "BScEng",
  years: "4 years",
  stream: "Engineering",
  school:{
    name:["Wits"],
    aps:[42]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 5,
    physics: 5,
    lifeScience: 0

  },
  career:["Antennas Engineer","Control and Automation Engineer","Power Systems Manager"],

});

const course17 = new Wits({
  name : "Aeronautical Engineering",
  code: "BScEng",
  years: "4 years",
  stream: "Engineering",
  school:{
    name:["Wits"],
    aps:[42]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 5,
    physics: 5,
    lifeScience: 0

  },
  career:["Aircraft Design Engineer","Airline Manager","Technical Director"],

});

const course18 = new Wits({
  name : "Digital Arts",
  code: "BScEng",
  years: "4 years",
  stream: "Engineering",
  school:{
    name:["Wits"],
    aps:[42]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 5,
    physics: 5,
    lifeScience: 0

  },
  career:["Animation","Game Design","Software Engineer"],

});

const course19 = new Wits({
  name : "Mechanical Engineering",
  code: "BScEng",
  years: "4 years",
  stream: "Engineering",
  school:{
    name:["Wits"],
    aps:[42]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 5,
    physics: 5,
    lifeScience: 0

  },

  career:["Systems Engineer","Transport Engineer","Energy Engineer"],

});

const course20 = new Wits({
  name : "Metallurgical and Mineral Engineering",
  code: "BScEng",
  years: "4 years",
  stream: "Engineering",
  school:{
    name:["Wits"],
    aps:[42]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 5,
    physics: 5,
    lifeScience: 0

  },
  career:["Corrosion Engineer","Extractive Metallurgist","Failure Analysis Consultant"],

});

const course21 = new Wits({
  name : "Mining Engineering",
  code: "BScEng",
  years: "4 years",
  stream: "Engineering",
  school:{
    name:["Wits"],
    aps:[42]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 5,
    physics: 5,
    lifeScience: 0

  },
  career:["Blasting Engineer","Consulting Mining Engineer","Mine Manager"],

});

const course22 = new Wits({
  name : "Biomedical Engineering",
  code: "BScEng",
  years: "4 years",
  stream: "Engineering",
  school:{
    name:["Wits"],
    aps:[42]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 5,
    physics: 5,
    lifeScience: 0

  },
  career:["Artificial Organs","Therapeutic Equipment Design","Information Technology for Healthcare"],

});

//built environment

const course23 = new Wits({
  name : "Architectural Studies",
  code: "BAS",
  years: "3 years",
  stream: "built environment",
  school:{
    name:["Wits"],
    aps:[34]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 4,
    math: 4,
    physics: 0,
    lifeScience: 0

  },
  career:["Architect","Draughtsperson","Landscape Designer"]

});

const course24 = new Wits({
  name : "Construction Studies",
  code: "BSc",
  years: "3 years",
  stream: "built environment",
  school:{
    name:["Wits"],
    aps:[36]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 5,
    physics: 0,
    lifeScience: 0

  },
  career:["Project Management","Subcontractor","Project Management"],

});

const course25 = new Wits({
  name : "Property Studies",
  code: "BSc",
  years: "4 years",
  stream: "built environment",
  school:{
    name:["Wits"],
    aps:[36]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 5,
    physics: 0,
    lifeScience: 0

  },
  career:["Banking","Property Management","Consulting"]

});


const course26 = new Wits({
  name : "Urban and Regional Planning",
  code: "BSc",
  years: "3 years",
  stream: "built environment",
  school:{
    name:["Wits"],
    aps:[36]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 5,
    physics: 0,
    lifeScience: 0

  },


  career:["Town and Regional Planner","Development Prationer","Damage Assesor"]

});




//Law
const course27 = new Wits({
  name : "Law",
  code: "LLB",
  years: "4 years",
  stream: "Law",
  school:{
    name:["Wits"],
    aps:[43]
  },
  subjects:{
    accounting: 0,
    mathLit: 6,
    english: 6,
    math: 5,
    physics: 0,
    lifeScience: 0
  },
    career: ["Attorneys","Advocates","Prosecutor"]
});
//Humanities
const course29 = new Wits({
  name : "General",
  code: "BA",
  years: "3 years",
  stream: "Humanties",
  school:{
    name:["Wits"],
    aps:[34]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 0,
    physics: 0,
    lifeScience: 0

  },
  career:["Clinical","Counselling","Research Psychologist"],
  scarcity:4
});
const course30 = new Wits({
  name : "Digital Art",
  code: "BA",
  years: "4 years",
  stream: "Humanties",
  school:{
    name:["Wits"],
    aps:[34]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 0,
    physics: 0,
    lifeScience: 0

  },
  career:["Animator","Game Writer","VR Developer"],
  scarcity:4
});
const course31 = new Wits({
  name : "Audiology",
  code: "BA",
  years: "4 years",
  stream: "Humanties",
  school:{
    name:["Wits"],
    aps:[34]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 4,
    physics: 0,
    lifeScience: 0

  },
  career:["Community Work and Outreach","Private Practice"],
  scarcity:4
});

const course32 = new Wits({
  name : "Law",
  code: "BA",
  years: "3 years",
  stream: "Humanties",
  school:{
    name:["Wits"],
    aps:[43]
  },
  subjects:{
    accounting: 0,
    mathLit: 4,
    english: 5,
    math: 3,
    physics: 0,
    lifeScience: 0

  },
  career:["Lawyer"],
  scarcity:4
});


const course33 = new Wits({
  name : "Fine Arts",
  code: "BA",
  years: "4 years",
  stream: "Humanties",
  school:{
    name:["Wits"],
    aps:[34]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 0,
    physics: 0,
    lifeScience: 0

  },
  career:["Gallery Manager","Art Facilitator","Curator"],
  scarcity:4
});

const course34 = new Wits({
  name : "Film and Television",
  code: "BA",
  years: "4 years",
  stream: "Humanties",
  school:{
    name:["Wits"],
    aps:[34]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 0,
    physics: 0,
    lifeScience: 0

  },
  career:["Director","Editor","Film-Maker"],
  scarcity:4
});

const course35 = new Wits({
  name : "Music",
  code: "BMus",
  years: "4 years",
  stream: "Humanties",
  school:{
    name:["Wits"],
    aps:[34]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 0,
    physics: 0,
    lifeScience: 0

  },
  career:["Composing","Music Therapy","Perfomance","Conducting"],
  scarcity:4
});
const course36 = new Wits({
  name : "Dramatic Art",
  code: "BDram",
  years: "4 years",
  stream: "Humanties",
  school:{
    name:["Wits"],
    aps:[34]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 0,
    physics: 0,
    lifeScience: 0

  },
  career:["Actors","Choreographer","Designer","Theorist"],
  scarcity:4
});
//Natural and Agricultural_Sciences

const course37 = new Wits({
  name : "Microbiology and Biotechnology",
  code: "BSc",
  years: "3 years",
  stream: "Biological Science",
  school:{
    name:["Wits"],
    aps:[40]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 5,
    physics: 0,
    lifeScience: 0

  },
  career:["Brewing","Food Security","Nanotechnology"]
});

const course38 = new Wits({
  name : "Chemistry",
  code: "BSc",
  years: "3 years",
  stream: "Physical Science",
  school:{
    name:["Wits"],
    aps:[40]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 6,
    physics: 5,
    lifeScience: 0

  },
  career:["Consultants","Adminiatrators","Applied Chemical Research"]
});

const course39 = new Wits({
  name : "Physics",
  code: "BSc",
  years: "3 years",
  stream: "Physical Science",
  school:{
    name:["Wits"],
    aps:[40]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 6,
    physics: 5,
    lifeScience: 0

  },
  career:["Physics Research","Education","Environmental Science"]
});

const course40 = new Wits({
  name : "Geographical and Archaeological Sciences",
  code: "BSc",
  years: "3 years",
  stream: "Physical Sciences",
  school:{
    name:["Wits"],
    aps:[40]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 5,
    physics: 0,
    lifeScience: 0

  },
  career:["Climate Change","Biodiversity Conservation","Ecosystem Services"]
});

const course41 = new Wits({
  name : "Geospatial Science",
  code: "BSc",
  years: "3 years",
  stream: "Physical Sciences",
  school:{
    name:["Wits"],
    aps:[40]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 5,
    physics: 0,
    lifeScience: 0

  },
  career:["Remote Sensing Scientist","Surveyor"]
});
const course42 = new Wits({
  name : "Geological Sciences",
  code: "BSc",
  years: "3 years",
  stream: "Physical Sciences",
  school:{
    name:["Wits"],
    aps:[40]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 6,
    physics: 5,
    lifeScience: 0

  },
  career:["Geochemist","Geologist","Academic Researcher"]
});

const course43 = new Wits({
  name : "Chemistry with Chemical Engineering",
  code: "BSc",
  years: "3 years",
  stream: "Physical Sciences",
  school:{
    name:["Wits"],
    aps:[43]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 6,
    physics: 6,
    lifeScience: 0

  },
  career:["Hazardous Waste Management","Medical Research","Textile Chemistry"]
});

const course44 = new Wits({
  name : "Materials Science",
  code: "BSc",
  years: "3 years",
  stream: "Physical Sciences",
  school:{
    name:["Wits"],
    aps:[43]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 6,
    physics: 5,
    lifeScience: 0

  },
  career:["Metallurgist","Design engineer","CAD technician"]
});

const course45 = new Wits({
  name : "Astronomy and Astrophysics",
  code: "BSc",
  years: "3 years",
  stream: "Physical Sciences",
  school:{
    name:["Wits"],
    aps:[43]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 6,
    physics: 5,
    lifeScience: 0

  },
  career:["Astrophysicist","Physicist"]
});


//Agricultural and food sciences


//Mathematical Sciences
const course46 = new Wits({
  name : "Actuarial Sciences",
  code: "BSc",
  years: "3 years",
  stream: "Mathematical Sciences",
  school:{
    name:["Wits"],
    aps:[40]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 7,
    math: 7,
    physics: 7,
    lifeScience: 0

  },
  career:["Asset Management","Consulting","Life Insurance"]
});

const course47 = new Wits({
  name : "Mathematical Science",
  code: "BSc",
  years: "3 years",
  stream: "Mathematical Sciences",
  school:{
    name:["Wits"],
    aps:[40]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 7,
    math: 7,
    physics: 6,
    lifeScience: 0

  },
  career:["Lecturer","Financial Institution","Mathematician"]
});
const course48 = new Wits({
  name : "Mathematics of Finance",
  code: "BSc",
  years: "3 years",
  stream: "Mathematical Sciences",
  school:{
    name:["Wits"],
    aps:[42]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 6,
    physics: 0,
    lifeScience: 0

  },
  career:["Economist","Investment Strategist","Financial Mathematician"]
});

const course49 = new Wits({
  name : "Mathematics",
  code: "BSc",
  years: "3 years",
  stream: "Mathematical Sciences",
  school:{
    name:["Wits"],
    aps:[40]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 6,
    physics: 0,
    lifeScience: 0

  },
  career:["Mathematician","Researcher"]
});
const course50 = new Wits({
  name : "Computational and Applied Mathematics",
  code: "BSc",
  years: "3 years",
  stream: "Mathematical Sciences",
  school:{
    name:["Wits"],
    aps:[40]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 6,
    physics: 0,
    lifeScience: 0

  },
  career:["Trading","Astronomy","Advance Mathematics"]
});

const course51 = new Wits({
  name : "Computer Science",
  code: "BSc",
  years: "3 years",
  stream: "Mathematical Sciences",
  school:{
    name:["Wits"],
    aps:[40]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 6,
    physics: 0,
    lifeScience: 0

  },
  career:["Advertising","Software and System Architects","Robotics"]
});

//education

const course52 = new Wits({
  name : "Teaching : Foundation Phase",
  code: "BEd",
  years: "4 years",
  stream: "Education",
  school:{
    name:["Wits"],
    aps:[36]
  },
  subjects:{
    accounting: 0,
    mathLit: 5,
    english: 5,
    math: 4,
    physics: 0,
    lifeScience: 0

  },
  career:["Primary School Teacher","Pre-primary School Teacher"]
});

const course53 = new Wits({
  name : "Teaching : Intermediate Phase",
  code: "BEd",
  years: "4 years",
  stream: "Education",
  school:{
    name:["Wits"],
    aps:[36]
  },
  subjects:{
    accounting: 0,
    mathLit: 5,
    english: 5,
    math: 4,
    physics: 0,
    lifeScience: 0

  },
  career:["Primary School Teacher"]
});

const course54 = new Wits({
  name : "Teaching : Senior Phase and Further Training",
  code: "BEd",
  years: "4 years",
  stream: "Education",
  school:{
    name:["Wits"],
    aps:[36]
  },
  subjects:{
    accounting: 0,
    mathLit: 5,
    english: 5,
    math: 4,
    physics: 0,
    lifeScience: 0

  },
  career:["Primary and Secondary School Teacher"]
});




app.get('/',(req,res)=>{

  const courseArray = [course1,course2,course3,course4,course5,course6,
  course7,course8,course9,course10,course11,course12,course13,course14,course15,course16,
  course17,course18,course19,course20,course21,course22,course23,course24,course25,course26,course27,course29,
  course30,course31,course32,course33,course34,course35,course36,
  course37,course38,course39,course40,course41,course42,course43,
  course44,course45,course46,course47,course48,course49,course50,course51,course52,course53,course54];


  Wits.find((err,items)=>{
    if(items.length == 0){
      Wits.insertMany(courseArray,(err)=>{
        if(err){
          console.log("did not insert");

        }
        else{
          console.log("Inserted");
        }
      });
      console.log("not found");
      //  res.render("lifeScience");
    }
    else{
      console.log("found");
      //res.render("lifeScience");
    }
  });


  });



app.listen(2000,()=>{
  console.log("Wits server running");
});
