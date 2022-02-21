const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
mongoose.connect("mongodb+srv://admin-teboho:070997@cluster0.iffup.mongodb.net/schoolDB",{useNewUrlParser:true});

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

const UP = mongoose.model("UP",upSchema);


//economic and management Sciences
const course1 = new UP({
  name : "accounting science",
  code: "BCom",
  years: "3 years",
  stream: "economic and management sciences",
  school:{
    name:["UP"],
    aps:[34]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 6,
    physics: 0,
    home: 0

  },

  career:["tax advisor","financial manager","auditor"],

});

const course2 = new UP({
  name : "investment management",
  code: "BCom",
  years: "3 years",
  stream: "economic and management sciences",
  school:{
    name:["UP"],
    aps:[34]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 6,
    physics: 0,
    home: 0

  },
  career:["investment analyst","risk manager","fund manager","financial advisor"],

});

const course3 = new UP({
  name : "financial sciences",
  code: "BCom",
  years: "3 years",
  stream: "economic and management sciences",
  school:{
    name:["UP"],
    aps:[32]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 5,
    physics: 0,
    home: 0

  },
  career:["cost accountant","tax auditor","financial accountant"],

});

const course4 = new UP({
  name : "econometrics",
  code: "BCom",
  years: "3 years",
  stream: "economic and management sciences",
  school:{
    name:["UP"],
    aps:[32]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 6,
    physics: 0,
    home: 0

  },
  career:["analyst","trader","consultants"],

});

const course5 = new UP({
  name : "economics",
  code: "BCom",
  years: "3 years",
  stream: "economic and management sciences",
  school:{
    name:["UP"],
    aps:[32]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 5,
    physics: 0,
    home: 0

  },
  career:["analyst","consultants","academics"],

});

const course6 = new UP({
  name : "law",
  code: "BCom",
  years: "3 years",
  stream: "economic and management sciences",
  school:{
    name:["UP"],
    aps:[32]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 5,
    physics: 0,
    home: 0

  },
  career:["prosecutor","legal advisor","magistrate","judge"],

});
const course7 = new UP({
  name : "statistics",
  code: "BCom",
  years: "3 years",
  stream: "economic and management sciences",
  school:{
    name:["UP"],
    aps:[32]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 5,
    physics: 0,
    home: 0

  },
  career:["researchers","consultants","lecturers"],

});

const course8 = new UP({
  name : "informatics",
  code: "BCom",
  years: "3 years",
  stream: "economic and management sciences",
  school:{
    name:["UP"],
    aps:[30]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 4,
    physics: 0,
    home: 0

  },
  career:["IT manager","software support service","business analyst"],

});

const course9 = new UP({
  name : "agribusiness management",
  code: "BCom",
  years: "3 years",
  stream: "economic and management sciences",
  school:{
    name:["UP"],
    aps:[30]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 5,
    physics: 0,
    home: 0

  },
  career:["agricultural economics","agribusiness managers","project manager"],

});

const course10 = new UP({
  name : "bcom",
  code: "BCom",
  years: "3 years",
  stream: "economic and management sciences",
  school:{
    name:["UP"],
    aps:[30]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 4,
    physics: 0,
    home: 0

  },
  career:["does not lead to a specific career"],

});
const course11 = new UP({
  name : "recreation and sports management",
  code: "BCom",
  years: "3 years",
  stream: "economic and management sciences",
  school:{
    name:["UP"],
    aps:[30]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 4,
    physics: 0,
    home: 0

  },
  career:["sport event organisor",'sport marketing manager','sport facility manager'],

});

const course12 = new UP({
  name : "entrepreneurship",
  code: "BCom",
  years: "3 years",
  stream: "economic and management sciences",
  school:{
    name:["UP"],
    aps:[30]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 4,
    physics: 0,
    home: 0

  },
  career:["corporate entrepreneur","sales manager",'entrepreneur'],

});

const course13 = new UP({
  name : "business management",
  code: "BCom",
  years: "3 years",
  stream: "economic and management sciences",
  school:{
    name:["UP"],
    aps:[30]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 4,
    physics: 0,
    home: 0

  },
  career:["teachers","human resource manager","manager"],

});

const course14 = new UP({
  name : "supply chain management",
  code: "BCom",
  years: "3 years",
  stream: "economic and management sciences",
  school:{
    name:["UP"],
    aps:[30]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 4,
    physics: 0,
    home: 0

  },
  career:["supply manager","production manager","operation manager"],

});

