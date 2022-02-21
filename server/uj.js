const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
mongoose.connect("mongodb://localhost:27017/schoolDB",{useNewUrlParser:true});
// mongoose.connect("mongodb+srv://admin-teboho:070997@cluster0.iffup.mongodb.net/schoolDB",{useNewUrlParser:true});


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

const UJ = mongoose.model("UJ",UJSchema);


//economic and management Sciences
const course1 = new UJ({
  name : "Information Systems",
  code: "BCom",
  years: "3 years",
  stream: "Business and Economics",
  school:{
    name:["UJ"],
    aps:[26]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 4,
    math: 4,
    physics: 0,
    lifeScience: 0

  },

  career:["Web Designer","Internet Programmer","Network Specialist"]

});

const course2 = new UJ({
  name : "Industrial Psychology",
  code: "BCom",
  years: "3 years",
  stream: "Accountancy",
  school:{
    name:["UJ"],
    aps:[26]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 4,
    math: 4,
    physics: 0,
    lifeScience: 0

  },
  career:["Specialist HR Practitioner"]

});

const course3 = new UJ({
  name : "Finance",
  code: "BCom",
  years: "3 years",
  stream: "Business and Economics",
  school:{
    name:["UJ"],
    aps:[28]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 4,
    math: 4,
    physics: 0,
    lifeScience: 0

  },
  career:["Financial Manager","Stockbrocker","Accountant"],

});

const course4 = new UJ({
  name : "Accounting(CA)",
  code: "BEconSci",
  years: "3 years",
  stream: "Business and Economics",
  school:{
    name:["UJ"],
    aps:[33]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 4,
    math: 5,
    physics: 0,
    lifeScience: 0

  },
  career:["Chartered Accountant"],

});


//health sciences
const course5 = new UJ({
  name : "Hospitality Management",
  code: "BCom",
  years: "3 years",
  stream: "Business and Economics",
  school:{
    name:["UJ"],
    aps:[26,28]
  },
  subjects:{
    accounting: 0,
    mathLit: 5,
    english: 5,
    math: 4,
    physics: 0,
    lifeScience: 0

  },
  career:["General Manager","Financial Manager"]

});

const course6 = new UJ({
  name : "Human Resource Management",
  code: "BCom",
  years: "3 years",
  stream: "Business and Economics",
  school:{
    name:["UJ"],
    aps:[26,28]
  },
  subjects:{
    accounting: 0,
    mathLit: 4,
    english: 4,
    math: 3,
    physics: 0,
    lifeScience: 0

  },
  career:["Human Resource Practitioner","Personnel Officer","Training Manager"],

});


const course7 = new UJ({
  name : "Tourism Development and Management",
  code: "BCom",
  years: "3 years",
  stream: "Business and Economics",
  school:{
    name:["UJ"],
    aps:[26,28]
  },
  subjects:{
    accounting: 0,
    mathLit: 5,
    english: 4,
    math: 3,
    physics: 4,
    lifeScience: 4

  },
  career:["Entrepreneur","Travel Agent","Tour Guide","Public Relations"],

});
const course8 = new UJ({
  name : "Public Management",
  code: "BA",
  years: "3 years",
  stream: "Business and Economics",
  school:{
    name:["UJ"],
    aps:[26,28]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 4,
    math: 4,
    physics: 5,
    lifeScience: 5

  },
  career:["Public Managers"],

});
const course9 = new UJ({
  name : "Accounting",
  code: "BCom",
  years: "3 years",
  stream: "Business and Economics",
  school:{
    name:["UJ"],
    aps:[28]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 4,
    math: 4,
    physics: 0,
    lifeScience: 0

  },
  career:["Financial Manager","Accountant","Internal Auditor","Tax Consultant"],

});

const course10 = new UJ({
  name : "Business Management",
  code: "BCom",
  years: "3 years",
  stream: "Business and Economics",
  school:{
    name:["UJ"],
    aps:[26]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 4,
    math: 4,
    physics: 0,
    lifeScience: 0

  },
  career:["Training Management","Product Development Manager","Business Innovator"],

});
const course11 = new UJ({
  name : "Economics and Econometrics",
  code: "BCom",
  years: "3 years",
  stream: "Business and Economics",
  school:{
    name:["UJ"],
    aps:[28]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 4,
    math: 4,
    physics: 0,
    lifeScience: 0

  },
  career:["Economist","Econometrician","Economic Analyst"],
  scarcity:4
});
const course12 = new UJ({
  name : "Entrepreneural Management",
  code: "BCom",
  years: "3 years",
  stream: "Business and Economics",
  school:{
    name:["UJ"],
    aps:[26]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 4,
    math: 4,
    physics: 0,
    lifeScience: 0

  },
  career:["Business Owner","Marketing Manager","Financial Manager"],
  scarcity:4
});





