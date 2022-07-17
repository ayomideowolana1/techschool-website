const { Module } = require("../data/struct");


module.exports = [
  {
    contentAvailable: true,
    name: "Office 365 Administrator (MS-030T00)",
    url: "/images/microsoft/office-365.png",
    duration: "5 days",
    description: `This course that targets the needs of IT professionals who take part in
evaluating, planning, deploying, and operating Microsoft Office 365 services,
including its identities, dependencies, requirements, and supporting technologies.
This course focuses on skills required to set up an Office 365 tenant, including
federation with existing user identities, and skills required to sustain an Office
365 tenant and its users.`,
    modules: [
      {
        title: "Planning and provisioning Office 365",
        list: [
          " Overview of Office 365",
          "Provisioning an Office 365 tenant",
          "Planning a pilot deployment"
        ]
      },
      {
        title: "Managing Office 365 users and groups",
        list: [
          "Managing user accounts and licenses",
          "Managing passwords and authentication",
          "Managing security groups in Office 365",
          "Managing Office 365 users and groups with Windows PowerShell",
          "Configuring administrative access"
        ]
      },
      {
        title: "Configuring client connectivity to Microsoft Office 365",
        list: [
          " Planning for Office 365 clients",
          "  Planning connectivity for Office 365 clients",
          "   Configuring connectivity for Office 365 clients"
        ]
      },
      {
        title: "Planning and configuring directory synchronization",
        list: [
          " Planning and preparing for directory synchronization",
          " Implementing directory synchronization by using Azure AD Connect",
          " Managing Office 365 identities with directory synchronization"
        ]
      },
      {
        title: "Planning and deploying Office 365 ProPlus",
        list: [
          " Overview of Office 365 ProPlus",
          " Planning and managing user-driven Office 365 ProPlus deployments",
          " Planning and managing centralized deployments of Office 365 ProPlus",
          " Office Telemetry and reporting"
        ]
      },
      {
        title:
          "Planning and managing Exchange Online recipients and permissions",
        list: [
          " Overview of Exchange Online",
          " Managing Exchange Online recipients",
          " Planning and configuring Exchange Online permissionss"
        ]
      },
      {
        title:
          "Planning and managing Exchange Online recipients and permissions",
        list: [
          " Overview of Exchange Online",
          " Managing Exchange Online recipients",
          " Planning and configuring Exchange Online permissionss"
        ]
      },
      new Module("Planning and deploying Microsoft Teams", [
        " Teams Explained",
        "Deploying Teams",
        "Authentication and Access",
        "Transitioning Skype For Business to Microsoft Teams",
        "Management and Reporting"
      ]),
      new Module("Planning and configuring SharePoint Online", [
        "  Configuring SharePoint Online services",
        "Planning and configuring SharePoint Online site collections",
        "Planning and configuring external user sharing"
      ]),
      new Module(
        "Planning and configuring an Office 365 collaboration solution",
        [
          "      Planning and managing Yammer Enterprise",
          " Planning and configuring OneDrive for Business",
          " Configuring Office 365 groups"
        ]
      ),
      new Module(
        "Planning and configuring security and compliance in Office 365",
        [
          "Overview of the compliance features in Office 365",
          " Planning and configuring Azure Information Protection in Office 365",
          " Managing the compliance features in Office 365"
        ]
      ),
      new Module("Monitoring and troubleshooting Microsoft Office 365", [
        "Troubleshooting Office 365",
        "Monitoring Office 365 service health"
      ])
    ]
  },
  {
    contentAvailable: true,
    name: "Microsoft 365 Messaging (MS-203T00)",
    url: "/images/microsoft/office-365.png",
    duration: "5 days",
    description: `This course is designed for IT Professionals who deploy and manage the
messaging infrastructure for Microsoft 365 in their organization.
This course examines the key elements of Microsoft 365 messaging
administration, including message transport and mail flow, messaging security,
hygiene, and compliance, messaging infrastructure, and hybrid messaging.`,
    modules: [
      new Module("Managing the Transport Pipeline", [
        " Overview of Transport Services",
        " Configuring Message Transport",
        " Managing Transport Rules"
      ]),
      new Module("Managing and Troubleshooting Mail Flow", [
        "  Managing Mail Flow",
        " Troubleshooting Mail Flow",
        " Troubleshooting Transport Issues",
        " Troubleshooting with Logs"
      ]),
      new Module("Managing Message Hygiene", [
        "Planning for Message Hygiene",
        "Managing Anti-Malware and Anti-Spam Policies",
        "Managing Advanced Threat Protection with Defender for Office 365"
      ]),
      new Module("Managing Compliance", [
        " Messaging Compliance in the SCC",
        " Messaging Compliance in Exchange",
        " Managing Exchange Online Archiving and Auditing",
        " Managing Content Search"
      ]),
      new Module("Managing Organizational Settings", [
        " Managing Authentication for Messaging",
        " Configuring Organizational Settings",
        " Configuring Organizational Sharing"
      ]),
      new Module("Managing Mobile Devices", [
        "Mobile Device Mailbox Policies",
        "Managing Mobile Device Access"
      ]),
      new Module("Managing Role-Based Permissions", [
        "Managing Admin Roles",
        "Managing User Roles",
        "Exchange Setup - RBAC and AD Split Permission"
      ]),
      new Module("Managing Recipient Objects and Resources", [
        "Exchange Recipients",
        "Creating and Managing Exchange Recipients",
        "Managing Email Addresses, Lists, and Resources"
      ]),
      new Module("Managing Public Folders", [
        "Planning the Public Folder Hierarchy",
        "Implementing and Managing Public Folders",
        "Troubleshooting Public Folders"
      ]),
      new Module(" Planning a Hybrid Environment", [
        "Exchange Hybrid Deployment Requirements",
        "Planning to Run the Hybrid Configuration Wizard"
      ]),
      new Module(" Performing Mailbox Migrations", [
        "Planning Mailbox Migrations",
        "Performing IMAP Migrations",
        "Performing Cutover and Staged Migrations",
        "Performing Advanced Migrations"
      ]),

      new Module(" Deploying and Troubleshooting a Hybrid Environment", [
        "Deploying and Managing an Edge Transport Server",
        "Configuring a Hybrid Deployment using the HCW",
        "Implementing Advanced Hybrid Functionality",
        "Troubleshooting Hybrid Deployments"
      ])
    ]
  },
  {
    contentAvailable: true,
    name: "Microsoft Access VBA - Programming",
    url: "/images/microsoft/m-access.png",
    duration: "3 Days",
    description: `Learn to use VBA to automate tasks and control other applications.
VBA is the programming Interface for Access. It allows you to automate tasks and even control other applications such as PowerPoint and Word.`,
    modules: [
      new Module("Understanding the Access Object Hierarchy", [
        "Understanding Access Objects",
        "Using the Object Browser",
        "Controlling the Application Object",
        "Understanding the Forms Collection and Form Object",
        "Understanding the Controls Collection and Control Object",
        "Using the With Statement",
        "Understanding the Reports Collection and Report Object",
        "Understanding the DoCmd Object",
        "Using the Screen Object"
      ]),

      new Module("Using Variables Arrays and Constants", [
        "Declaring Variables",
        "Declaring Arrays",
        "Declaring Constants",
        "Declaring Object Variables"
      ]),

      new Module("Using Functions Message Boxes and Input Boxes", [
        "Using Intrinsic Functions",
        "Using Message Boxes",
        "Using Input Boxes"
      ]),

      new Module("Controlling Program Execution", [
        "Using Control Structures",
        "Working with Conditional Expressions",
        "Using the IfThenEnd If Structure",
        "Using the IfThenElseEnd If Structure",
        "Using the Select CaseEnd Select Structure",
        "Using the DoLoop Structure",
        "Using the For Next Structure"
      ]),
      new Module("Debugging Code", [
        "Understanding Errors",
        "Using Debugging Tools",
        "Stepping Through Code and Setting Break Points",
        "Understanding Error Events",
        "Understanding the Error Object",
        "Using the On Error Statement",
        "Writing an Error Handling Routine",
        "Compiling All Procedures"
      ])
    ]
  },
  {
    contentAvailable: true,
    name: "Microsoft Project 2016",
    url: "/images/microsoft/m-project.png",
    description: `Learn to create and manage a project schedule using Microsoft® Project 2016.
Create and manage a project schedule using Microsoft® Project 2016.`,
    duration: "2 Days",
    modules: [
      new Module("Monitoring Project Progress", [
        "     View Project Progress",
        "     Add Custom Fields",
        "     Create Custom Tables",
        "     Create Calculated Fields",
        "     Create Concatenated Fields",
        "     Creating Customized Date Functions Fields",
        "     Create Custom Single Views",
        "     Create Custom Combination View",
        "     Create a Network Diagram",
        "     Analyze a Project Plan"
      ]),

      new Module("Importing and Exporting Data", [
        "     Import and Export Maps",
        "     Importing External Files Into Projects",
        "     Hyperlinking Files in Project"
      ]),
      new Module("Resource Pools", [
        "     Resource Pools",
        "     Working With Resource Pool",
        "     Sharing a Resource Pool",
        "     Managing a Resource Pool",
        "     Reporting and Analyzing the Resource Pool"
      ]),

      new Module("Multiple Projects and Master Projects", [
        "Linking Projects Plans",
        "Create a Series of Sub Projects",
        "Managing Projects Within the Master Project",
        "Managing Projects in the Sub Project"
      ]),

      new Module("Earned Value Analysis", [
        "     Creating Progress Lines",
        "     Using the Earned Value Tools",
        "     Customizing the Earned Value Tables",
        "     Defining the Different Fields Available for EVA"
      ]),
      new Module("Customizing the Application", [
        "     Create Project Options",
        "     Create a Project Plan Template",
        "     Understanding Template Options",
        "     The Organizer"
      ]),
      new Module("Reporting Tools", [
        "     View Existing Reports",
        "     View Visual Reports",
        "     View Excel Reports"
      ]),
      new Module("Create Customized Excel Reports", [
        "     Create Customized Visual Reports",
        "     Report Dashboards",
        "     Best Practice Analyzer"
      ]),

      new Module("Advanced Additional Features", [
        "     Integration with SharePoint",
        "     Hyperlinks",
        "     Custom WBS Codes",
        "     Macros Overview"
      ])
    ]
  },
  {
    contentAvailable: true,
    name: "Microsoft Visio 2016",
    url: "/images/microsoft/m-visio.png",
    description: `Microsoft Visio stands out among similar applications because of its unique ability to draw a wide variety of diagrams, flowcharts, workflows, and organization structures—anything that can be represented by shapes connected by lines. Most importantly, these shapes can be rearranged and with corresponding lines remaining intact. Visio has improved over the years as features common among Microsoft® Office applications have been added. Today, Visio is well integrated with other members of the Office family as well as Microsoft's cloud-based services. This greatly enriches the sharing and publishing of Visio drawings.`,
    duration: "1 Day",
    modules: [
      new Module("Designing Advanced Plans and Diagrams", [
        "     Create a Microsoft Account and Log in to Visio",
        "     Build Advanced Plans",
        "     Build Advanced Diagrams"
      ]),
      new Module("Enhancing the Look of Drawings", [
        "     Use 3-D Shapes",
        "     Work with Shape Styles",
        "     Define Shape Styles",
        "     Apply Backgrounds, Borders, and Titles"
      ]),
      new Module("Working with Custom Shapes, Stencils, and Templates", [
        "     Create Simple Custom Shapes",
        "     Create Custom Stencils",
        "     Create Custom Templates"
      ]),
      new Module("Connecting Drawings to External Data", [
        "     Make an Organization Chart from an Excel Spreadsheet",
        "     Generate a Pivot Diagram from an Excel Spreadsheet",
        "     Create a Gantt Chart from a Project File",
        "     Create a Timeline from a Project File",
        "     Connect a Map to an Access Database"
      ]),
      new Module("Leveraging Development Tools", [
        "     Create Macros",
        "     Modify ShapeSheets",
        "     Build Advanced Shapes"
      ]),
      new Module("Sharing Drawings", [
        "     Save and Share Drawings with OneDrive",
        "     Review Drawings",
        "     Insert Drawings into Other Office Files",
        "     Export Drawings",
        "     Print Drawings"
      ])
    ]
  },
  {
    contentAvailable: true,
    name: "Microsoft PowerPoint 2016",
    url: "/images/microsoft/m-powerpoint.png",
    description: `This course will teach you how to modify the PowerPoint environment, customize design templates, add SmartArt and math equations to a presentation, work with media and animations, collaborate on a presentation, customize a slide show, and how to secure and distribute a presentation.`,
    duration: "1 Days",
    modules: [
      new Module("Modifying the PowerPoint Environment", [
        "     Customize the User Interface",
        "     Set PowerPoint 2016 Options"
      ]),
      new Module("Customizing Design Templates", [
        "     Modify Slide Masters and Slide Layouts",
        "     Add Headers and Footers",
        "     Modify the Notes Master and the Handout Master"
      ]),
      new Module("Adding SmartArt and Math Equations to a Presentation", [
        "     Create SmartArt",
        "     Modify SmartArt",
        "     Write Math Equations"
      ]),
      new Module("Working with Media and Animations", [
        "     Add Audio to a Presentation",
        "     Add Video to a Presentation",
        "     Customize Animations and Transitions"
      ]),
      new Module("Collaborating on a Presentation", [
        "     Review a Presentation",
        "     Store and Share Presentations on the Web"
      ]),
      new Module("Customizing a Slide Show", [
        "     Annotate a Presentation",
        "     Set Up a Slide Show",
        "     Create a Custom Slide Show",
        "     Add Hyperlinks and Action Buttons",
        "     Record a Presentation"
      ]),
      new Module("Securing and Distributing a Presentation", [
        "     Secure a Presentation",
        "     Broadcast a Slide Show",
        "     Create a Video or a CD"
      ])
    ]
  },
  {
    contentAvailable: true,
    name: "Microsoft Excel Training",
    url: "/images/analytic/excel.png",
    description: `Students will learn more of the advanced features of Excel. They will acquire upper-level skills, which will allow them to get the most bang for their buck from this powerful software. Attendees will look at working with scenarios, using Solver, the Analysis ToolPak, PivotTable features and developing macros. Other features such as conditional formatting, slicers, the Inquire Add-In, and tracking changes are also covered. If time allows, an introductory lesson on Power Pivot and Power View will be covered.`,
    duration: "1 Day",
    modules: [
      new Module("Working with Scenarios", [
        " Creating Scenarios",
        " Loading Scenarios",
        " Merging Scenarios",
        " Editing Scenarios",
        " Creating a Scenario Summary Report",
        " Deleting Scenarios"
      ]),
      new Module("Using Goal Seek, Solver and VLookup", [
        " Setting up the Worksheet",
        " Using Goal Seek",
        " Running Solver",
        " Generating Reports and Scenarios with Solver",
        " Modifying Constraints",
        " Setting Solver Options",
        " Use VLookup"
      ]),
      new Module("Analyzing Data", [
        " Enabling the Analysis ToolPak",
        " Using Data Analysis Tools",
        " Using Data Tables"
      ]),
      new Module("Managing Data", " Consolidating Information", [
        " Removing Duplicates",
        " Configuring Data Validation",
        " Transposing Data",
        " Converting Text to Columns"
      ]),
      new Module("Working with Slicers", [
        " Inserting and Using a Slicer",
        " Renaming the Slicer",
        " Changing Slicer Settings",
        " Formatting a Slicer",
        " Clearing the Slicer"
      ]),
      new Module(
        "Introduction to PivotTable (covered more in-depth in Excel 2013 PivotTable)",
        [
          " Creating a Basic PivotTable",
          " Creating a Basic PivotChart",
          " Using the PivotTable Fields Pane",
          " Adding Calculated Fields",
          " Sorting Pivoted Data",
          " Filtering Pivoted Data"
        ]
      ),
      new Module("Using the Inquire Add-In", [
        " Installing Inquire",
        " Generating a Workbook Analysis Report",
        " Viewing Workbook and Worksheet Relationships",
        " Viewing Cell Relationships",
        " Comparing Two Workbooks"
      ]),
      new Module("Tracking Changes", [
        " Tracking Changes",
        " Reviewing Changes",
        " Setting Options for Tracking Changes",
        " Stopping Tracking Changes"
      ]),
      new Module("Using Macros", [
        " Recording a Macro",
        " Writing a Macro using the Visual Basic Editor",
        " Editing a Macro",
        " Running a Macro"
      ])
    ]
  },
  {
    contentAvailable: true,
    name: "OneNote",
    url: "/images/microsoft/m-oneNote.png",
    description: `In our fast-paced digital world, the need to capture ideas, meeting notes, and to-do items is ever present. Microsoft Office OneNote 2016 provides a way for you to efficiently create and collect your notes in an electronic notebook. This course will introduce you to using OneNote notebooks to store a variety of content in an organized structure, access the content from anywhere, and also share it with others. Additionally, learning how OneNote and the other applications in the suite are integrated increases your productivity with Microsoft Office more generally.`,
    duration: "1 Day",
    modules: [
      new Module("Getting Started with OneNote", [
        " Navigate the OneNote 2016 Environment",
        " Create a Notebook",
        " Use Templates",
        " Customize the OneNote User Interface"
      ]),
      new Module("Adding and Formatting Notebook Content", [
        " Apply Formatting to Notebook Content",
        " Insert Images into a Notebook",
        " Add Tables",
        " Add Audio and Video to a Notebook",
        " Add Quick Notes and Links",
        " Use Tags, Symbols, Drawing Tools, and Pen Options"
      ]),
      new Module("Managing OneNote Notebooks, History, and Backups", [
        " Save and Export Content and Use Alternate File Types",
        " Manage Notebook Recycle Bins and Backups"
      ]),
      new Module("Working with Embedded Files", [
        " Work with Excel Spreadsheets and Visio Diagrams",
        " Work with Embedded Files"
      ]),
      new Module("Sharing and Collaborating with Notebooks", [
        " Send a Notebook and Use Outlook Integration",
        " Share OneNote Content by Using OneDrive",
        " Share and Collaborate on Notebooks"
      ]),
      new Module("Finalizing a Notebook", [
        " Proof and Print a Notebook",
        " Configure Notebook Properties and Security",
        " Search Notebooks"
      ])
    ]
  },
  {
    contentAvailable:true,
    name: "Managing Microsoft Teams (MS-700T00)",
    url: "/images/microsoft/m-teams.png",
    description: `Microsoft Teams admins configure, deploy, and manage Office 365 workloads for Microsoft Teams that focus on efficient and effective collaboration and communication in an enterprise environment. This course covers six central elements - Microsoft Teams overview, implementing governance, security and compliance for Microsoft Teams, preparing the environment for a Microsoft Teams deployment, deploying and managing teams, managing collaboration and managing communication in Microsoft Teams. In Microsoft Teams overview, you will get an overview of Microsoft Teams including Teams architecture and related Office 365 workloads.`,
    duration: "4 Days",
    modules: [
      new Module("Microsoft Teams Overview", [
        "• Overview of Microsoft Teams",
        "• Overview of security and compliance in Microsoft Teams",
        "• Overview of managing Microsoft Teams"
      ]),
      new Module(
        "Implement Microsoft Teams Governance, Security and Compliance",
        [
          "• Implement Governance and Lifecycle Management for Microsoft Teams",
          "• Implementing Security for Microsoft Teams",
          "• Implementing Compliance for Microsoft Teams"
        ]
      ),
      new Module("Prepare the environment for a Microsoft Teams deployment", [
        "• Upgrade from Skype for Business to Microsoft Teams",
        "• Plan and configure network settings for Microsoft Teams",
        "• Deploy and Manage Microsoft Teams endpointss"
      ]),
      new Module("Deploy and manage teams", [
        "• Create and manage teams",
        "• Manage membership",
        "• Manage access for external users"
      ]),
      new Module("Manage collaboration in Microsoft Teams", [
        "• Manage chat and collaboration experiences",
        "• Manage settings for Teams apps"
      ]),

      new Module("Manage communication in Microsoft Teams", [
        "• Manage Live event and meetings experiences",
        "• Manage phone numbers",
        "• Manage Phone System for Microsoft Teams",
        "• Troubleshot audio, video, and client issues"
      ])
    ]
  },
  {
    name: "OutLook",
    url: "/images/microsoft/m-outLook.png",
    description: ``,
    duration: "2 Days",
    modules: []
  },
  {
    name: "Publisher",
    url: "/images/microsoft/m-publisher.png",
    description: ``,
    duration: "2 Days",
    modules: []
  }
];