const course15 = new UP({
  name : "marketing management",
  code: "BCom",
  years: "3 years",
  stream: "economic and management sciences",
  school:{
    name:["UP"],
    aps:[30]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 4,
    physics: 0,
    home: 0

  },
  career:["strategic management","product management","advertising management"],

});

const course16 = new UP({
  name : "human resource management",
  code: "BCom",
  years: "3 years",
  stream: "economic and management sciences",
  school:{
    name:["UP"],
    aps:[30]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 4,
    physics: 0,
    home: 0

  },
  career:["HR practitioner","HR consultants","mediators"],

});
//health sciences
const course17 = new UP({
  name : "Dental Surgery",
  code: "BChD",
  years: "5 years",
  stream: "Health Sciences",
  school:{
    name:["UP"],
    aps:[35]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 5,
    physics: 5,
    home: 0

  },
  career:["Dentist","Specialist","Academics"],

});

const course18 = new UP({
  name : "Oral Hygiene",
  code: "BOH",
  years: "3 years",
  stream: "Health Sciences",
  school:{
    name:["UP"],
    aps:[25]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 4,
    math: 4,
    physics: 4,
    home: 0

  },
  career:["Oral hygienists"],

});

const course19 = new UP({
  name : "Dietics",
  code: "BDietics",
  years: "4 years",
  stream: "Health Sciences",
  school:{
    name:["UP"],
    aps:[25]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 4,
    math: 4,
    physics: 4,
    home: 0

  },
  career:["Dieticians"],

});
const course20 = new UP({
  name : "Nursing",
  code: "BNurs",
  years: "4 years",
  stream: "Health Sciences",
  school:{
    name:["UP"],
    aps:[28]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 0,
    physics: 0,
    home: 0

  },
  career:["General nursing","midwifery","community nursing"],

});
const course21 = new UP({
  name : "Occupational Therapy",
  code: "BOccTher",
  years: "4 years",
  stream: "Health Sciences",
  school:{
    name:["UP"],
    aps:[30]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 4,
    math: 4,
    physics: 4,
    home: 0

  },
  career:["Occupational Therapist"],

});
const course22 = new UP({
  name : "Physiotherapy",
  code: "BPhysio",
  years: "4 years",
  stream: "Health Sciences",
  school:{
    name:["UP"],
    aps:[30]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 4,
    math: 4,
    physics: 4,
    home: 0

  },
  career:["Physiotherapist"],

});
const course23 = new UP({
  name : "Radiography",
  code: "BRad",
  years: "3 years",
  stream: "Health Sciences",
  school:{
    name:["UP"],
    aps:[25]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 4,
    math: 4,
    physics: 4,
    home: 0

  },
  career:["Radiographers"],

});
const course24 = new UP({
  name : "Clinical Medical Practice",
  code: "BClinical",
  years: "3 years",
  stream: "Health Sciences",
  school:{
    name:["UP"],
    aps:[25]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 4,
    math: 4,
    physics: 0,
    home: 0

  },
  career:["Clinical associate","Specialist","Academics"],

});
const course25 = new UP({
  name : "Medicine and Surgery",
  code: "MBChB",
  years: "6 years",
  stream: "Health Sciences",
  school:{
    name:["UP"],
    aps:[35]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 5,
    physics: 5,
    home: 0

  },
  career:["General Medical practitioner","Specialist","Academics"],
  scarcity:4
});
const course26 = new UP({
  name : "Sport Science",
  code: "BSportSci",
  years: "3 years",
  stream: "Health Sciences",
  school:{
    name:["UP"],
    aps:[35]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 4,
    math: 4,
    physics: 4,
    home: 0

  },
  career:["biokinetics","Sport Scince research","teaching"],
  scarcity:4
});

const course27 = new UP({
  name : "Sport Science",
  code: "HCert",
  years: "1 years",
  stream: "Health Sciences",
  school:{
    name:["UP"],
    aps:[15]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 4,
    math: 0,
    physics: 0,
    home: 0

  },
  career:["sport coaching","Sport Scince research","teaching"],
  scarcity:4
});



//Engineering
const course28 = new UP({
  name : "industrial engineering",
  code: "BEng",
  years: "4 years",
  stream: "Engineering",
  school:{
    name:["UP"],
    aps:[35]
  },
  career:["industrial engineer"],

});

