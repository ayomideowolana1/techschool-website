const courses = {
  microsoft: [
    { name: "Office 365" },
    { name: "Access" },
    { name: "OneNote" },
    { name: "Onenote" },
    { name: "OutLook" },
    { name: "Teams" },
    { name: "Powerpoint" },
    { name: "Project" },
    { name: "Publisher" },
    { name: "Visio" }
  ],
  Mtechnical: [
    { name: "Azure" },
    { name: "Microsoft 365" },
    { name: "Dynamics 365" },
    { name: "Security, Compliance, and Identity (SCI)" },
    { name: "PowerShell" },
    { name: "Exchange" },
    { name: "SharePoint" },
    { name: "Visual Studio" },
    { name: "SQL Server" },
    { name: "System Center" },
    { name: "Windows" },
    { name: "Windows Server" }
  ],
  adobe: [
    { name: "Photoshop" },
    { name: "InDesign" },
    { name: "Illustrator" },
    { name: "Dreamweaver" },
    { name: "Acrobat" },
    { name: "Captivate" }
  ],
  project: [
    { name: "COBIT" },
    { name: "DevOps" },
    { name: "Change Management" },
    { name: "Project Management" },
    { name: "ITIL" },
    { name: "Product Management" },
    { name: "Business Analysis" },
    { name: "IAITAM" },
    { name: "Six Sigma" }
  ],
  digital: [
    { name: "Data Science" },
    { name: "IoT – Internet of Things" },
    { name: "Cybersecurity" },
    { name: "Big Data" },
    { name: "Cloud" }
  ],
  product: [
    { name: "Product Manager" },
    { name: "AI Product Manager" },
    { name: "Data Product Manager" },
    { name: "Monetization Strategy" },
    { name: "Activation and Retention Strategy" },
    { name: "Agile Software Development" },
    { name: "UX Designer" }
  ],
  business: [
    { name: "Crystal Reports" },
    { name: "Quickbooks" },
    { name: "Salesforce" },
    { name: "SAP" },
    { name: "S4 Hana" },
    { name: "Ariba" },
    { name: "Success Factor" }
  ],
  leadership: [
    { name: "Leadership and Professional Development" },
    { name: "Human Resource Management" },
    { name: "Business Analysis" }
  ],
  technical: [
    { name: "Google Cloud" },
    { name: "Citrix" },
    { name: "Cisco" },
    { name: "CompTIA" },
    { name: "IBM" },
    { name: "AWS" },
    { name: "CertNexus" },
    { name: "Programming and Development" },
    { name: "Red Hat" }
  ],
  analytic: [
    { name: "Power BI" },
    { name: "Tableau" },
    { name: "Python" },
    { name: "SAP Business Object" },
    { name: "Big Data Analytics" },
    { name: "Advance Excel" },
    { name: "R-Programming" }
  ]
};

let S2Links = Array.from(
  document.querySelectorAll(".container2 > div.navLocal a")
);

let business = document.querySelector("div#business");
let institution = document.querySelector("div#institution");
let individual = document.querySelector("div#individual");

const handleClick = e => {
  if (e.target.id == "individual") {
    setItem("individual");
  } else if (e.target.id == "business") {
    setItem("business");
  } else if (e.target.id == "institution") {
    setItem("institution");
  }
};

S2Links.forEach(link => {
  link.addEventListener("click", e => {
    switch (e.target.id) {
      case "individual":
        business.style.display = "none";
        institution.style.display = "none";
        individual.style.display = "flex";
        break;
      case "institution":
        business.style.display = "none";
        individual.style.display = "none";
        institution.style.display = "flex";
        break;
      case "business":
        individual.style.display = "none";
        institution.style.display = "none";
        business.style.display = "flex";
        break;
    }
  });
});

// sec4
let viewObject = "";
const setViewObject = i => {
  viewObject = i;
};

const handleClickS4 = e => {
  let id = e.target.id;
  switch (id) {
    case "microsoft":
      setViewObject(microsoft);
      break;
    case "m-technical":
      setViewObject(Mtechnical);
      break;
    case "adobe":
      setViewObject(adobe);
      break;
    case "project":
      setViewObject(project);
      break;
    case "digital":
      setViewObject(digital);
      break;
    case "product":
      setViewObject(product);
      break;
    case "business":
      setViewObject(business);
      break;
    case "leadership":
      setViewObject(leadership);
      break;
    case "analytic":
      setViewObject(analytic);
      break;
    case "technical":
      setViewObject(technical);
      break;
    default:
      setViewObject(microsoft);
      break;
  }
};

const populateView = i => {
  let view = document.querySelector(".container4 #view");
  let items = courses[i];
  view.innerHTML = ""
  items.forEach(item => {
    let x = document.createElement("div");
    x.innerHTML = item.name;
    view.appendChild(x);
  });
};

let s4NavItems = Array.from(document.querySelectorAll("#s4nav li"));

s4NavItems.forEach(item => {
  item.addEventListener("click", e => {
    setViewObject(e.target.id);
    populateView(viewObject);
  });
});


const load=()=>{
    populateView("microsoft")
}