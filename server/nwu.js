const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
mongoose.connect("mongodb+srv://admin-teboho:070997@cluster0.iffup.mongodb.net/schoolDB",{useNewUrlParser:true});

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

const Nwu = mongoose.model("NWU",nwuSchema);

const course1 = new Nwu({
  name : "Law",
  code: "BA",
  years: "3 years",
  stream: "Law",
  school:{
    name:["NWU"],
    aps:[28]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 0,
    math: 0,
    physics: 0,
    home: 5
  }

});
const course2 = new Nwu({
  name : "Law",
  code: "BCom",
  years: "3 years",
  stream: "Law",
  school:{
    name:["NWU","UP"],
    aps:[30,32]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 0,
    math: 4,
    physics: 0,
    home: 5
  }
});
const course3 = new Nwu({
  name : "Law",
  code: "LLB",
  years: "4 years",
  stream: "Law",
  school:{
    name:["NWU"],
    aps:[30]
  },
  subjects:{
    accounting: 0,
    mathLit: 5,
    english: 0,
    math: 3,
    physics: 0,
    home: 5
  }
});

//THEOLOGY
const course4 = new Nwu({
  name : "Ancient Languages",
  code: "BA",
  years: "3 years",
  stream: "Theology",
  school:{
    name:["NWU"],
    aps:[24]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 4,
    math: 0,
    physics: 0,
    home: 0
  }
});
const course5 = new Nwu({
  name : "Pastoral Psychology",
  code: "BA",
  years: "3 years",
  stream: "Theology",
  school:{
    name:["NWU"],
    aps:[24]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 4,
    math: 0,
    physics: 0,
    home: 0
  }
});
const course6 = new Nwu({
  name : "Divinity",
  code: "BDiv",
  years: "3 years",
  stream: "Theology",
  school:{
    name:["NWU"],
    aps:[24]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 4,
    math: 0,
    physics: 0,
    home: 0
  }
});
const course7 = new Nwu({
  name : "Theology",
  code: "BTh",
  years: "3 years",
  stream: "Theology",
  school:{
    name:["NWU"],
    aps:[24]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 4,
    math: 0,
    physics: 0,
    home: 0
  }
});
//Education

const course8 = new Nwu({
  name : "Senior and Further Education and Training",
  code: "BEd",
  years: "4 years",
  stream: "Education",
  school:{
    name:["NWU"],
    aps:[24]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 4,
    math: 0,
    physics: 0,
    home: 0
  }
});

//Natural and agricultural Science
const course9 = new Nwu({
  name : "Animal Health",
  code: "Diploma",
  years: "3 years",
  stream: "Natural And Agricultural Sciences",
  school:{
    name:["NWU"],
    aps:[19]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 3,
    math: 3,
    physics: 3,
    home: 0
  }
});
const course10 = new Nwu({
  name : "Animal Science",
  code: "Diploma",
  years: "3 years",
  stream: "Natural And Agricultural Sciences",
  school:{
    name:["NWU"],
    aps:[19]
  },
  subjects:{
    accounting: 0,
    mathLit: 5,
    english: 3,
    math: 0,
    physics: 3,
    home: 0
  }
});
const course11 = new Nwu({
  name : "Plant Science",
  code: "Diploma",
  years: "3 years",
  stream: "Natural And Agricultural Sciences",
  school:{
    name:["NWU"],
    aps:[19]
  },
  subjects:{
    accounting: 0,
    mathLit: 5,
    english: 3,
    math: 3,
    physics: 3,
    home: 0
  }
});
const course12 = new Nwu({
  name : "Chemistry and Physics",
  code: "BSC",
  years: "3 years",
  stream: "Natural And Agricultural Sciences",
  school:{
    name:["NWU"],
    aps:[26]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 0,
    math: 5,
    physics: 4,
    home: 0
  }
});
const course13 = new Nwu({
  name : "Physics and Mathematics",
  code: "BSC",
  years: "3 years",
  stream: "Natural And Agricultural Sciences",
  school:{
    name:["NWU"],
    aps:[26]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 0,
    math: 5,
    physics: 4,
    home: 0
  }
});
const course14 = new Nwu({
  name : "Physics and Applied Mathematics",
  code: "BSC",
  years: "3 years",
  stream: "Natural And Agricultural Sciences",
  school:{
    name:["NWU"],
    aps:[26]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 0,
    math: 5,
    physics: 4,
    home: 0
  }
});
const course15 = new Nwu({
  name : "Physics and Computer Science",
  code: "BSC",
  years: "3 years",
  stream: "Natural And Agricultural Sciences",
  school:{
    name:["NWU"],
    aps:[26]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 0,
    math: 5,
    physics: 4,
    home: 0
  }
});