const course29 = new UP({
  name : "chemical engineering",
  code: "BEng",
  years: "4 years",
  stream: "Engineering",
  school:{
    name:["UP"],
    aps:[35]
  },
  career:["chemical engineer"],

});
const course30 = new UP({
  name : "civil engineering",
  code: "BEng",
  years: "4 years",
  stream: "Engineering",
  school:{
    name:["UP"],
    aps:[35]
  },
  career:["civil engineer"],

});

const course31 = new UP({
  name : "electrical engineering",
  code: "BEng",
  years: "4 years",
  stream: "Engineering",
  school:{
    name:["UP"],
    aps:[35]
  },
  career:["electrical engineer"],

});

const course32 = new UP({
  name : "electrical engineering",
  code: "BEng",
  years: "4 years",
  stream: "Engineering",
  school:{
    name:["UP"],
    aps:[35]
  },
  career:["electrical engineer"],

});

const course33 = new UP({
  name : "electronic engineering",
  code: "BEng",
  years: "4 years",
  stream: "Engineering",
  school:{
    name:["UP"],
    aps:[35]
  },
  career:["electronic engineer"],

});

const course34 = new UP({
  name : "mechanical engineering",
  code: "BEng",
  years: "4 years",
  stream: "Engineering",
  school:{
    name:["UP"],
    aps:[35]
  },
  career:["mechanical engineer","aeronautical engineer"],

});

const course35 = new UP({
  name : "metallurgical engineering",
  code: "BEng",
  years: "4 years",
  stream: "Engineering",
  school:{
    name:["UP"],
    aps:[35]
  },
  career:["metallurgical engineer"],

});

const course36 = new UP({
  name : "mining engineering",
  code: "BEng",
  years: "4 years",
  stream: "Engineering",
  school:{
    name:["UP"],
    aps:[35]
  },
  career:["mining engineer"],

});

const course37 = new UP({
  name : "computer engineering",
  code: "BEng",
  years: "4 years",
  stream: "Engineering",
  school:{
    name:["UP"],
    aps:[35]
  },
  career:["computer engineer"],

});

//built environment

const course38 = new UP({
  name : "Architecture",
  code: "BSc",
  years: "3 years",
  stream: "built environment",
  school:{
    name:["UP"],
    aps:[27]
  },
  subjects:{
    accounting: 4,
    mathLit: 0,
    english: 5,
    math: 4,
    physics: 4,
    home: 0

  },
  career:["architecture"]

});

const course39 = new UP({
  name : "Construction Management",
  code: "BSc",
  years: "3 years",
  stream: "built environment",
  school:{
    name:["UP"],
    aps:[30]
  },
  subjects:{
    accounting: 5,
    mathLit: 0,
    english: 5,
    math: 5,
    physics: 5,
    home: 0

  },
  career:["construction site management"],

});

const course40 = new UP({
  name : "Real Estate",
  code: "BSc",
  years: "3 years",
  stream: "built environment",
  school:{
    name:["UP"],
    aps:[30]
  },
  subjects:{
    accounting: 4,
    mathLit: 0,
    english: 5,
    math: 5,
    physics: 4,
    home: 0

  },
  career:["property investment","property management"]

});

const course41 = new UP({
  name : "Quantity Surveying",
  code: "BSc",
  years: "3 years",
  stream: "built environment",
  school:{
    name:["UP"],
    aps:[30]
  },
  subjects:{
    accounting: 4,
    mathLit: 0,
    english: 5,
    math: 5,
    physics: 0,
    home: 0

  },


  career:["quantity surveyor"]

});
const course63 = new UP({
  name : "Town and Regional Planning",
  code: "BTRP",
  years: "4 years",
  stream: "built environment",
  school:{
    name:["UP"],
    aps:[27]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 4,
    physics: 0,
    home: 0

  },


  career:["Town and Regional Planner","Development Prationer"]

});
//Information Technology
const course64 = new UP({
  name : "Information Technology",
  code: "BIT",
  years: "4 years",
  stream: "Information Technology",
  school:{
    name:["UP"],
    aps:[30]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 5,
    physics: 0,
    home: 0

  },


  career:["Programmers","System Analyst","Information Technologist"]

});
const course65 = new UP({
  name : "Computer Science",
  code: "BSc",
  years: "3 years",
  stream: "Information Technology",
  school:{
    name:["UP"],
    aps:[30]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 5,
    physics: 0,
    home: 0

  },


  career:["Programmers","System Analysts","Systems Architect"]

});
const course66 = new UP({
  name : "Multimedia",
  code: "BIS",
  years: "3 years",
  stream: "Information Technology",
  school:{
    name:["UP"],
    aps:[30]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 4,
    math: 5,
    physics: 0,
    home: 0

  },


  career:["Programmers","Web Designers","Animation Specialist"]

});
const course67 = new UP({
  name : "Information and knowledge Systems",
  code: "BSc",
  years: "3 years",
  stream: "Information Technology",
  school:{
    name:["UP"],
    aps:[30]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 4,
    math: 4,
    physics: 0,
    home: 0

  },


  career:["Software Development","Geographical Information Systems"]

});
const course68 = new UP({
  name : "Information Science",
  code: "BIS",
  years: "3 years",
  stream: "Information Technology",
  school:{
    name:["UP"],
    aps:[28]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 0,
    physics: 0,
    home: 0

  },


  career:["System Specialist","Infopreneurs"]

});
const course69 = new UP({
  name : "Publishing",
  code: "BIS",
  years: "3 years",
  stream: "Information Technology",
  school:{
    name:["UP"],
    aps:[28]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 0,
    physics: 0,
    home: 0

  },


  career:["Copyright negotiator","Copy editor"]

});

