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

for (let i in courses) {
  let children = courses[i];
  children.forEach(child => {
    parent = i;
    child.path = `courses/${parent}/${child.name}`;
    let name = child.name.toLowerCase().split(" ").join("-");
    child.linkName = name
  });
  
}