const course16 = new Nwu({
  name : "Computer Science and Mathematics",
  code: "BSC",
  years: "3 years",
  stream: "Natural And Agricultural Sciences",
  school:{
    name:["NWU"],
    aps:[26]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 0,
    math: 5,
    physics: 4,
    home: 0
  }
});
const course17 = new Nwu({
  name : "Biochemistry and Chemistry",
  code: "BSC",
  years: "3 years",
  stream: "Natural And Agricultural Sciences",
  school:{
    name:["NWU"],
    aps:[26]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 0,
    math: 4,
    physics: 4,
    home: 0
  }
});
const course18 = new Nwu({
  name : "Chemistry",
  code: "BSC",
  years: "3 years",
  stream: "Natural And Agricultural Sciences",
  school:{
    name:["NWU"],
    aps:[26]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 0,
    math: 5,
    physics: 4,
    home: 0
  }
});
const course19 = new Nwu({
  name : "Mathematics and Applied Mathematics",
  code: "BSC",
  years: "3 years",
  stream: "Natural And Agricultural Sciences",
  school:{
    name:["NWU"],
    aps:[26]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 0,
    math: 5,
    physics: 4,
    home: 0
  }
});
const course20 = new Nwu({
  name : "Geography and Applied Mathematics",
  code: "BSC",
  years: "3 years",
  stream: "Natural And Agricultural Sciences",
  school:{
    name:["NWU"],
    aps:[26]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 0,
    math: 5,
    physics: 4,
    home: 0
  }
});
const course21 = new Nwu({
  name : "Applied Mathematics and Chemistry",
  code: "BSC",
  years: "3 years",
  stream: "Natural And Agricultural Sciences",
  school:{
    name:["NWU"],
    aps:[26]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 0,
    math: 5,
    physics: 4,
    home: 0
  }
});
const course22 = new Nwu({
  name :"Chemistry and Mathematics",
  code: "BSC",
  years: "3 years",
  stream: "Natural And Agricultural Sciences",
  school:{
    name:["NWU"],
    aps:[26]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 0,
    math: 5,
    physics: 4,
    home: 0
  }
});
const course23 = new Nwu({
  name : "Applied Mathematics and Electronics",
  code: "BSC",
  years: "3 years",
  stream: "Natural And Agricultural Sciences",
  school:{
    name:["NWU"],
    aps:[26]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 0,
    math: 5,
    physics: 4,
    home: 0
  }
});
const course24 = new Nwu({
  name : "Electronics and Mathematics",
  code: "BSC",
  years: "3 years",
  stream: "Natural And Agricultural Sciences",
  school:{
    name:["NWU"],
    aps:[26]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 0,
    math: 5,
    physics: 4,
    home: 0
  }
});
const course25 = new Nwu({
  name : "Electronics and Physics",
  code: "BSC",
  years: "3 years",
  stream: "Natural And Agricultural Sciences",
  school:{
    name:["NWU"],
    aps:[26]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 0,
    math: 5,
    physics: 4,
    home: 0
  }
});
const course26 = new Nwu({
  name : "Chemistry and Computer Science",
  code: "BSC",
  years: "3 years",
  stream: "Natural And Agricultural Sciences",
  school:{
    name:["NWU"],
    aps:[26]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 0,
    math: 5,
    physics: 4,
    home: 0
  }
});
const course27 = new Nwu({
  name : "Computer Science and Electronics",
  code: "BSC",
  years: "3 years",
  stream: "Natural And Agricultural Sciences",
  school:{
    name:["NWU"],
    aps:[26]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 0,
    math: 5,
    physics: 4,
    home: 0
  }
});
const course28 = new Nwu({
  name : "Computer Science and Statistics",
  code: "BSC",
  years: "3 years",
  stream: "Natural And Agricultural Sciences",
  school:{
    name:["NWU"],
    aps:[26]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 0,
    math: 5,
    physics: 4,
    home: 0
  }
});
const course29 = new Nwu({
  name : "Computer Science and Economics",
  code: "BSC",
  years: "3 years",
  stream: "Natural And Agricultural Sciences",
  school:{
    name:["NWU"],
    aps:[26]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 0,
    math: 5,
    physics: 4,
    home: 0
  }
});