//Theology
const course70 = new UP({
  name : "divinity",
  code: "BDiv",
  years: "4 years",
  stream: "Theology",
  school:{
    name:["UP"],
    aps:[25]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 4,
    math: 0,
    physics: 0,
    home: 0
  },
  career: ["Minister","Pastor","Priest"]
});
const course71 = new UP({
  name : "Theology",
  code: "BTh",
  years: "3 years",
  stream: "Theology",
  school:{
    name:["UP"],
    aps:[25]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 4,
    math: 0,
    physics: 0,
    home: 0
  },
    career: ["Minister","Pastor","Priest"]
});
const course72 = new UP({
  name : "Theology",
  code: "Diploma",
  years: "3 years",
  stream: "Theology",
  school:{
    name:["UP"],
    aps:[22]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 3,
    math: 0,
    physics: 0,
    home: 0
  },
    career: ["Minister","Pastor","Priest"]
});
//Law
const course73 = new UP({
  name : "Law",
  code: "LLB",
  years: "4 years",
  stream: "Law",
  school:{
    name:["UP"],
    aps:[32]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 0,
    physics: 0,
    home: 0
  },
    career: ["Attorneys","Advocates","Prosecutor"]
});
//Humanities
const course42 = new UP({
  name : "BA",
  code: "BA",
  years: "3 years",
  stream: "Humanties",
  school:{
    name:["UP"],
    aps:[30]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 0,
    physics: 0,
    home: 0

  },
  career:["Clinical","Counselling","Research Psychologist"],
  scarcity:4
});
const course43 = new UP({
  name : "Speech-Language Pathology",
  code: "BA",
  years: "4 years",
  stream: "Humanties",
  school:{
    name:["UP"],
    aps:[30]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 4,
    math: 4,
    physics: 0,
    home: 0

  },
  career:["Speech-Language therapist"],
  scarcity:4
});
const course44 = new UP({
  name : "Audiology",
  code: "BA",
  years: "4 years",
  stream: "Humanties",
  school:{
    name:["UP"],
    aps:[30]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 4,
    physics: 0,
    home: 5

  },
  career:["Audiologist"],
  scarcity:4
});
const course45 = new UP({
  name : "Social Work",
  code: "BSW",
  years: "4 years",
  stream: "Humanties",
  school:{
    name:["UP"],
    aps:[30]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 0,
    physics: 0,
    home: 0

  },
  career:["Social Worker"],
  scarcity:4
});
const course46 = new UP({
  name : "Law",
  code: "BA",
  years: "3 years",
  stream: "Humanties",
  school:{
    name:["UP"],
    aps:[30]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 0,
    physics: 0,
    home: 0

  },
  career:["Lawyer"],
  scarcity:4
});
const course47 = new UP({
  name : "Languages",
  code: "BA",
  years: "3 years",
  stream: "Humanties",
  school:{
    name:["UP"],
    aps:[30]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 0,
    physics: 0,
    home: 0

  },
  career:["Advertising","Media","Communication","Copywriting"],
  scarcity:4
});
const course48 = new UP({
  name : "Industrial Sociology and Labour Studies",
  code: "BSocSci",
  years: "3 years",
  stream: "Humanties",
  school:{
    name:["UP"],
    aps:[30]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 0,
    physics: 0,
    home: 0

  },
  career:["Labour relations practice"],
  scarcity:4
});