//Engineering
const course13 = new UJ({
  name : "Industrial Engineering",
  code: "BEngTech",
  years: "3 years",
  stream: "Engineering",
  school:{
    name:["UJ"],
    aps:[30]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 5,
    physics: 5,
    lifeScience: 0

  },
  career:["Inventory Engineer","Logistic Engineer","Process Engineer"],

});

const course14 = new UJ({
  name : "Chemical Engineering",
  code: "BScEng",
  years: "3 years",
  stream: "Engineering",
  school:{
    name:["UJ"],
    aps:[30]
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
const course15 = new UJ({
  name : "Civil Engineering",
  code: "BEng",
  years: "4 years",
  stream: "Engineering",
  school:{
    name:["UJ"],
    aps:[32]
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

const course16 = new UJ({
  name : "Electrical Engineering",
  code: "BEngTech",
  years: "3 years",
  stream: "Engineering",
  school:{
    name:["UJ"],
    aps:[30]
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

const course17 = new UJ({
  name : "Civil Engineering",
  code: "BScEng",
  years: "4 years",
  stream: "Engineering",
  school:{
    name:["UJ"],
    aps:[28]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 5,
    physics: 5,
    lifeScience: 0

  },
  career:["Infrastructure Design"],

});

const course18 = new UJ({
  name : "Electrical and Electronic Engineering",
  code: "BEng",
  years: "4 years",
  stream: "Engineering",
  school:{
    name:["UJ"],
    aps:[32]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 5,
    physics: 5,
    lifeScience: 0

  },
  career:["Electronic Design","Software System Design"],

});

const course19 = new UJ({
  name : "Mechanical Engineering",
  code: "BScEng",
  years: "3 years",
  stream: "Engineering",
  school:{
    name:["UJ"],
    aps:[30]
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
const course20 = new UJ({
  name : "Mechanical Engineering",
  code: "BEng",
  years: "4 years",
  stream: "Engineering",
  school:{
    name:["UJ"],
    aps:[32]
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


const course21 = new UJ({
  name : "Physical Metallurgy",
  code: "BScEng",
  years: "3 years",
  stream: "Engineering",
  school:{
    name:["UJ"],
    aps:[30]
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

const course22 = new UJ({
  name : "Mining Engineering",
  code: "BScEng",
  years: "3 years",
  stream: "Engineering",
  school:{
    name:["UJ"],
    aps:[23]
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

const course23 = new UJ({
  name : "Extraction Metallurgy",
  code: "BEngTech",
  years: "3 years",
  stream: "Engineering",
  school:{
    name:["UJ"],
    aps:[30]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 5,
    physics: 5,
    lifeScience: 0

  },
  career:["Plant Manager","Mine Ore Recovery"],

});
const course24 = new UJ({
  name : "Mine Surveying",
  code: "BSc",
  years: "3 years",
  stream: "Engineering",
  school:{
    name:["UJ"],
    aps:[23]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 5,
    physics: 5,
    lifeScience: 0

  },
  career:["Mine Surveyor","Advisor"],

});
const course25 = new UJ({
  name : "Construction",
  code: "BSc",
  years: "3 years",
  stream: "Engineering",
  school:{
    name:["UJ"],
    aps:[30]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 5,
    physics: 5,
    lifeScience: 0

  },
  career:["Quantity Surveyor","Construction Manager"],

});
const course26 = new UJ({
  name : "Urban and Regional Planning",
  code: "BEngTech",
  years: "3 years",
  stream: "Engineering",
  school:{
    name:["UJ"],
    aps:[27]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 5,
    physics: 0,
    lifeScience: 0

  },
  career:["Town Planner","Development"],

});




//built environment

const course27 = new UJ({
  name : "Architecture",
  code: "BArch",
  years: "3 years",
  stream: "built environment",
  school:{
    name:["UJ"],
    aps:[28]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 5,
    physics: 0,
    lifeScience: 0

  },
  career:["Architect"]

});

const course28 = new UJ({
  name : "Design Communication",
  code: "BA",
  years: "3 years",
  stream: "Art, Design, Architecture",
  school:{
    name:["UJ"],
    aps:[23,24]
  },
  subjects:{
    accounting: 0,
    mathLit: 4,
    english: 5,
    math: 3,
    physics: 0,
    lifeScience: 0

  },
  career:["Communication Designer"],

});

const course29 = new UJ({
  name : "Digital Media Design",
  code: "BA",
  years: "3 years",
  stream: "Art, Design, Architecture",
  school:{
    name:["UJ"],
    aps:[23,24]
  },
  subjects:{
    accounting: 0,
    mathLit: 4,
    english: 5,
    math: 3,
    physics: 0,
    lifeScience: 0

  },
  career:["User Interface Designer","Music Video Designer","Motion Graphics Designer"]

});


const course30 = new UJ({
  name : "Industrial Design",
  code: "BA",
  years: "3 years",
  stream: "Art, Design, Architecture",
  school:{
    name:["UJ"],
    aps:[23,24]
  },
  subjects:{
    accounting: 0,
    mathLit: 5,
    english: 4,
    math: 4,
    physics: 0,
    lifeScience: 0

  },


  career:["Industrial Designer"]

});




//Law
const course31 = new UJ({
  name : "Law",
  code: "LLB",
  years: "4 years",
  stream: "Law",
  school:{
    name:["UJ"],
    aps:[28,29]
  },
  subjects:{
    accounting: 0,
    mathLit: 4,
    english: 5,
    math: 3,
    physics: 0,
    lifeScience: 0
  },
    career: ["Attorneys","Advocates","Prosecutor"]
});
const course32 = new UJ({
  name : "Law",
  code: "BCom",
  years: "3 years",
  stream: "Law",
  school:{
    name:["UJ"],
    aps:[28]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 4,
    physics: 0,
    lifeScience: 0
  },
    career: ["Legal Advisor","Career in Commerce"]
});
const course33 = new UJ({
  name : "Law",
  code: "BA",
  years: "3 years",
  stream: "Law",
  school:{
    name:["UJ"],
    aps:[28,29]
  },
  subjects:{
    accounting: 0,
    mathLit: 4,
    english: 5,
    math: 3,
    physics: 0,
    lifeScience: 0
  },
    career: ["Legal Advisor","Career Public Administration"]
});


//Humanities
const course34 = new UJ({
  name : "Architecture",
  code: "Diploma",
  years: "3 years",
  stream: "Architecture",
  school:{
    name:["UJ"],
    aps:[23]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 4,
    math: 4,
    physics: 0,
    lifeScience: 0

  },
  career:["Architectural Practitioner"],
  scarcity:4
});
const course35 = new UJ({
  name : "Fashion Production",
  code: "Diploma",
  years: "3 years",
  stream: "Design",
  school:{
    name:["UJ"],
    aps:[20,21]
  },
  subjects:{
    accounting: 0,
    mathLit: 4,
    english: 4,
    math: 3,
    physics: 0,
    lifeScience: 0

  },
  career:["Retail","Clothing Industry","Business Manufacturing"],
  scarcity:4
});
const course36 = new UJ({
  name : "Jewellery Design and Manufacture",
  code: "Diploma",
  years: "3 years",
  stream: "Design",
  school:{
    name:["UJ"],
    aps:[18,19]
  },
  subjects:{
    accounting: 0,
    mathLit: 4,
    english: 4,
    math: 3,
    physics: 0,
    lifeScience: 0

  },
  career:["Jewellery Designer","Jewellery Manufaturer"],
  scarcity:4
});

const course37 = new UJ({
  name : "Chiropratic",
  code: "BHS",
  years: "4 years",
  stream: "Health Science",
  school:{
    name:["UJ"],
    aps:[26]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 4,
    physics: 4,
    lifeScience: 4

  },
  career:["Injury Treatment"],
  scarcity:4
});


const course38 = new UJ({
  name : "Complementary Medicine",
  code: "BHS",
  years: "4 years",
  stream: "Health Science",
  school:{
    name:["UJ"],
    aps:[26]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 4,
    physics: 4,
    lifeScience: 4

  },
  career:["Acupuncturists","Patient Services Coordinator"],
  scarcity:4
});

const course39 = new UJ({
  name : "Emergency Medical Care",
  code: "BHS",
  years: "4 years",
  stream: "Health Science",
  school:{
    name:["UJ"],
    aps:[26]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 4,
    physics: 4,
    lifeScience: 4

  },
  career:["Emergency Care Practitioner"],
  scarcity:4
});

const course40 = new UJ({
  name : "Medical Laboratory Science",
  code: "BHS",
  years: "4 years",
  stream: "Health Science",
  school:{
    name:["UJ"],
    aps:[30]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 4,
    physics: 4,
    lifeScience:4

  },
  career:["Medical Laboratory Scientists"],
  scarcity:4
});
const course41 = new UJ({
  name : "Podiatry",
  code: "BHS",
  years: "4 years",
  stream: "Health Science",
  school:{
    name:["UJ"],
    aps:[28]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 4,
    physics: 4,
    lifeScience: 4

  },
  career:["Podiatrist"],
  scarcity:4
});

const course42 = new UJ({
  name : "Sport and Exercise Science",
  code: "BHS",
  years: "4 years",
  stream: "Health Science",
  school:{
    name:["UJ"],
    aps:[27,28]
  },
  subjects:{
    accounting: 0,
    mathLit: 4,
    english: 5,
    math: 3,
    physics: 0,
    lifeScience: 0

  },
  career:["Sport Scientist","Sport Coach","Fitness Instructor"],
  scarcity:4
});

const course43 = new UJ({
  name : "Diagnostic Radiography",
  code: "BHS",
  years: "4 years",
  stream: "Health Science",
  school:{
    name:["UJ"],
    aps:[30]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 4,
    physics: 4,
    lifeScience: 4

  },
  career:["Radiographer"],
  scarcity:4
});
const course44 = new UJ({
  name : "Diagnostic UltraSound",
  code: "BHS",
  years: "4 years",
  stream: "Health Science",
  school:{
    name:["UJ"],
    aps:[30]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 4,
    physics: 4,
    lifeScience: 5

  },
  career:["Practitioner"],
  scarcity:4
});
const course45 = new UJ({
  name : "Nuclear Medicine",
  code: "BHS",
  years: "4 years",
  stream: "Health Science",
  school:{
    name:["UJ"],
    aps:[30]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 4,
    physics: 4,
    lifeScience: 5

  },
  career:["Practitioner"],
  scarcity:4
});
const course46 = new UJ({
  name : "Radiation Theraphy",
  code: "BHS",
  years: "4 years",
  stream: "Health Science",
  school:{
    name:["UJ"],
    aps:[30]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 4,
    physics: 4,
    lifeScience: 5

  },
  career:["Radiation Therapist"],
  scarcity:4
});
const course47 = new UJ({
  name : "Enironmental Health",
  code: "BHS",
  years: "4 years",
  stream: "Health Science",
  school:{
    name:["UJ"],
    aps:[24]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 4,
    math: 4,
    physics: 4,
    lifeScience: 4

  },
  career:["Environmental Health Practitioner"],
  scarcity:4
});
const course48 = new UJ({
  name : "Nursing",
  code: "Nursing",
  years: "4 years",
  stream: "Health Science",
  school:{
    name:["UJ"],
    aps:[28]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 4,
    physics: 4,
    lifeScience: 4

  },
  career:["Professional Nurse"],
  scarcity:4
});
const course49 = new UJ({
  name : "Optometry",
  code: "BOPTOM",
  years: "4 years",
  stream: "Health Science",
  school:{
    name:["UJ"],
    aps:[31]
  },
  subjects:{
    accounting: 0,
    mathLit: 5,
    english: 5,
    math: 5,
    physics: 5,
    lifeScience: 5

  },
  career:["Optometrist"],
  scarcity:4
});

const course50 = new UJ({
  name : "Sport Management",
  code: "BHS",
  years: "4 years",
  stream: "Health Science",
  school:{
    name:["UJ"],
    aps:[23]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 4,
    math: 4,
    physics: 0,
    lifeScience: 0

  },
  career:["Sport Manager","Sport Marketer","Sport Administrator"],
  scarcity:4
});
const course51 = new UJ({
  name : "Emergency Medical Care",
  code: "Diploma",
  years: "3 years",
  stream: "Health Science",
  school:{
    name:["UJ"],
    aps:[26]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 4,
    physics: 4,
    lifeScience: 4

  },
  career:["Paramedics"],
  scarcity:4
});
const course52 = new UJ({
  name : "Sport Management",
  code: "Diploma",
  years: "3 years",
  stream: "Health Science",
  school:{
    name:["UJ"],
    aps:[18,19]
  },
  subjects:{
    accounting: 0,
    mathLit: 3,
    english: 3,
    math: 3,
    physics: 0,
    lifeScience: 0

  },
  career:["Sport Administrator","Professional Coach","Fitness Trainer"],
  scarcity:4
});
const course53 = new UJ({
  name : "Social Work",
  code: "BSW",
  years: "4 years",
  stream: "Humanities",
  school:{
    name:["UJ"],
    aps:[30]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 0,
    physics: 0,
    lifeScience: 0

  },
  career:["Social Worker"],
  scarcity:4
});
const course54 = new UJ({
  name : "BA(General)",
  code: "BA",
  years: "3 years",
  stream: "Humanities",
  school:{
    name:["UJ"],
    aps:[27]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 0,
    physics: 0,
    lifeScience: 0

  },
  career:["Anthropologist","Ethicist","Social Responsibilty Officer"],
  scarcity:4
});
const course55 = new UJ({
  name : "Politics, Economics and Technology",
  code: "BA",
  years: "3 years",
  stream: "Humanities",
  school:{
    name:["UJ"],
    aps:[27]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 4,
    physics: 0,
    lifeScience: 0

  },
  career:["Apprentice Data Analyst","Researcher","Account Manager"],
  scarcity:4
});
const course56 = new UJ({
  name : "Communinity Development and Leadership",
  code: "BHS",
  years: "3 years",
  stream: "Humanities",
  school:{
    name:["UJ"],
    aps:[27]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 0,
    physics: 0,
    lifeScience: 0

  },
  career:["Municipalities","Government Departments"],
  scarcity:4
});
const course57 = new UJ({
  name : "Extended Development Studies",
  code: "BA",
  years: "4 years",
  stream: "Humanities",
  school:{
    name:["UJ"],
    aps:[24]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 4,
    math: 0,
    physics: 0,
    lifeScience:0

  },
  career:["Social Development Officer","Social Change Activist"],
  scarcity:4
});
const course58 = new UJ({
  name : "Extended Language Practice",
  code: "BA",
  years: "4 years",
  stream: "Humanities",
  school:{
    name:["UJ"],
    aps:[27]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 0,
    physics: 0,
    lifeScience:0

  },
  career:["Language Practitioner","Subtitler","Terminologist"],
  scarcity:4
});
const course59 = new UJ({
  name : "Extended Linguistics",
  code: "BA",
  years: "4 years",
  stream: "Humanities",
  school:{
    name:["UJ"],
    aps:[24]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 4,
    math: 0,
    physics: 0,
    lifeScience:0

  },
  career:["Education","Interpretor","Business Communication"],
  scarcity:4
});
const course60 = new UJ({
  name : "Extended Linguistics and Language Practice",
  code: "BA",
  years: "4 years",
  stream: "Humanities",
  school:{
    name:["UJ"],
    aps:[24]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 4,
    math: 0,
    physics: 0,
    lifeScience:0

  },
  career:["Text Editor","Interpreter","Journalist"],
  scarcity:4
});
const course61 = new UJ({
  name : "Extended Strategic Communication",
  code: "BA",
  years: "4 years",
  stream: "Humanities",
  school:{
    name:["UJ"],
    aps:[24]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 4,
    math: 0,
    physics: 0,
    lifeScience:0

  },
  career:["Brand Manager","Social Media Strategist","Digital Data Analyst"],
  scarcity:4
});
const course62 = new UJ({
  name : "Public Relations and Communication",
  code: "Diploma",
  years: "3 years",
  stream: "Humanities",
  school:{
    name:["UJ"],
    aps:[24]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 4,
    math: 0,
    physics: 0,
    lifeScience:0

  },
  career:["PR Practitioner"],
  scarcity:4
});
const course63 = new UJ({
  name : "Extended Public Relations and Communication",
  code: "Diploma",
  years: "4 years",
  stream: "Humanities",
  school:{
    name:["UJ"],
    aps:[21]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 3,
    math: 0,
    physics: 0,
    lifeScience:0

  },
  career:["PR Practitioner"],
  scarcity:4
});




















//Natural and Agricultural_Sciences

const course64 = new UJ({
  name : "Zoology and Biochemistry",
  code: "BSc",
  years: "3 years",
  stream: "Science",
  school:{
    name:["UJ"],
    aps:[30]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 5,
    physics: 4,
    lifeScience: 4

  },
  career:["Pathologist","Zoology","Biochemist"]
});

const course65 = new UJ({
  name : "Botany and Zoology",
  code: "BSc",
  years: "3 years",
  stream: "Science",
  school:{
    name:["UJ"],
    aps:[30]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 5,
    physics: 4,
    lifeScience: 4

  },
  career:["Nature Conservantionist","Entomologist","Geneticist","Zoologist"]
});

const course66 = new UJ({
  name : "Applied Physics",
  code: "BSc",
  years: "4 years",
  stream: "Physical Science",
  school:{
    name:["UJ"],
    aps:[31]
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

const course67 = new UJ({
  name : "Geology and Environmental Management",
  code: "BSc",
  years: "3 years",
  stream: "Physical Sciences",
  school:{
    name:["UJ"],
    aps:[30]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 5,
    physics: 4,
    lifeScience: 4

  },
  career:["GIS Specialist","Site Analyst","Geologist","Mineralogist"]
});

const course68 = new UJ({
  name : "Information Technology",
  code: "BSc",
  years: "3 years",
  stream: "Physical Sciences",
  school:{
    name:["UJ"],
    aps:[30]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 6,
    physics: 0,
    lifeScience: 0

  },
  career:["System Analyst","Network Manager","Web Developer","Database Administrator","Software Engineer"]
});
const course69 = new UJ({
  name : "Geology and Geography",
  code: "BSc",
  years: "3 years",
  stream: "Physical Sciences",
  school:{
    name:["UJ"],
    aps:[30]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 5,
    physics: 4,
    lifeScience: 0

  },
  career:["Geologist","Geographer","Mineralogist","Regional Planner","Site Analyst"]
});

const course70 = new UJ({
  name : "Computer Science and Informatics",
  code: "BSc",
  years: "3 years",
  stream: "Physical Sciences",
  school:{
    name:["UJ"],
    aps:[30]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 6,
    physics: 6,
    lifeScience: 0

  },
  career:["Software Engineer","Graphics Designer","IT Manager","System Analyst"]
});

const course71 = new UJ({
  name : "Biochemistry and Botany",
  code: "BSc",
  years: "3 years",
  stream: "Sciences",
  school:{
    name:["UJ"],
    aps:[30]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 5,
    physics: 4,
    lifeScience: 0

  },
  career:["Analyst","Technologist","Researcher"]
});

const course72 = new UJ({
  name : "Botany and Chemistry",
  code: "BSc",
  years: "3 years",
  stream: "Sciences",
  school:{
    name:["UJ"],
    aps:[30]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 6,
    physics: 4,
    lifeScience: 4

  },
  career:["Biologist","Botanist","Ecologist"]
});
const course73 = new UJ({
  name : "Zoology and Chemistry",
  code: "BSc",
  years: "3 years",
  stream: "Sciences",
  school:{
    name:["UJ"],
    aps:[30]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 6,
    physics: 4,
    lifeScience: 4

  },
  career:["Zoologist","Researcher","Chemical Technologist"]
});
const course74 = new UJ({
  name : "Zoology and Environmental Management",
  code: "BSc",
  years: "3 years",
  stream: "Sciences",
  school:{
    name:["UJ"],
    aps:[30]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 5,
    physics: 4,
    lifeScience: 4

  },
  career:["Geo-Zoologist","Population Geneticist","Ecologist"]
});
const course99 = new UJ({
  name : "Zoology and Geography",
  code: "BSc",
  years: "3 years",
  stream: "Sciences",
  school:{
    name:["UJ"],
    aps:[30]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 5,
    physics: 4,
    lifeScience: 4

  },
  career:["Ecologist","Geo-Zoologist","Population Geneticist"]
});
const course100 = new UJ({
  name : "Zoology and Physiology",
  code: "BSc",
  years: "3 years",
  stream: "Sciences",
  school:{
    name:["UJ"],
    aps:[30]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 6,
    physics: 4,
    lifeScience: 4

  },
  career:["Zoologist","Forensic Pathologist","Geneticist","Parasitologist"]
});
const course101 = new UJ({
  name : "Physiology and Biochemistry",
  code: "BSc",
  years: "3 years",
  stream: "Sciences",
  school:{
    name:["UJ"],
    aps:[30]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 6,
    physics: 4,
    lifeScience: 4

  },
  career:["Biochemist","Biotechnologist","Researcher"]
});
const course75 = new UJ({
  name : "Physiology and Psychology",
  code: "BSc",
  years: "3 years",
  stream: "Sciences",
  school:{
    name:["UJ"],
    aps:[30]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 6,
    physics: 4,
    lifeScience: 4

  },
  career:["Psychologist","Forensic Pathologist","Researcher"]
});
const course76 = new UJ({
  name : "Geography and Environmental Management",
  code: "BSc",
  years: "3 years",
  stream: "Sciences",
  school:{
    name:["UJ"],
    aps:[30]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 5,
    physics: 4,
    lifeScience: 4

  },
  career:["Location Analyst","Town Planner","Geomorphologist"]
});
const course77 = new UJ({
  name : "Geology and Environmental Management",
  code: "BSc",
  years: "3 years",
  stream: "Sciences",
  school:{
    name:["UJ"],
    aps:[30]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 5,
    physics: 4,
    lifeScience: 4

  },
  career:["Geologist","Mineralogist","Geographer"]
});
const course78 = new UJ({
  name : "Geology and Geography",
  code: "BSc",
  years: "3 years",
  stream: "Sciences",
  school:{
    name:["UJ"],
    aps:[30]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 6,
    physics: 4,
    lifeScience: 4

  },
  career:["Geographer","Geologist","Regional Planner"]
});










//Agricultural and food sciences


//Mathematical Sciences
const course79 = new UJ({
  name : "Actuarial Science",
  code: "BSc",
  years: "3 years",
  stream: "Science",
  school:{
    name:["UJ"],
    aps:[33]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 7,
    physics: 0,
    lifeScience: 0

  },
  career:["Quantitative Analyst","Actuary","Consulting","Life Insurance"]
});

const course80 = new UJ({
  name : "Mathematics and Economics",
  code: "BSc",
  years: "3 years",
  stream: "Mathematical Sciences",
  school:{
    name:["UJ"],
    aps:[33]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 6,
    physics: 4,
    lifeScience: 0

  },
  career:["Economestrist","Investment Economist","Consultant"]
});
const course81 = new UJ({
  name : "Mathematics Statistics and Economics",
  code: "BSc",
  years: "3 years",
  stream: "Mathematical Sciences",
  school:{
    name:["UJ"],
    aps:[33]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 6,
    physics: 4,
    lifeScience: 0

  },
  career:["Econometrist","Investment Economist","Biometricist"]
});

const course82 = new UJ({
  name : "Geology and Mathematics",
  code: "BSc",
  years: "3 years",
  stream: "Mathematical Sciences",
  school:{
    name:["UJ"],
    aps:[31]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 6,
    physics: 5,
    lifeScience: 0

  },
  career:["Geomathematician","Geologist","Problem Analyst"]
});
const course83 = new UJ({
  name : "Geology and Physics",
  code: "BSc",
  years: "3 years",
  stream: "Sciences",
  school:{
    name:["UJ"],
    aps:[31]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 6,
    physics: 5,
    lifeScience: 0

  },
  career:["Physicist","Geophysicist","Geologist","Geohydrologist"]
});

const course84 = new UJ({
  name : "Physics and Applied Mathematics",
  code: "BSc",
  years: "3 years",
  stream: "Mathematical Sciences",
  school:{
    name:["UJ"],
    aps:[31]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 6,
    physics: 5,
    lifeScience: 0

  },
  career:["Problem Solver","Researcher"]
});
const course85 = new UJ({
  name : "Physics and Mathematics",
  code: "BSc",
  years: "3 years",
  stream: "Mathematical Sciences",
  school:{
    name:["UJ"],
    aps:[31]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 6,
    physics: 5,
    lifeScience: 0

  },
  career:["Problem Solver","Researcher"]
});
const course86 = new UJ({
  name : "Applied Mathematics and Computer Science",
  code: "BSc",
  years: "3 years",
  stream: "Mathematical Sciences",
  school:{
    name:["UJ"],
    aps:[31]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 6,
    physics: 4,
    lifeScience: 0

  },
  career:["Computer Programmer","System Analyst","Mathematical Modulator"]
});
const course87 = new UJ({
  name : "Applied Mathematics and Mathematical Statistics",
  code: "BSc",
  years: "3 years",
  stream: "Mathematical Sciences",
  school:{
    name:["UJ"],
    aps:[31]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 6,
    physics: 4,
    lifeScience: 0

  },
  career:["Mathematician","Data Compiler","Data Interpreter","Biometrician"]
});
const course88 = new UJ({
  name : "Applied Mathematics and Mathematics",
  code: "BSc",
  years: "3 years",
  stream: "Mathematical Sciences",
  school:{
    name:["UJ"],
    aps:[31]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 6,
    physics: 4,
    lifeScience: 0

  },
  career:["Mathematical Modulator","Mathematical Adviser"]
});
const course89 = new UJ({
  name : "Computational Science",
  code: "BSc",
  years: "3 years",
  stream: "Mathematical Sciences",
  school:{
    name:["UJ"],
    aps:[31]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 6,
    physics: 5,
    lifeScience: 0

  },
  career:["Software Specialist"]
});
const course90 = new UJ({
  name : "Mathematical Statistics and Computer Science",
  code: "BSc",
  years: "3 years",
  stream: "Mathematical Sciences",
  school:{
    name:["UJ"],
    aps:[31]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 6,
    physics: 5,
    lifeScience: 0

  },
  career:["Computer Programmer","System Analyst","Data Compiler","Analyst"]
});
const course91 = new UJ({
  name : "Mathematics and Computer Science",
  code: "BSc",
  years: "3 years",
  stream: "Mathematical Sciences",
  school:{
    name:["UJ"],
    aps:[31]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 6,
    physics: 5,
    lifeScience: 0

  },
  career:["Computer Programmer","System Analyst","Mathematical Advisor"]
});
const course92 = new UJ({
  name : "Mathematics and Informatics",
  code: "BSc",
  years: "3 years",
  stream: "Mathematical Sciences",
  school:{
    name:["UJ"],
    aps:[31]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 6,
    physics: 5,
    lifeScience: 0

  },
  career:["Computer Programmer","System Analyst"]
});
const course93 = new UJ({
  name : "Mathematics and Mathematical Statistics",
  code: "BSc",
  years: "3 years",
  stream: "Mathematical Sciences",
  school:{
    name:["UJ"],
    aps:[31]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 6,
    physics: 5,
    lifeScience: 0

  },
  career:["Financial Analyst","Economists"]
});
const course94 = new UJ({
  name : "Mathematics and Psychology",
  code: "BSc",
  years: "3 years",
  stream: "Mathematical Sciences",
  school:{
    name:["UJ"],
    aps:[31]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 6,
    physics: 5,
    lifeScience: 0

  },
  career:["Mathematician","Teacher","Researcher","Psychologist"]
});
const course95 = new UJ({
  name : "Mathematics and Mathetical Statistics",
  code: "BSc",
  years: "3 years",
  stream: "Mathematical Sciences",
  school:{
    name:["UJ"],
    aps:[31]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 6,
    physics: 5,
    lifeScience: 0

  },
  career:["Mathematician","Data Interpreter","Mathematical Advisor"]
});












//education

const course96 = new UJ({
  name : "Teaching : Foundation Phase",
  code: "BEd",
  years: "4 years",
  stream: "Education",
  school:{
    name:["UJ"],
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

const course97 = new UJ({
  name : "Teaching : Intermediate Phase",
  code: "BEd",
  years: "4 years",
  stream: "Education",
  school:{
    name:["UJ"],
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

const course98 = new UJ({
  name : "Teaching : Senior Phase and Further Training",
  code: "BEd",
  years: "4 years",
  stream: "Education",
  school:{
    name:["UJ"],
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
  course17,course18,course19,course20,course21,course22,course23,course24,course25,course26,course27,course28,course29,
  course30,course31,course32,course33,course34,course35,course36,
  course37,course38,course39,course40,course41,course42,course43,
  course44,course45,course46,course47,course48,course49,course50,course51,course52,course53,course54,course55,course56,
  course57,course58,course59,course60,course61,course62,course64,course65,course66,course67,course68,course69,
  course70,course71,course72,course73,course74,course75,course76,
  course77,course78,course79,course80,course81,course82,course83,
  course84,course85,course86,course87,course88,course89,course90,course91,course92,course93,course94,
  course95,course96,course97,course98,
  course99,course100,course101];


  UJ.find((err,items)=>{
    if(items.length == 0){
      UJ.insertMany(courseArray,(err)=>{
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
  console.log("UJ server running");
});