const course30 = new Nwu({
  name : "Mathematics and Economics",
  code: "BSC",
  years: "3 years",
  stream: "Natural And Agricultural Sciences",
  school:{
    name:["NWU"],
    aps:[26]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 0,
    math: 5,
    physics: 0,
    home: 0
  }
});
const course31 = new Nwu({
  name : "Information Technology",
  code: "BSC",
  years: "3 years",
  stream: "Natural And Agricultural Sciences",
  school:{
    name:["NWU"],
    aps:[26]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 0,
    math: 4,
    physics: 0,
    home: 0
  }
});
const course32 = new Nwu({
  name : "Statistics",
  code: "BSC",
  years: "3 years",
  stream: "Natural And Agricultural Sciences",
  school:{
    name:["NWU"],
    aps:[26]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 0,
    math: 5,
    physics: 4,
    home: 0
  }
});
const course33 = new Nwu({
  name : "Mathematics",
  code: "BSC",
  years: "3 years",
  stream: "Natural And Agricultural Sciences",
  school:{
    name:["NWU"],
    aps:[26]
  }
});
const course34 = new Nwu({
  name : "Microbiology and Biochemistry",
  code: "BSC",
  years: "3 years",
  stream: "Natural And Agricultural Sciences",
  school:{
    name:["NWU"],
    aps:[26]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 0,
    math: 4,
    physics: 4,
    home: 0
  }
});
const course35 = new Nwu({
  name : "Microbiology and Botany",
  code: "BSC",
  years: "3 years",
  stream: "Natural And Agricultural Sciences",
  school:{
    name:["NWU"],
    aps:[26]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 0,
    math: 4,
    physics: 4,
    home: 0
  }
});
const course36 = new Nwu({
  name : "Zoology and Biochemistry",
  code: "BSC",
  years: "3 years",
  stream: "Natural And Agricultural Sciences",
  school:{
    name:["NWU"],
    aps:[26]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 0,
    math: 4,
    physics: 4,
    home: 0
  }
});
const course37 = new Nwu({
  name : "Chemistry and Psysiology",
  code: "BSC",
  years: "3 years",
  stream: "Natural And Agricultural Sciences",
  school:{
    name:["NWU"],
    aps:[26]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 0,
    math: 4,
    physics: 4,
    home: 0
  }
});
const course38 = new Nwu({
  name : "Zoology and Botany",
  code: "BSC",
  years: "3 years",
  stream: "Natural And Agricultural Sciences",
  school:{
    name:["NWU"],
    aps:[26]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 0,
    math: 4,
    physics: 4,
    home: 0
  }
});
const course39 = new Nwu({
  name : "Zoology and Microbiology",
  code: "BSC",
  years: "3 years",
  stream: "Natural And Agricultural Sciences",
  school:{
    name:["NWU"],
    aps:[26]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 0,
    math: 4,
    physics: 4,
    home: 0
  }
});
const course40 = new Nwu({
  name : "Zoology and Psysiology",
  code: "BSC",
  years: "3 years",
  stream: "Natural And Agricultural Sciences",
  school:{
    name:["NWU"],
    aps:[26]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 0,
    math: 4,
    physics: 4,
    home: 0
  }
});
const course41 = new Nwu({
  name : "Microbiology and Psysiology",
  code: "BSC",
  years: "3 years",
  stream: "Natural And Agricultural Sciences",
  school:{
    name:["NWU"],
    aps:[26]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 0,
    math: 4,
    physics: 4,
    home: 0
  }
});
const course42 = new Nwu({
  name : "Botany and Biochemistry",
  code: "BSC",
  years: "3 years",
  stream: "Natural And Agricultural Sciences",
  school:{
    name:["NWU"],
    aps:[26]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 0,
    math: 4,
    physics: 4,
    home: 0
  }
});
const course43 = new Nwu({
  name : "Microbiology and Chemistry",
  code: "BSC",
  years: "3 years",
  stream: "Natural And Agricultural Sciences",
  school:{
    name:["NWU"],
    aps:[26]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 0,
    math: 4,
    physics: 4,
    home: 0
  }
});
const course44 = new Nwu({
  name : "Botany and Chemistry",
  code: "BSC",
  years: "3 years",
  stream: "Natural And Agricultural Sciences",
  school:{
    name:["NWU"],
    aps:[26]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 0,
    math: 4,
    physics: 4,
    home: 0
  }
});
const course45 = new Nwu({
  name : "Geography and Computer Sciences",
  code: "BSC",
  years: "3 years",
  stream: "Natural And Agricultural Sciences",
  school:{
    name:["NWU"],
    aps:[26]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 0,
    math: 4,
    physics: 4,
    home: 0
  }
});
const course46 = new Nwu({
  name : "Geography and Botany",
  code: "BSC",
  years: "3 years",
  stream: "Natural And Agricultural Sciences",
  school:{
    name:["NWU"],
    aps:[26]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 0,
    math: 4,
    physics: 4,
    home: 0
  }
});
const course47 = new Nwu({
  name : "Zoology and Chemistry",
  code: "BSC",
  years: "3 years",
  stream: "Natural And Agricultural Sciences",
  school:{
    name:["NWU"],
    aps:[26]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 0,
    math: 4,
    physics: 4,
    home: 0
  }

});
const course48 = new Nwu({
  name : "Geology and Chemistry",
  code: "BSC",
  years: "3 years",
  stream: "Natural And Agricultural Sciences",
  school:{
    name:["NWU"],
    aps:[26]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 0,
    math: 4,
    physics: 4,
    home: 0
  }
});

const course49 = new Nwu({
  name : "Zoology and Geography",
  code: "BSC",
  years: "3 years",
  stream: "Natural And Agricultural Sciences",
  school:{
    name:["NWU"],
    aps:[26]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 0,
    math: 4,
    physics: 4,
    home: 0
  }

});
const course50 = new Nwu({
  name : "Geology and Geography",
  code: "BSC",
  years: "3 years",
  stream: "Natural And Agricultural Sciences",
  school:{
    name:["NWU"],
    aps:[26]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 0,
    math: 4,
    physics: 4,
    home: 0

  }
});