const course49 = new UP({
  name : "Heritage and Cultural Tourism",
  code: "BSocSci",
  years: "3 years",
  stream: "Humanties",
  school:{
    name:["UP"],
    aps:[30]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 0,
    physics: 0,
    home: 0

  },
  career:["Achivists","Museum experts","Tour leaders"],
  scarcity:4
});
const course50 = new UP({
  name : "Philosophy,Politics and Economics",
  code: "BSocSci",
  years: "3 years",
  stream: "Humanties",
  school:{
    name:["UP"],
    aps:[32]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 5,
    physics: 0,
    home: 0

  },
  career:["Journalism"],
  scarcity:4
});
const course51 = new UP({
  name : "International Studies",
  code: "BPolSci",
  years: "3 years",
  stream: "Humanties",
  school:{
    name:["UP"],
    aps:[30]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 0,
    physics: 0,
    home: 0

  },
  career:["Policy Analysis","Governance","Conflict resolution"],
  scarcity:4
});
const course52 = new UP({
  name : "Political Science",
  code: "BPolSci",
  years: "3 years",
  stream: "Humanties",
  school:{
    name:["UP"],
    aps:[30]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 0,
    physics: 0,
    home: 0

  },
  career:["Political Analysis","Strategic Intelligence","Risk Analysis"],
  scarcity:4
});
const course53 = new UP({
  name : "Sport and Recreation Management",
  code: "BA",
  years: "3 years",
  stream: "Humanties",
  school:{
    name:["UP"],
    aps:[30]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 0,
    physics: 0,
    home: 0

  },
  career:["Sport Recreation","Health and Fitness Industry","Marketing"],
  scarcity:4
});
const course54 = new UP({
  name : "Sport Psychology",
  code: "BA",
  years: "3 years",
  stream: "Humanties",
  school:{
    name:["UP"],
    aps:[30]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 0,
    physics: 0,
    home: 0

  },
  career:["Sport Recreation","Health and Fitness Industry","Marketing"],
  scarcity:4
});
const course55 = new UP({
  name : "Sport and Leisure in Society",
  code: "BA",
  years: "3 years",
  stream: "Humanties",
  school:{
    name:["UP"],
    aps:[30]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 0,
    physics: 0,
    home: 0

  },
  career:["Sport Recreation","Health and Fitness Industry","Marketing"],
  scarcity:4
});
const course56 = new UP({
  name : "Sports Coaching Science",
  code: "BA",
  years: "3 years",
  stream: "Humanties",
  school:{
    name:["UP"],
    aps:[30]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 0,
    physics: 0,
    home: 0

  },
  career:["Sport Recreation","Health and Fitness Industry","Marketing"],
  scarcity:4
});

const course57 = new UP({
  name : "Fine Arts",
  code: "BA",
  years: "4 years",
  stream: "Humanties",
  school:{
    name:["UP"],
    aps:[30]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 0,
    physics: 0,
    home: 0

  },
  career:["Gallery Manager","Art Facilitator","Artist"],
  scarcity:4
});
const course58 = new UP({
  name : "Information Design",
  code: "BA",
  years: "3 years",
  stream: "Humanties",
  school:{
    name:["UP"],
    aps:[30]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 0,
    physics: 0,
    home: 0

  },
  career:["Animators","illustrators","Interaction Design"],
  scarcity:4
});
const course59 = new UP({
  name : "Visual Studies",
  code: "BA",
  years: "3 years",
  stream: "Humanties",
  school:{
    name:["UP"],
    aps:[30]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 0,
    physics: 0,
    home: 0

  },
  career:["Art and film critics","Visual Culture Specialist"],
  scarcity:4
});
const course60 = new UP({
  name : "Music",
  code: "BA",
  years: "3 years",
  stream: "Humanties",
  school:{
    name:["UP"],
    aps:[30]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 0,
    physics: 0,
    home: 0

  },
  career:["Art and Culture teachers","Group Music facilitator","Artist"],
  scarcity:4
});
const course61 = new UP({
  name : "BMus",
  code: "BMus",
  years: "4 years",
  stream: "Humanties",
  school:{
    name:["UP"],
    aps:[30]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 0,
    physics: 0,
    home: 0

  },
  career:["Music teachers","Music technicians","Solo and Chamber music performer"],
  scarcity:4
});
const course62 = new UP({
  name : "Drama",
  code: "BDram",
  years: "3 years",
  stream: "Humanties",
  school:{
    name:["UP"],
    aps:[30]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 0,
    physics: 0,
    home: 0

  },
  career:["Actors","Physical Theatre artist","Theatre Critic"],
  scarcity:4
});
//Natural and Agricultural_Sciences
const course74 = new UP({
  name : "Biochemistry",
  code: "BSc",
  years: "3 years",
  stream: "Biological Science",
  school:{
    name:["UP"],
    aps:[30]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 5,
    physics: 5,
    home: 0

  },
  career:["Fine Chemicals","Food Industry","Pharmaceutical Industry"]
});
const course75 = new UP({
  name : "Biological Science",
  code: "BSc",
  years: "3 years",
  stream: "Biological Science",
  school:{
    name:["UP"],
    aps:[30]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 5,
    physics: 5,
    home: 0

  },
  career:["MChD","MBChB"]
});
const course76 = new UP({
  name : "Biotechnology",
  code: "BSc",
  years: "3 years",
  stream: "Biological Science",
  school:{
    name:["UP"],
    aps:[30]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 5,
    physics: 5,
    home: 0

  },
  career:["Laboratory","Reseacher","Bio-entrepreneur"]
});

