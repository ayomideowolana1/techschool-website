console.log("iiii");

const courses = {
  microsoft: [
    { name: "Office 365", url: "./images/microsoft/office-365.png" },
    { name: "Access", url: "./images/microsoft/m-access.png" },
    { name: "OneNote", url: "./images/microsoft/m-oneNote.png" },
    { name: "OutLook", url: "./images/microsoft/m-outLook.png" },
    { name: "Teams", url: "./images/microsoft/m-teams.png" },
    { name: "Powerpoint", url: "./images/microsoft/m-powerpoint.png" },
    { name: "Project", url: "./images/microsoft/m-project.png" },
    { name: "Publisher", url: "./images/microsoft/m-publisher.png" },
    { name: "Visio", url: "./images/microsoft/m-visio.png" }
  ],
  Mtechnical: [
    { name: "Azure", url: "./images/mtechnical/azure.png" },
    { name: "Microsoft 365", url: "./images/microsoft/office-365.png" },
    { name: "Dynamics 365", url: "./images/mtechnical/dynamics.png" },
    {
      name: "Security, Compliance, and Identity (SCI)",
      url: "./images/mtechnical/security.png"
    },
    { name: "PowerShell", url: "./images/mtechnical/powershell.png" },
    { name: "Exchange", url: "./images/mtechnical/exchange.png" },
    { name: "SharePoint", url: "./images/mtechnical/sharepoint.png" },
    { name: "Visual Studio", url: "./images/mtechnical/visualstudio.png" },
    { name: "SQL Server", url: "./images/mtechnical/sql-server.png" },
    { name: "System Center", url: "./images/mtechnical/system-center.png" },
    { name: "Windows", url: "./images/mtechnical/windows.png" },
    { name: "Windows Server", url: "./images/mtechnical/w-server.png" }
  ],
  adobe: [
    { name: "Photoshop", url: "./images/adobe/photoshop.png" },
    { name: "InDesign", url: "./images/adobe/indesign.png" },
    { name: "Illustrator", url: "./images/adobe/illustrator.png" },
    { name: "Dreamweaver", url: "./images/adobe/dreamwaver.png" },
    { name: "Acrobat", url: "./images/adobe/acrobat.png" },
    { name: "Captivate", url: "./images/adobe/captivate.png" }
  ],
  project: [
    { name: "COBIT", url: "./images/project-mgt/cobit.png" },
    { name: "DevOps", url: "./images/project-mgt/devops.png" },
    { name: "Change Management", url: "./images/project-mgt/change-mgt.png" },
    { name: "Project Management", url: "./images/project-mgt/project-mgt.png" },
    { name: "ITIL", url: "./images/project-mgt/itil.png" },
    { name: "Product Management", url: "./images/project-mgt/product-mgt.png" },
    {
      name: "Business Analysis",
      url: "./images/project-mgt/business-analysis.png"
    },
    { name: "IAITAM", url: "./images/project-mgt/iaitam.png" },
    { name: "Six Sigma", url: "./images/project-mgt/6sigma.png" }
  ],
  digital: [
    { name: "Data Science", url: "./images/digital/data-science.png" },
    { name: "IoT – Internet of Things", url: "./images/digital/iot.png" },
    { name: "Cybersecurity", url: "./images/digital/cybersecurity.png" },
    { name: "Big Data", url: "./images/digital/big-data.png" },
    { name: "Cloud", url: "./images/digital/cloud.png" }
  ],
  product: [
    {
      name: "Product Manager",
      url: "./images/product-mgt/product-manager.png"
    },
    { name: "AI Product Manager", url: "./images/product-mgt/ai-pm.png" },
    { name: "Data Product Manager", url: "./images/product-mgt/data-pm.png" },
    {
      name: "Monetization Strategy",
      url: "./images/product-mgt/monetization.png"
    },
    {
      name: "Activation and Retention Strategy",
      url: "./images/product-mgt/ars.png"
    },
    {
      name: "Agile Software Development",
      url: "./images/product-mgt/agile.png"
    },
    { name: "UX Designer", url: "./images/product-mgt/ux.png" }
  ],
  business: [
    {
      name: "Crystal Reports",
      url: "./images/business-apps/crystal-reports.png"
    },
    { name: "Quickbooks", url: "./images/business-apps/quickbooks.png" },
    { name: "Salesforce", url: "./images/business-apps/sap.png" },
    { name: "SAP", url: "./images/business-apps/sap.png" },
    { name: "S4 Hana", url: "./images/business-apps/s4hana.png" },
    { name: "Ariba", url: "./images/business-apps/ariba.png" },
    { name: "Success Factor", url: "./images/business-apps/success-factor.png" }
  ],
  leadership: [
    {
      name: "Leadership and Professional Development",
      url: "./images/leadership/leader.png"
    },
    { name: "Human Resource Management", url: "./images/leadership/hr.png" },
    { name: "Human Resource Management", url: "./images/leadership/hr.png" },
    { name: "Business Analysis", url: "./images/leadership/ba.png" }
  ],
  technical: [
    { name: "Google Cloud", url: "./images/technical/google-cloud.png" },
    { name: "Citrix", url: "./images/technical/citrix.png" },
    { name: "Cisco", url: "./images/technical/cisco.png" },
    { name: "CompTIA", url: "./images/technical/compTIA.png" },
    { name: "IBM", url: "./images/technical/ibm.png" },
    { name: "AWS", url: "./images/technical/aws.png" },
    { name: "CertNexus", url: "./images/technical/certnexus.png" },
    {
      name: "Programming and Development",
      url: "./images/technical/programming.png"
    },
    { name: "Red Hat", url: "./images/technical/redhat.png" }
  ],
  analytic: [
    { name: "Power BI", url: "./images/analytic/power-bi.png" },
    { name: "Tableau", url: "./images/analytic/tableau.png" },
    { name: "Python", url: "./images/analytic/python.png" },
    { name: "SAP Business Object", url: "./images/analytic/sap.png" },
    { name: "Big Data Analytics", url: "./images/analytic/big-data.png" },
    { name: "Advance Excel", url: "./images/analytic/excel.png" },
    { name: "R-Programming", url: "./images/analytic/R.png" }
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
  console.log(i);
  view.innerHTML = "";
  items.forEach(item => {
    let cont = document.createElement("div");
    cont.classList.add("viewItem");
    let image = document.createElement("img");
    let title = document.createElement("h3");
    image.src = item.url;
    title.innerHTML = item.name;
    cont.appendChild(image);
    cont.appendChild(title);

    view.appendChild(cont);
  });
};

let s4NavItems = Array.from(document.querySelectorAll("#s4nav li"));

s4NavItems.forEach(item => {
  item.addEventListener("click", e => {
    s4NavItems.forEach(item => {
      item.classList.remove("current");
    });
    e.target.classList.add("current");
    setViewObject(e.target.id);
    populateView(viewObject);
    // console.log(e.target)
  });
});

const toggle = () => {
  let toggleIcon = document.getElementById("toggle");
  let dropdown = document.getElementById("dropdown");
  toggleIcon.addEventListener("click", () => {
    if (dropdown.style.display == "block") {
      dropdown.style.display = "none";
    } else {
      dropdown.style.display = "block";
    }
  });

  console.log(toggleIcon, dropdown);
};

const animateHero = () => {
  let h1 = document.querySelector(".hero h1");
  let p = document.querySelector(".hero p");
  let button = document.querySelector(".hero a");

  const makeVisible = elem => {
    elem.style.opacity = "1";
  };
  const setTransition = (elem, animClass) => {
    elem.classList.add("animate__animated");
    elem.classList.add(animClass);
  };

  setTimeout(() => {
    setTransition(h1, "animate__fadeInUp");
    setTransition(h1, "animate__fast");
    makeVisible(h1);
  }, 800);
  setTimeout(() => {
    setTransition(p, "animate__fadeInUp");
    setTransition(p, "animate__fast");
    setTransition(button, "animate__fadeInUp");
    setTransition(button, "animate__fast");
    makeVisible(p);
  }, 1000);
};

const load = () => {
  animateHero();
  populateView("microsoft");
  toggle();
};