const course51 = new Nwu({
  name : "Geology and Botany",
  code: "BSC",
  years: "3 years",
  stream: "Natural And Agricultural Sciences",
  school:{
    name:["NWU"],
    aps:[26]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 0,
    math: 4,
    physics: 4,
    home: 0
  }
});
const course52 = new Nwu({
  name : "Zoology and Geology",
  code: "BSC",
  years: "3 years",
  stream: "Natural And Agricultural Sciences",
  school:{
    name:["NWU"],
    aps:[26]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 0,
    math: 4,
    physics: 4,
    home: 0
  }
});
const course53 = new Nwu({
  name : "Geology and Microbiology",
  code: "BSC",
  years: "3 years",
  stream: "Natural And Agricultural Sciences",
  school:{
    name:["NWU"],
    aps:[26]
  },
  companies:["LLB is needed to practice law"],
  scarcity:4
});
const course54 = new Nwu({
  name : "Tourism and Zoology",
  code: "BSC",
  years: "3 years",
  stream: "Natural And Agricultural Sciences",
  school:{
    name:["NWU"],
    aps:[26]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 0,
    math: 4,
    physics: 4,
    home: 0
  }
});
const course55 = new Nwu({
  name : "Tourism and Geography",
  code: "BSC",
  years: "3 years",
  stream: "Natural And Agricultural Sciences",
  school:{
    name:["NWU"],
    aps:[26]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 0,
    math: 4,
    physics: 4,
    home: 0
  }
});
const course56 = new Nwu({
  name : "Tourism and Botany",
  code: "BSC",
  years: "3 years",
  stream: "Natural And Agricultural Sciences",
  school:{
    name:["NWU"],
    aps:[26]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 0,
    math: 4,
    physics: 4,
    hoNwume: 0
  }
});
const course57 = new Nwu({
  name : "Chemistry and Geography",
  code: "BSC",
  years: "3 years",
  stream: "Natural And Agricultural Sciences",
  school:{
    name:["NWU"],
    aps:[26]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 0,
    math: 5,
    physics: 4,
    home: 0
  }
});
const course58 = new Nwu({
  name : "Financial Mathematics",
  code: "BSC",
  years: "3 years",
  stream: "Natural And Agricultural Sciences",
  school:{
    name:["NWU"],
    aps:[32]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 0,
    math: 6,
    physics: 0,
    home: 0
  }
});
const course59 = new Nwu({
  name : "Quantitative Risk Management",
  code: "BSC",
  years: "3 years",
  stream: "Natural And Agricultural Sciences",
  school:{
    name:["NWU"],
    aps:[32]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 0,
    math: 6,
    physics: 0,
    home: 0
  }
});
const course60 = new Nwu({
  name : "Business Analytics and Data mining",
  code: "BSC",
  years: "3 years",
  stream: "Natural And Agricultural Sciences",
  school:{
    name:["NWU"],
    aps:[32]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 0,
    math: 6,
    physics: 0,
    home: 0
  }
});
const course61 = new Nwu({
  name : "Actuarial Science",
  code: "BSC",
  years: "3 years",
  stream: "Natural And Agricultural Sciences",
  school:{
    name:["NWU"],
    aps:[32]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 0,
    math: 6,
    physics: 0,
    home: 0
  }
});
const course62 = new Nwu({
  name : "Urban and Regional Planning",
  code: "BSC",
  years: "3 years",
  stream: "Natural And Agricultural Sciences",
  school:{
    name:["NWU","UP"],
    aps:[27]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 0,
    math: 5,
    physics: 0,
    home: 0
  }
});
const course64 = new Nwu({
  name : "Agriculture and Agricultural economics",
  code: "BSC",
  years: "3 years",
  stream: "Natural And Agricultural Sciences",
  school:{
    name:["NWU"],
    aps:[22]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 4,
    math: 4,
    physics: 4,
    home: 0
  }
});
const course65 = new Nwu({
  name : "Agriculture and Animal Science",
  code: "BSC",
  years: "3 years",
  stream: "Natural And Agricultural Sciences",
  school:{
    name:["NWU"],
    aps:[22]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 4,
    math: 4,
    physics: 4,
    home: 0
  }
});
const course66 = new Nwu({
  name : "Agriculture and Agronomy",
  code: "BSC",
  years: "3 years",
  stream: "Natural And Agricultural Sciences",
  school:{
    name:["NWU"],
    aps:[22]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 4,
    math: 4,
    physics: 4,
    home: 0
  }
});
const course67 = new Nwu({
  name : "Agriculture and Animal Health",
  code: "BSC",
  years: "3 years",
  stream: "Natural And Agricultural Sciences",
  school:{
    name:["NWU"],
    aps:[22]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 4,
    math: 4,
    physics: 4,
    home: 0
  }
});
const course68 = new Nwu({
  name : "Indigeneous Knowledge Systems",
  code: "BSC",
  years: "3 years",
  stream: "Natural And Agricultural Sciences",
  school:{
    name:["NWU"],
    aps:[20]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 4,
    math: 0,
    physics: 0,
    home: 0
  }
});
//health Science
const course69 = new Nwu({
  name : "Coaching Science",
  code: "Diploma",
  years: "2 years",
  stream: "Health Sciences",
  school:{
    name:["NWU"],
    aps:[18]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 0,
    math: 0,
    physics: 0,
    home: 0
  }
});
const course70 = new Nwu({
  name : "Physiology and Biochemistry",
  code: "BHS",
  years: "3 years",
  stream: "Health Sciences",
  school:{
    name:["NWU"],
    aps:[24]
  },
  subjects:{
    accounting: null,
    mathLit: 0,
    english: null,
    math: 5,
    physics: 4,
    home: 0
  }
});
const course71 = new Nwu({
  name : "Physiology and Psychology",
  code: "BHS",
  years: "3 years",
  stream: "Health Sciences",
  school:{
    name:["NWU"],
    aps:[24]
  },
  subjects:{
    accounting: null,
    mathLit: 0,
    english: null,
    math: 3,
    physics: 4,
    home: 0
  }
});
const course72 = new Nwu({
  name : "Sport Coaching and Human Movement Sciences",
  code: "BHS",
  years: "3 years",
  stream: "Health Sciences",
  school:{
    name:["NWU"],
    aps:[24]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 0,
    math: 0,
    physics: 0,
    home: 0
  }
});
const course73 = new Nwu({
  name : "Recreation Science and Psychology",
  code: "BHS",
  years: "3 years",
  stream: "Health Sciences",
  school:{
    name:["NWU"],
    aps:[24]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 0,
    math: 0,
    physics: 0,
    home: 0
  }
});
const course74 = new Nwu({
  name : "Recreation Science and Tourism Management",
  code: "BHS",
  years: "3 years",
  stream: "Health Sciences",
  school:{
    name:["NWU"],
    aps:[24]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 0,
    math: 0,
    physics: 0,
    home: 0
  }
});
const course75 = new Nwu({
  name : "Sport and Recreation Administration",
  code: "BHS",
  years: "3 years",
  stream: "Health Sciences",
  school:{
    name:["NWU"],
    aps:[24]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 0,
    math: 0,
    physics: 0,
    home: 0
  }
});
const course76 = new Nwu({
  name : "Psychology and Labour Relations Management",
  code: "BA",
  years: "3 years",
  stream: "Health Sciences",
  school:{
    name:["NWU"],
    aps:[24]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 0,
    math: 0,
    physics: 0,
    home: 0
  }
});
const course77 = new Nwu({
  name : "Psychology and Geography",
  code: "BA",
  years: "3 years",
  stream: "Health Sciences",
  school:{
    name:["NWU"],
    aps:[24]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 0,
    math: 0,
    physics: 0,
    home: 0
  }
});
const course78 = new Nwu({
  name : "Environmental Management and Psychology",
  code: "BA",
  years: "3 years",
  stream: "Health Sciences",
  school:{
    name:["NWU"],
    aps:[24]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 0,
    math: 0,
    physics: 0,
    home: 0
  }
});
const course79 = new Nwu({
  name : "Environmental Management and Tourism Management",
  code: "BA",
  years: "3 years",
  stream: "Health Sciences",
  school:{
    name:["NWU"],
    aps:[24]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 0,
    math: 0,
    physics: 0,
    home: 0
  }
});
const course148 = new Nwu({
  name : "Tourism Management",
  code: "BA",
  years: "3 years",
  stream: "Health Sciences",
  school:{
    name:["NWU"],
    aps:[24]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 0,
    math: 0,
    physics: 0,
    home: 0
  }
});
const course80 = new Nwu({
  name : "Psychology",
  code: "BSoc",
  years: "3 years",
  stream: "Health Sciences",
  school:{
    name:["NWU"],
    aps:[24]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 4,
    math: 0,
    physics: 0,
    home: 0
  }
});
const course81 = new Nwu({
  name : "Consumer Studies",
  code: "BCon",
  years: "3 years",
  stream: "Health Sciences",
  school:{
    name:["NWU"],
    aps:[24]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 0,
    math: 0,
    physics: 0,
    home: 0
  }
});
const course82 = new Nwu({
  name : "Food Product Management and Food Supply",
  code: "BCon",
  years: "3 years",
  stream: "Health Sciences",
  school:{
    name:["NWU"],
    aps:[24]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 0,
    math: 4,
    physics: 4,
    home: 0
  }
});
const course83 = new Nwu({
  name : "Food Product Management and Food communication",
  code: "BCon",
  years: "3 years",
  stream: "Health Sciences",
  school:{
    name:["NWU"],
    aps:[24]
  },
  subjects:{
    accounting: 0,
    mathLit: 6,
    english: 0,
    math: 4,
    physics: 4,
    home: 0
  }
});
const course84 = new Nwu({
  name : "Fashion Retail Management and Fashion supply",
  code: "BCon",
  years: "3 years",
  stream: "Health Sciences",
  school:{
    name:["NWU"],
    aps:[24]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 0,
    math: 4,
    physics: 0,
    home: 0
  }
});
const course85 = new Nwu({
  name : "Fashion Retail Management and Fashion Communication",
  code: "BCon",
  years: "3 years",
  stream: "Health Sciences",
  school:{
    name:["NWU"],
    aps:[24]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 0,
    math: 4,
    physics: 4,
    home: 0
  }
});
const course86 = new Nwu({
  name : "Social Work ",
  code: "BSoc",
  years: "4 years",
  stream: "Health Sciences",
  school:{
    name:["NWU"],
    aps:[28]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 4,
    math: 0,
    physics: 0,
    home: 4
  }
});
const course87 = new Nwu({
  name : "Pharmacy",
  code: "BPharm",
  years: "4 years",
  stream: "Health Sciences",
  school:{
    name:["NWU"],
    aps:[32]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 0,
    math: 5,
    physics: 5,
    home: 0
  }
});
const course88 = new Nwu({
  name : "Dietetics",
  code: "BSc",
  years: "4 years",
  stream: "Health Sciences",
  school:{
    name:["NWU"],
    aps:[26]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 0,
    math: 4,
    physics: 4,
    home: 0
  }
});

