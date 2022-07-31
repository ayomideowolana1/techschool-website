const { Module } = require("../data/struct");
let contentAvailable = true;

module.exports = [
  {
    name: "Crystal Reports",
    url: "/images/business-apps/crystal-reports.png"
  },
  {
    contentAvailable,
    name: "Quickbooks",
    url: "/images/business-apps/quickbooks.png",
    duration: "3 Days",
    modules: [
      new Module("", [
        "Working with Quickbooks Accounts Program Basics.",
        "Creating Account names",
        " Numbers &amp; Bank Payments",
        "Financials",
        "Bank Reconciliations",
        "Generating Customers Invoices",
        "Products",
        "Stock Control",
        "Monitoring Customer Activity",
        "Generating Product Invoices &amp; Credit Notes",
        "Compiling &amp; Sending Customer Statements",
        "Creating Customer Receipts &amp; Purchase Invoices",
        "Supplier Payments",
        "Managing Recurring Entries",
        "Generating Reports &amp; Information",
        "The Active Set-Up Wizard",
        "VAT Changes."
      ]),

      new Module("", [
        "An overview of the QuickBooks program",
        "Entering opening balances",
        " preparing and printing a trial balance",
        "Creating customer records",
        "Creating supplier records",
        "Setting up opening assets",
        " liabilities and capital balances",
        ,
        "Producing routine reports",
        "Checking data",
        ,
        "Entering supplier invoices",
        "Posting error corrections",
        " amending records",
        "Invoicing",
        " generating customer letters",
        " entering new products",
        " checking communication history",
        "Banking and payments",
        " producing statements",
        " petty cash",
        "Audit trails",
        " correcting basic entry errors",
        " reconciling debtors and creditors",
        "Creating sales credit notes",
        ,
        "Processing purchase credit notes",
        "Preparing journals",
        "Verifying Audit Trail",
        "Purchase orders",
        " processing sales orders",
        "Processing Trial Balance",
        "Creating Backups",
        "Restoring data",
        "Writing-off bad debts"
      ]),
      new Module("", [
        "Creating a Chart of Accounts to Suit Company Requirements",
        "Sole Trader Accounts preparation",
        "The Trial Balance preparation",
        "Errors in the Trial Balance",
        "Disputed Items",
        "Use of the Journal",
        "Prepare and Process Month End Routine",
        "Contra Entries",
        "The Government Gateway and VAT Returns",
        "Bad Debts and Provision for Doubtful Debts",
        "Stock Valuation",
        " Stock Control",
        " Work in Progress and Finished Goods",
        "Prepare and Produce Final Accounts",
        "Extended Trial Balance",
        "Exporting Data including Linking to Other Systems",
        "Management Information Reports",
        "Making Decisions with Reports Using QuickBooks",
        "Prepare and Process Year End Accounts and Archive Data",
        "Final Accounts for Partnerships including Appropriation Accounts",
        "The Fixed Asset Register and Depreciation",
        "Accruals and Prepayments",
        "Cash Flow and Forecast Reports",
        "Advanced Credit Control"
      ])
    ]
  },
  { name: "Salesforce", url: "/images/business-apps/sap.png" },
  { name: "SAP", url: "/images/business-apps/sap.png" },
  {
    contentAvailable,
    name: "S4 Hana",
    url: "/images/business-apps/s4hana.png",
    duration: "3 Days",
    description:
      "SAP S4 HANA is SAP’s next generation business suite and one of SAP’s biggest innovations. SAP S4HANA is fully integrated for the most advanced in-memory platform, SAP HANA. It is designed to drive business innovation with simplicity by connecting people, devices, and business networks in real time to support the development of new business models. Some confusion exists between SAP HANA and SAP S/4HANA among many legacy SAP ERP customers.  SAP HANA is an in-memory database while S/4HANA is a revolutionary application that uses ERP apps in the front-end, that is developed to run on the in-memory database SAP HANA. If SAP HANA  is the hub for all SAP’s product strategy, then you can think of SAP S/4HANA as the cornerstone for all SAP technologies. With SAP HANA it was possible to process huge volumes of transactional and operational business data in real-time. SAP launched the Business Suite on HANA in 2013 that included various modules for SCM, CRM, SRM, and PLM. This business suite basically had the ERP apps in the front-end with the HANA in-memory database running in the back-end. In contrast, S/4HANA is written completely in HANA  by re-writing the 400 million lines of code instead of running on top of it. This makes SAP S/4HANA easy to use and understand and also makes it more agile for developers.",
    modules: [
      new Module("Our S4HANA Courses", [
        "Supply Chain Management (SCM)",
        "Plant Maintenance (PM)",
        "Investment Management (IM)",
        "Customer Relationship Management (CRM)",
        "Product Life Cycle Management (PLM)",
        "Production Planning (PP)",
        "Materials Management (MM)",
        "Strategic Enterprise Management (SEM)",
        "Project Systems (PS)",
        "Enterprise Performance Management (EPM)",
        "Controlling (CO)",
        "Sales and Distribution (SD)",
        "Logistics Information Systems (LIS)",
        "Customer Service (CS)",
        "Environment, Health and Safety (EHS)",
        "Supplier Relationship Management (SRM)",
        "NetWeaver",
        "Treasury",
        "Industry Solutions, e.g. Aerospace, Automotive, etc.,)"
      ])
    ]
  },
  {
    contentAvailable,
    name: "Ariba",
    description:
      ' "description": "SAP S4 HANA is SAP’s next generation business suite and one of SAP’s biggest innovations. SAP S4HANA is fully integrated for the most advanced in-memory platform, SAP HANA. It is designed to drive business innovation with simplicity by connecting people, devices, and business networks in real time to support the development of new business models. Some confusion exists between SAP HANA and SAP S/4HANA among many legacy SAP ERP customers.  SAP HANA is an in-memory database while S/4HANA is a revolutionary application that uses ERP apps in the front-end, that is developed to run on the in-memory database SAP HANA. If SAP HANA  is the hub for all SAP’s product strategy, then you can think of SAP S/4HANA as the cornerstone for all SAP technologies. With SAP HANA it was possible to process huge volumes of transactional and operational business data in real-time. SAP launched the Business Suite on HANA in 2013 that included various modules for SCM, CRM, SRM, and PLM. This business suite basically had the ERP apps in the front-end with the HANA in-memory database running in the back-end. In contrast, S/4HANA is written completely in HANA  by re-writing the 400 million lines of code instead of running on top of it. This makes SAP S/4HANA easy to use and understand and also makes it more agile for developers.",',
    url: "/images/business-apps/ariba.png",
    modules: [
      new Module("Our Ariba Training Courses", [
        "Ariba Implementation",
        "Ariba Configuration",
        "Ariba Integration",
        "Ariba Network",
        "SAP Ariba Supply Chain Collaboration for Buyers,SAP Ariba Supplier Lifecycle and Performance",
        "SAP Ariba Supplier Risk",
        "SAP Ariba Sourcing",
        "SAP Ariba Contracts",
        "SAP Ariba Buying and Invoicing",
        "SAP Ariba Spend Analysis",
        "Guided buying,"
      ])
    ]
  },
  {
    contentAvailable,
    name: "Success Factor",
    url: "/images/business-apps/success-factor.png",
    description:
      "We provides the best and the most industry-relevant Success Factor Training to help you accelerate in your career. Our course curriculum covers all the concepts to gain real-time proficiency in core essentials of sap success factors such as basics of SAP Success Factor, data models, employee data, position management, business rules, importing and exporting the data, generic objects, configuring workflows, foundation objects and managing the security for the systems.",
    duration: "3 Days",
    modules: [
      new Module("Success factor courses", [
        "SAP SuccessFactors Compensation",
        "SAP SuccessFactors Onboarding",
        "SAP SuccessFactors Learning",
        "SAP SuccessFactors Onboarding",
        "SAP SuccessFactors Succession Management",
        "SAP SuccessFactors Variable Pay",
        "SAP SuccessFactors Performance and Goals",
        "SAP SuccessFactors Platform Introduction",
        "SAP SuccessFactors Employee Central Core",
        "SAP SuccessFactors Career Development Planning and Mentoring",
        "SAP SuccessFactors Recruiting: Candidate Experience",
        "SAP SuccessFactors Recruiting: Recruiter Experience",
        "SAP SuccessFactors Platform Introduction",
        "SAP SuccessFactors Time Management",
        "SAP SuccessFactors Workforce Analytics and Planning Functional Consultant",
        "SAP SuccessFactors Employee Central Global Benefits",
        "SAP SuccessFactors Workforce Analytics Technical Consultant"
      ])
    ]
  }
];