const course77 = new UP({
  name : "Ecology",
  code: "BSc",
  years: "3 years",
  stream: "Biological Science",
  school:{
    name:["UP"],
    aps:[30]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 5,
    physics: 5,
    home: 0

  },
  career:['Environmentally based statutory']
});
const course78 = new UP({
  name : "Zoology",
  code: "BSc",
  years: "3 years",
  stream: "Biological Science",
  school:{
    name:["UP"],
    aps:[30]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 5,
    physics: 5,
    home: 0

  },
  career:["Nature Conservancies","Environmental Consultancies"]
});

const course79 = new UP({
  name : "Entomology",
  code: "BSc",
  years: "3 years",
  stream: "Biological Science",
  school:{
    name:["UP"],
    aps:[30]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 5,
    physics: 5,
    home: 0

  },
  career:["Biochemical Industries","Medical and Vetinary Research"]
});

const course80 = new UP({
  name : "Genetics",
  code: "BSc",
  years: "3 years",
  stream: "Biological Science",
  school:{
    name:["UP"],
    aps:[30]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 5,
    physics: 5,
    home: 0

  },
  career:["Molecular Biologist","Medical Geneticists","Cytogeneticists"]
});
const course81 = new UP({
  name : "Human Genetics",
  code: "BSc",
  years: "3 years",
  stream: "Biological Science",
  school:{
    name:["UP"],
    aps:[30]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 5,
    physics: 5,
    home: 0

  },
  career:["Clinical Geneticists","Biotechnologist","Agricultural Scientists"]
});
const course82 = new UP({
  name : "Human Physiology",
  code: "BSc",
  years: "3 years",
  stream: "Biological Science",
  school:{
    name:["UP"],
    aps:[30]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 5,
    physics: 5,
    home: 0

  },
  career:["Journalism","Medical Technology"]
});
const course83 = new UP({
  name : "Medical Science",
  code: "BSc",
  years: "3 years",
  stream: "Biological Science",
  school:{
    name:["UP"],
    aps:[30]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 5,
    physics: 5,
    home: 0

  },
  career:["Research","Virology","Chemical Pathology"]
});
const course84 = new UP({
  name : "Microbiology",
  code: "BSc",
  years: "3 years",
  stream: "Biological Science",
  school:{
    name:["UP"],
    aps:[30]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 5,
    physics: 5,
    home: 0

  },

  career:["Research","Dairy Industry","Food Industry"]
});

const course85 = new UP({
  name : "Plant Science",
  code: "BSc",
  years: "3 years",
  stream: "Biological Science",
  school:{
    name:["UP"],
    aps:[30]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 5,
    physics: 5,
    home: 0

  },
  career:["Laboratory"]
});
const course86 = new UP({
  name : "Chemistry",
  code: "BSc",
  years: "3 years",
  stream: "Physical Science",
  school:{
    name:["UP"],
    aps:[32]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 5,
    physics: 5,
    home: 0

  },
  career:["Researcher","Chemist"]
});

const course87 = new UP({
  name : "Physics",
  code: "BSc",
  years: "3 years",
  stream: "Physical Science",
  school:{
    name:["UP"],
    aps:[32]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 5,
    physics: 5,
    home: 0

  },
  career:["Lecturer","Reseacher","Teaching"]
});