const course89 = new Nwu({
  name : "Occupational Hygiene",
  code: "BHS",
  years: "3 years",
  stream: "Health Sciences",
  school:{
    name:["NWU"],
    aps:[27]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 0,
    math: 5,
    physics: 5,
    home: 0
  }
});

const course90 = new Nwu({
  name : "Biokinetics",
  code: "BHS",
  years: "4 years",
  stream: "Health Sciences",
  school:{
    name:["NWU"],
    aps:[32]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 0,
    math: 3,
    physics: 4,
    home: 0
  }
});
const course91 = new Nwu({
  name : "Nursing",
  code: "BCur",
  years: "4 years",
  stream: "Health Sciences",
  school:{
    name:["NWU"],
    aps:[25]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 4,
    math: 0,
    physics: 4,
    home: 0
  }
});

//Humanities

const course92 = new Nwu({
  name : "Public Governance",
  code: "BA",
  years: "3 years",
  stream: "Humanities",
  school:{
    name:["NWU"],
    aps:[25]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 4,
    math: 0,
    physics: 0,
    home: 4
  }
});
const course93 = new Nwu({
  name : "Language and Literary Studies",
  code: "BA",
  years: "3 years",
  stream: "Humanities",
  school:{
    name:["NWU"],
    aps:[24]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 4,
    math: 0,
    physics: 0,
    home: 4
  }
});
const course94 = new Nwu({
  name : "Music and Society",
  code: "BA",
  years: "3 years",
  stream: "Humanities",
  school:{
    name:["NWU"],
    aps:[21]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 4,
    math: 0,
    physics: 0,
    home: 4
  }
});
const course95 = new Nwu({
  name : "Music",
  code: "BMus",
  years: "4 years",
  stream: "Humanities",
  school:{
    name:["NWU"],
    aps:[24]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 4,
    math: 0,
    physics: 0,
    home: 4
  }
});
const course96 = new Nwu({
  name : "Music",
  code: "Diploma",
  years: "3 years",
  stream: "Humanities",
  school:{
    name:["NWU"],
    aps:[18]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 4,
    math: 0,
    physics: 0,
    home: 4
  }
});
const course97 = new Nwu({
  name : "Behavioural Science",
  code: "BA",
  years: "3 years",
  stream: "Humanities",
  school:{
    name:["NWU"],
    aps:[22]
  },
  subjects:{
    accounting: 0,
    mathLit: 4,
    english: 0,
    math: 0,
    physics: 0,
    home: 0
  }
});
const course98 = new Nwu({
  name : "Heritage and Cultural Tourism Management",
  code: "BA",
  years: "3 years",
  stream: "Humanities",
  school:{
    name:["NWU"],
    aps:[22]
  },
  subjects:{
    accounting: 0,
    mathLit: 4,
    english: 0,
    math: 0,
    physics: 0,
    home: 0
  }
});
const course99 = new Nwu({
  name : "Sociology and Labour Relations Management",
  code: "BA",
  years: "3 years",
  stream: "Humanities",
  school:{
    name:["NWU"],
    aps:[22]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 4,
    math: 0,
    physics: 0,
    home: 4
  }
});
const course100 = new Nwu({
  name : "Graphic Design",
  code: "BA",
  years: "3 years",
  stream: "Humanities",
  school:{
    name:["NWU"],
    aps:[24]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 0,
    math: 0,
    physics: 0,
    home: 0
  }
});
const course101 = new Nwu({
  name : "Communication",
  code: "BA",
  years: "3 years",
  stream: "Humanities",
  school:{
    name:["NWU"],
    aps:[24]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 0,
    physics: 0,
    home: 5
  }
});
const course102 = new Nwu({
  name : "Ethics",
  code: "BPhil",
  years: "3 years",
  stream: "Humanities",
  school:{
    name:["NWU"],
    aps:[26]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 0,
    math: 0,
    physics: 0,
    home: 0
  }
});
const course103 = new Nwu({
  name : "Philosophy",
  code: "BPhil",
  years: "3 years",
  stream: "Humanities",
  school:{
    name:["NWU"],
    aps:[26]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 0,
    math: 0,
    physics: 0,
    home: 0
  }
});
const course104 = new Nwu({
  name : "Politics and Economics Ethics",
  code: "BPhil",
  years: "3 years",
  stream: "Humanities",
  school:{
    name:["NWU"],
    aps:[26]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 0,
    math: 0,
    physics: 0,
    home: 0
  }
});
const course105 = new Nwu({
  name : "Philosophy and Psychological Sciences Ethics",
  code: "BPhil",
  years: "3 years",
  stream: "Humanities",
  school:{
    name:["NWU"],
    aps:[26]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 0,
    math: 0,
    physics: 0,
    home: 0
  }
});

const course106 = new Nwu({
  name : "Phiosophy and Natural Sciences Ethics",
  code: "BPhil",
  years: "3 years",
  stream: "Humanities",
  school:{
    name:["NWU"],
    aps:[26]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 0,
    math: 0,
    physics: 0,
    home: 0
  }
});
const course107 = new Nwu({
  name : "Philosophy and Languages Ethics",
  code: "BPhil",
  years: "3 years",
  stream: "Humanities",
  school:{
    name:["NWU"],
    aps:[26]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 0,
    math: 0,
    physics: 0,
    home: 0
  }
});
const course108 = new Nwu({
  name : "Phiosophy and Social Sciences",
  code: "BPhil",
  years: "3 years",
  stream: "Humanities",
  school:{
    name:["NWU"],
    aps:[26]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 0,
    math: 0,
    physics: 0,
    home: 0
  }
});
const course109 = new Nwu({
  name : "Social Science",
  code: "BSocSc",
  years: "3 years",
  stream: "Humanities",
  school:{
    name:["NWU"],
    aps:[24]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 0,
    math: 0,
    physics: 0,
    home: 0
  }
});
const course110 = new Nwu({
  name : "Humanities",
  code: "BA",
  years: "3 years",
  stream: "Humanities",
  school:{
    name:["NWU"],
    aps:[24]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 0,
    math: 0,
    physics: 0,
    home: 0
  }
});