const course90 = new UP({
  name : "Geography",
  code: "BSc",
  years: "3 years",
  stream: "Physical Sciences",
  school:{
    name:["UP"],
    aps:[32]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 5,
    physics: 5,
    home: 0

  },
  career:["Teaching","Mining","Tourism"]
});

const course91 = new UP({
  name : "Geoinformatics",
  code: "BSc",
  years: "3 years",
  stream: "Physical Sciences",
  school:{
    name:["UP"],
    aps:[32]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 5,
    physics: 5,
    home: 0

  },
  career:["Agriculture","Mineral Exploration","Foresty"]
});
const course92 = new UP({
  name : "Geology",
  code: "BSc",
  years: "3 years",
  stream: "Physical Sciences",
  school:{
    name:["UP"],
    aps:[32]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 5,
    physics: 5,
    home: 0

  },
  career:["Mining","Exploration","Research"]
});

const course93 = new UP({
  name : "Meteorology",
  code: "BSc",
  years: "3 years",
  stream: "Physical Sciences",
  school:{
    name:["UP"],
    aps:[32]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 5,
    physics: 5,
    home: 0

  },
  career:["Weather Forecasters","Researchers","Climatologist"]
});

const course94 = new UP({
  name : "Environmental Sciences",
  code: "BSc",
  years: "3 years",
  stream: "Physical Sciences",
  school:{
    name:["UP"],
    aps:[32]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 5,
    physics: 5,
    home: 0

  },
  career:["Environmental Consultants","Air Quality Manager","Environmental Protection"]
});

const course95 = new UP({
  name : "Environmental and Engineering Geology",
  code: "BSc",
  years: "3 years",
  stream: "Physical Sciences",
  school:{
    name:["UP"],
    aps:[32]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 5,
    physics: 5,
    home: 0

  },
  career:["Geologist","Mineralogist","Extraction Metallurgists"]
});


//Agricultural and food sciences

const course96 = new UP({
  name : "Food Management",
  code: "BSc",
  years: "4 years",
  stream: "Agricultural and Food Sciences",
  school:{
    name:["UP"],
    aps:[30]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 5,
    physics: 5,
    home: 0

  },
  career:["Food Product Developer","Quality Controllers","Researcher"]
});

const course97 = new UP({
  name : "Food Science",
  code: "BSc",
  years: "3 years",
  stream: "Agricultural and Food Sciences",
  school:{
    name:["UP"],
    aps:[30]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 5,
    physics: 5,
    home: 0

  },
  career:["Food Scientist","Quality and Safety Assurance Manager","Food Chemists"]
});

const course98 = new UP({
  name : "Nutrition",
  code: "BScAgric",
  years: "4 years",
  stream: "Agricultural and Food Sciences",
  school:{
    name:["UP"],
    aps:[30]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 5,
    physics: 5,
    home: 0

  },
  career:["Food Advisor"]
});
const course99 = new UP({
  name : "Agricultural Economics and Agribusiness Management",
  code: "BScAgric",
  years: "4 years",
  stream: "Agricultural and Food Sciences",
  school:{
    name:["UP"],
    aps:[30]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 5,
    physics: 5,
    home: 0

  },
  career:["Agricultural Economists"]
});

const course100 = new UP({
  name : "Animal Science and Pasure Science",
  code: "BScAgric",
  years: "4 years",
  stream: "Agricultural and Food Sciences",
  school:{
    name:["UP"],
    aps:[30]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 5,
    physics: 5,
    home: 0

  },
  career:["Commercial Farming","Animal Scientist"]
});

const course101 = new UP({
  name : "Plant Pathology",
  code: "BScAgric",
  years: "4 years",
  stream: "Agricultural and Food Science",
  school:{
    name:["UP"],
    aps:[30]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 5,
    physics: 5,
    home: 0

  },
  career:["Seed Cultivator","Farmers","Consultants"]
});

const course102 = new UP({
  name : "Applied Plant and Soil Science",
  code: "BSc",
  years: "4 years",
  stream: "Agricultural and Food Sciences",
  school:{
    name:["UP"],
    aps:[30]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 5,
    physics: 5,
    home: 0

  },
  career:["Research","Education and Training at Schools"]
});