//Economic and Management Sciences
const course111 = new Nwu({
  name : "Accounting",
  code: "BCom",
  years: "3 years",
  stream: "Economic and Management Sciences",
  school:{
    name:["NWU"],
    aps:[24]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 4,
    math: 3,
    physics: 0,
    home: 4
  }
});
const course112 = new Nwu({
  name : "Chartered Accountancy(CA)",
  code: "BCom",
  years: "3 years",
  stream: "Economic and Management Sciences",
  school:{
    name:["NWU"],
    aps:[30]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 4,
    math: 5,
    physics: 0,
    home: 4
  }
});
const course113 = new Nwu({
  name : "Financial Accounting",
  code: "BCom",
  years: "3 years",
  stream: "Economic and Management Sciences",
  school:{
    name:["NWU"],
    aps:[28]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 4,
    math: 4,
    physics: 0,
    home: 4
  }
});
const course114 = new Nwu({
  name : "Forensic Accountancy",
  code: "BCom",
  years: "3 years",
  stream: "Economic and Management Sciences",
  school:{
    name:["NWU"],
    aps:[36]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 5,
    physics: 0,
    home: 5
  }
});
const course115 = new Nwu({
  name : "Management Accountancy",
  code: "BCom",
  years: "3 years",
  stream: "Economic and Management Sciences",
  school:{
    name:["NWU"],
    aps:[30]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 4,
    math: 5,
    physics: 0,
    home: 4
  }
});
const course116 = new Nwu({
  name : "Operations Research",
  code: "BCom",
  years: "3 years",
  stream: "Economic and Management Sciences",
  school:{
    name:["NWU"],
    aps:[30]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 4,
    math: 4,
    physics: 0,
    home: 4
  }
});
const course117 = new Nwu({
  name : "Statistics",
  code: "BCom",
  years: "3 years",
  stream: "Economic and Management Sciences",
  school:{
    name:["NWU"],
    aps:[24]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 4,
    math: 4,
    physics: 0,
    home: 4
  }
});
const course118 = new Nwu({
  name : "Business Operations and Logistics Management",
  code: "BCom",
  years: "3 years",
  stream: "Economic and Management Sciences",
  school:{
    name:["NWU"],
    aps:[24]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 4,
    math: 3,
    physics: 0,
    home: 4
  }
});
const course119 = new Nwu({
  name : "Business Operations and Transport Economics",
  code: "BCom",
  years: "3 years",
  stream: "Economic and Management Sciences",
  school:{
    name:["NWU"],
    aps:[24]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 4,
    math: 3,
    physics: 0,
    home: 4
  }
});
const course120 = new Nwu({
  name : "Agricultural Economics and Risk Management",
  code: "BCom",
  years: "3 years",
  stream: "Economic and Management Sciences",
  school:{
    name:["NWU"],
    aps:[26]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 4,
    math: 4,
    physics: 0,
    home: 4
  }
});
const course121 = new Nwu({
  name : "Economics and Econometrics",
  code: "BCom",
  years: "3 years",
  stream: "Economic and Management Sciences",
  school:{
    name:["NWU"],
    aps:[26]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 4,
    math: 3,
    physics: 0,
    home: 4
  }
});
const course122 = new Nwu({
  name : "Economics and International Trade",
  code: "BCom",
  years: "3 years",
  stream: "Economic and Management Sciences",
  school:{
    name:["NWU"],
    aps:[26]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 4,
    math: 4,
    physics: 0,
    home: 4
  }
});
const course123 = new Nwu({
  name : "Economics and Informatics",
  code: "BCom",
  years: "3 years",
  stream: "Economic and Management Sciences",
  school:{
    name:["NWU"],
    aps:[26]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 4,
    math: 4,
    physics: 0,
    home: 4
  }
});
const course124 = new Nwu({
  name : "Economics and Risk Management",
  code: "BCom",
  years: "3 years",
  stream: "Economic and Management Sciences",
  school:{
    name:["NWU"],
    aps:[26]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 4,
    math: 4,
    physics: 0,
    home: 4
  }
});
const course125 = new Nwu({
  name : "Human Resource Management",
  code: "BA",
  years: "3 years",
  stream: "Economic and Management Sciences",
  school:{
    name:["NWU"],
    aps:[21]
  },
  subjects:{
    accounting: 0,
    mathLit: 4,
    english: 4,
    math: 3,
    physics: 0,
    home: 4
  }
});
const course126 = new Nwu({
  name : "Industrial and Organisational Psychology",
  code: "BA",
  years: "3 years",
  stream: "Economic and Management Sciences",
  school:{
    name:["NWU"],
    aps:[21]
  },
  subjects:{
    accounting: 0,
    mathLit: 4,
    english: 4,
    math: 3,
    physics: 0,
    home: 4
  }
});
const course127 = new Nwu({
  name : "Development and Local Government Management",
  code: "BA",
  years: "3 years",
  stream: "Economic and Management Sciences",
  school:{
    name:["NWU"],
    aps:[21]
  },
  subjects:{
    accounting: 0,
    mathLit: 4,
    english: 4,
    math: 3,
    physics: 0,
    home: 4
  }
});
const course128 = new Nwu({
  name : "Public Administration",
  code: "BA",
  years: "3 years",
  stream: "Economic and Management Sciences",
  school:{
    name:["NWU"],
    aps:[21]
  },
  subjects:{
    accounting: 0,
    mathLit: 4,
    english: 4,
    math: 3,
    physics: 0,
    home: 4
  }
});
const course129 = new Nwu({
  name : "Industrial and Organisational Psychology",
  code: "BA",
  years: "3 years",
  stream: "Economic and Management Sciences",
  school:{
    name:["NWU"],
    aps:[22]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 4,
    math: 0,
    physics: 0,
    home: 4
  }
});
const course130 = new Nwu({
  name : "Labour Relations Management",
  code: "BA",
  years: "3 years",
  stream: "Economic and Management Sciences",
  school:{
    name:["NWU"],
    aps:[22]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 4,
    math: 0,
    physics: 0,
    home: 4
  }
});
const course131 = new Nwu({
  name : "Tourism Management",
  code: "BA",
  years: "3 years",
  stream: "Economic and Management Sciences",
  school:{
    name:["NWU"],
    aps:[22]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 4,
    math: 0,
    physics: 0,
    home: 4
  }
});
const course132 = new Nwu({
  name : "Marketing and Tourism Management",
  code: "BCom",
  years: "3 years",
  stream: "Economic and Management Sciences",
  school:{
    name:["NWU"],
    aps:[24]
  },
  subjects:{
    accounting: 0,
    mathLit: 4,
    english: 4,
    math: 3,
    physics: 0,
    home: 4
  }
});
const course133 = new Nwu({
  name : "Tourism Management",
  code: "BCom",
  years: "3 years",
  stream: "Economic and Management Sciences",
  school:{
    name:["NWU"],
    aps:[22]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 4,
    math: 3,
    physics: 0,
    home: 4
  }
});
const course134 = new Nwu({
  name : "Tourism and Recreation Skills",
  code: "BCom",
  years: "3 years",
  stream: "Economic and Management Sciences",
  school:{
    name:["NWU"],
    aps:[24]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 4,
    math: 3,
    physics: 0,
    home: 4
  }
});
const course135 = new Nwu({
  name : "Human Resource Management and Labour Relations Management",
  code: "BCom",
  years: "3 years",
  stream: "Economic and Management Sciences",
  school:{
    name:["NWU"],
    aps:[24]
  },
  subjects:{
    accounting: 0,
    mathLit: 6,
    english: 4,
    math: 3,
    physics: 0,
    home: 4
  }
});
const course136 = new Nwu({
  name : "Business Management",
  code: "BCom",
  years: "3 years",
  stream: "Economic and Management Sciences",
  school:{
    name:["NWU"],
    aps:[24]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 4,
    math: 3,
    physics: 0,
    home: 4
  }
});
const course137 = new Nwu({
  name : "Communication Management",
  code: "BCom",
  years: "3 years",
  stream: "Economic and Management Sciences",
  school:{
    name:["NWU"],
    aps:[24]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 4,
    math: 3,
    physics: 0,
    home: 4
  }
});
const course138 = new Nwu({
  name : "Marketing Management",
  code: "BCom",
  years: "3 years",
  stream: "Economic and Management Sciences",
  school:{
    name:["NWU"],
    aps:[24]
  },
  subjects:{
    accounting: 0,
    mathLit: 4,
    english: 4,
    math: 3,
    physics: 0,
    home: 4
  }
});
const course139 = new Nwu({
  name : "Sport and Business Management",
  code: "BCom",
  years: "3 years",
  stream: "Economic and Management Sciences",
  school:{
    name:["NWU"],
    aps:[24]
  },
  subjects:{
    accounting: 0,
    mathLit: 6,
    english: 4,
    math: 3,
    physics: 0,
    home: 4
  }
});
const course140 = new Nwu({
  name : "Information Systems",
  code: "BCom",
  years: "3 years",
  stream: "Economic and Management Sciences",
  school:{
    name:["NWU"],
    aps:[24]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 4,
    math: 4,
    physics: 0,
    home: 4
  }
});

//Engineering
const course141 = new Nwu({
  name : "Chemical Engineering",
  code: "BEng",
  years: "3 years",
  stream: "Engineering",
  school:{
    name:["NWU"],
    aps:[34]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 6,
    physics: 6,
    home: 5
  }
});
const course142 = new Nwu({
  name : "Chemical Engineering and Mineral Processing",
  code: "BEng",
  years: "3 years",
  stream: "Engineering",
  school:{
    name:["NWU"],
    aps:[34]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 6,
    physics: 6,
    home: 5
  }
});
const course143 = new Nwu({
  name : "Electrical and Electronic Engineering",
  code: "BEng",
  years: "3 years",
  stream: "Engineering",
  school:{
    name:["NWU"],
    aps:[34]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 6,
    physics: 6,
    home: 5
  }
});
const course144 = new Nwu({
  name : "Computer and Electronic Engineering",
  code: "BEng",
  years: "3 years",
  stream: "Engineering",
  school:{
    name:["NWU"],
    aps:[34]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 6,
    physics: 6,
    home: 5
  }
});
const course145 = new Nwu({
  name : "Electromechanical Engineering",
  code: "BEng",
  years: "3 years",
  stream: "Engineering",
  school:{
    name:["NWU"],
    aps:[34]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 6,
    physics: 6,
    home: 5
  }
});
const course146 = new Nwu({
  name : "Mechanical Engineering",
  code: "BEng",
  years: "3 years",
  stream: "Engineering",
  school:{
    name:["NWU"],
    aps:[34]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 6,
    physics: 6,
    home: 5
  }
});
const course147 = new Nwu({
  name : "Industrial Engineering",
  code: "BEng",
  years: "3 years",
  stream: "Engineering",
  school:{
    name:["NWU"],
    aps:[34]
  },
  subjects:{
    accounting: 0,
    mathLit: 0,
    english: 5,
    math: 6,
    physics: 6,
    home: 5
  }
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
  course95,course96,course97,course98,course99,course100,course101,course102,course103,
  course104,course105,course106,course107,course108,course109,course110,course111,course112,course113,
  course114,course115,course116,course117,course118,course119,course120,course121,course122,course123,course124,course125,course126,
  course127,course128,course130,course131,course132,course133,course134,
  course135,course136,course137,course138,course139,course140,course141,
  course142,course143,course144,course145,course146,course147];


  Nwu.find((err,items)=>{
    if(items.length == 0){
      Nwu.insertMany(courseArray,(err)=>{
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
  console.log("nwu server running");
});