const course103 = new UP({
  name : "Clothing: Retail Management",
  code: "BConsumer Science",
  years: "4 years",
  stream: "Consumer Sciences",
  school:{
    name:["UP"],
    aps:[28]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 4,
    physics: 0,
    home: 0

  },
  career:["Retail Management","Floor and Store Manager","Fashion Journalists"]
});


const course104 = new UP({
  name : "Hospitality Management",
  code: "BConsumer Science",
  years: "4 years",
  stream: "Consumer Sciences",
  school:{
    name:["UP"],
    aps:[28]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 4,
    physics: 0,
    home: 0

  },
  career:["Hotel Manager","Resturant Manager","Hotel Chefs de Cuisine"]
});

const course105 = new UP({
  name : "Foods: Retail Management",
  code: "BConsumer Science",
  years: "4 years",
  stream: "Consumer Sciences",
  school:{
    name:["UP"],
    aps:[28]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 4,
    physics: 5,
    home: 0

  },
  career:["Food Service","Sales Manager ","Marketing Manager"]
});

//Mathematical Sciences
const course106 = new UP({
  name : "Actuarial and Financial Mathematics",
  code: "BSc",
  years: "3 years",
  stream: "Mathematical Sciences",
  school:{
    name:["UP"],
    aps:[34]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 7,
    physics: 0,
    home: 0

  },
  career:["Mathematician","Financial Engineer","Actuaries"]
});

const course107 = new UP({
  name : "Mathematics",
  code: "BSc",
  years: "3 years",
  stream: "Mathematical Sciences",
  school:{
    name:["UP"],
    aps:[32]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 6,
    physics: 0,
    home: 0

  },
  career:["Lecturer","Financial Institution","Mathematician"]
});
const course108 = new UP({
  name : "Applied Mathematics",
  code: "BSc",
  years: "3 years",
  stream: "Mathematical Sciences",
  school:{
    name:["UP"],
    aps:[32]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 6,
    physics: 0,
    home: 0

  },
  career:["Lecturer","Financial Institution","Mathematician"]
});

const course114 = new UP({
  name : "Mathematical Statistics",
  code: "BSc",
  years: "3 years",
  stream: "Mathematical Sciences",
  school:{
    name:["UP"],
    aps:[32]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 6,
    physics: 0,
    home: 0

  },
  career:["Statician","Researcher"]
});

//Veterinary Science
const course109 = new UP({
  name : "Vetenary Science",
  code: "BVSc",
  years: "6 years",
  stream: "Vetenary Science",
  school:{
    name:["UP"],
    aps:[32]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 5,
    physics: 5,
    home: 0

  },
  career:["Veterinarians"]
});
const course110 = new UP({
  name : "Veterinary Nursing",
  code: "Diploma",
  years: "3 years",
  stream: "Veterinary Science",
  school:{
    name:["UP"],
    aps:[24]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 4,
    math: 4,
    physics: 4,
    home: 0

  },
  career:["Veterinary Nurse"]
});
//education

const course111 = new UP({
  name : "Teaching : Foundation Phase",
  code: "BEd",
  years: "4 years",
  stream: "Education",
  school:{
    name:["UP"],
    aps:[30]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 4,
    math: 0,
    physics: 0,
    home: 0

  },
  career:["Primary School Teacher","Pre-primary School Teacher"]
});

const course112 = new UP({
  name : "Teaching : Intermediate Phase",
  code: "BEd",
  years: "4 years",
  stream: "Education",
  school:{
    name:["UP"],
    aps:[30]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 4,
    math: 0,
    physics: 0,
    home: 0

  },
  career:["Primary School Teacher"]
});

const course113 = new UP({
  name : "Teaching : Senior Phase and Further Training",
  code: "BEd",
  years: "4 years",
  stream: "Education",
  school:{
    name:["UP"],
    aps:[30]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 4,
    math: 0,
    physics: 0,
    home: 0

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
  course84,course85,course86,course87,course90,course91,course92,course93,course94,
  course95,course96,course97,course98,course99,course100,course101,course102,course103,
  course104,course105,course106,course107,course108,course109,course110,course111,course112,course113,
  course114];


  UP.find((err,items)=>{
    if(items.length == 0){
      UP.insertMany(courseArray,(err)=>{
        if(err){
          console.log("did not insert");

        }
        else{
          console.log("Inserted");
        }
      });
      console.log("not found");
        res.render("home");
    }
    else{
      console.log("found");
      res.render("home");
    }
  });


  });



app.listen(2000,()=>{
  console.log("UP server running");
});
