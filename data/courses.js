const { Module } = require("../data/struct");
let contentAvailable = true;
// duration:"",
// description:``,

const microsoft = require("./microsoft-office");
const adobe = require("./adobe");
const technical = require("./technical");
const digital = require("./digital");
const leadership = require("./leadership");
const business = require("./business");

const courses = {
  microsoft,
  Mtechnical: [
    {
      contentAvailable,
      name: "Azure",
      url: "/images/mtechnical/azure.png",
      duration: "",
      description: `Whether you’re new to the field or a seasoned professional, mastering the basics in Microsoft Azure can help you jump-start your career and prepare you to dive deeper into the many technical opportunities Azure offers.
The certification validates your basic knowledge of cloud services and how those services are provided with Azure. Candidates should be able to demonstrate a fundamental knowledge of cloud concepts, along with Azure services, workloads, security, privacy, pricing, and support.

The Microsoft Certified: Azure Fundamentals certification could be a great fit for you if you’d like to:

Prove your knowledge of cloud computing concepts, models, and services, such as public, private, and hybrid cloud, in addition to infrastructure as a service (IaaS), platform as a service (PaaS), and software as a service (SaaS).
Show your expertise on how Azure supports security, privacy, compliance, and trust.
It is recommended to have familiarity with concepts of networking, storage, compute, application support, and application development. You can use your Azure Fundamentals certification to reinforce your basics for other Azure role-based or specialty certifications, but it isn’t a prerequisite for any of them.`,
      modules: [
        new Module("    Cloud Computing & Microsoft Azure Fundamentals", [
          "Introduction to Azure",
          "Different segments SaaS, PaaS, and IaaS",
          "Azure Regions and Data Centers",
          "Understanding of Microsoft Azure portal",
          "Introduction to all Azure services",
          "Windows Azure Subscription",
          "Setting Up a Trial Subscription"
        ]),
        new Module("    Azure Virtual Machines", [
          "Operating System Images Supported",
          "Virtual Machine instances",
          "Azure VM types and Pricing",
          "Types of Provisioning",
          "Disks & Images",
          "Virtual Machine management, automation and scripting",
          "Cloud Service and Resource Model Deployment",
          "Setting up VM in Availability set using Load Balanced Endpoint",
          "VM Availability using Availability Sets"
        ]),
        new Module("    Introduction to Azure Virtual Network and Services", [
          "Types of Azure Virtual Network VNET to VNET, point-to-site and site-to-site, Express Route",
          "Creating Virtual Networks in Azure",
          "Azure Subnet and IP ranges",
          "Endpoints",
          "Load Balancing Endpoints",
          "Understanding Network ACL and Network Security Group Setting up Private and Public IP",
          "Introduction to Azure Traffic Manager",
          "Available options in Azure Traffic Manager",
          "Understanding of Deployment Traffic Manager"
        ]),
        new Module("Microsoft Azure Storage", [
          "Overview of Microsoft Azure Storage",
          "Storage Account",
          "Storage Account Replication Techniques",
          "Protocols and Consistency Model",
          "Type of Azure Storage Account",
          "Storage Services Blob, Table, queue, File",
          "Azure CDN Services, Managed and Unmanaged Disk"
        ]),
        new Module("     Manage AzureActive Directory (AD) ", [
          "Azure Active Directory Overview",
          "Self-Service Password Reset",
          "Azure AD Identity Protection",
          "Integrating SaaS Applications with Azure AD",
          "Azure Domains and Tenants",
          "Azure Users and Groups",
          "Azure Roles",
          "Managing Devices"
        ]),
        new Module("    Manage App Service Plans", [
          "App Service Overview",
          "App Service monitoring overview",
          "Web Role and Worker Role"
        ]),
        new Module("     Azure SQL Database", [
          "Understanding Database as a service",
          "Difference between SQL server and Azure SQL",
          "Advantage and Benefits of SQL database Scaling SQL database",
          "Backup and Performance Options Security in Azure",
          "SQL Pricing Model",
          "Azure SQL Data Warehouse"
        ]),
        new Module("    Azure Backup and Site Recovery", [
          "Azure Vaults",
          "Configuring backups",
          "Data Protection Manager",
          "Azure Site Recovery and Disaster Recovery",
          "On Premise Migration using Recovery Services"
        ])
      ]
    },
    {
      contentAvailable,
      name: "Microsoft 365",
      url: "/images/microsoft/office-365.png",
      description:
        "Office 365 is Microsoft’s cloud-based collaborative suite of apps. Office 365 focuses on accessibility to documents and communication, mobility, and team collaboration. This course will provide an overview of the apps available in Office 365. Learn the core features of Office 365, how they can simplify your workday and make your team more productive.",
      modules: [
        new Module(`Navigate Office 365`, [
          "Customize Office 365 start page",
          "Search for apps, documents, people, team sites",
          "Overview of the apps",
          "Easily access documents",
          "Navigate with the start menu"
        ]),

        new Module(`Work with your documents with OneDrive for Business`, [
          "Store personal documents with access anytime, anywhere, any device",
          "Search for documents",
          "See documents shared with you",
          "Recover deleted documents",
          "See your team documents",
          "Create new documents, or upload existing documents",
          "Manage sharing and permissions of documents yourself",
          "Work online, or in the desktop",
          "Collaborate and co-author documents in real-time",
          "Access your documents without an internet connection"
        ]),
        new Module(`Access Email on the Go with Outlook on the Web`, [
          "Navigate Outlook",
          "Manage your inbox",
          "Work with incoming mail",
          "Work with new mail",
          "Work with modern Email attachments",
          "Schedule a meeting"
        ]),

        new Module(`Keep track of tasks with Planner`, [
          "What is Planner",
          "Quickly view the status of a plan",
          "Easily edit and modify a plan",
          "View a plan by Boards, Charts, or Schedule",
          "See all tasks assigned to yourself"
        ]),
        new Module(`Forms`, [
          "Create a survey",
          "Work with survey responses",
          "Share a survey",
          "Create a quiz"
        ]),
        new Module(`Work with all your tasks in one place with To-Do`, [
          "Create your personal To Do list that syncs up everywhere",
          "Work with your tasks",
          "Work with the built-in lists – Tasks, Flagged email, Assigned to you",
          "Work with the filtered lists – Planned, Important, My Day"
        ]),
        new Module(`Work and Collaborate better with Teams`, [
          "What is Teams",
          "Accessing Teams",
          "Navigate in Teams",
          "Communicate with your team",
          "Work with documents in Teams",
          "Make a document tab",
          "Private conversations",
          "Escalate conversation to audio call",
          "Meetings in Teams"
        ])
      ]
    },
    {
      contentAvailable,
      duration: "3 days",
      description: `Boost your career as a certified Microsoft Dynamics 365 professional by enrolling into Peakware Techschool training. The course drives you through the fundamentals of Microsoft Dynamics 365 (CRM) from basics to advanced concepts, and also builds skills to configure and customize reports, dashboards, templates, etc. It also offers two real-time projects which are in line with the Microsoft Dynamics 365 certification exam.
`,
      name: "Dynamics 365",
      url: "/images/mtechnical/dynamics.png",
      modules: [
        new Module("Development Basics", [
          "Visual Studio",
          "Visual Studio Team Services",
          "System Architecture",
          "Projects and models",
          "Concept of extension",
          "Concept of over-layering",
          "Using tools",
          "Cross-reference tool",
          "Find tool",
          "Table browser tool"
        ]),
        new Module("X++ Basics", [
          "Introduction to X++",
          "Data types",
          "Primitive",
          "Composite",
          "Statements and loops",
          "Operators",
          "Macros",
          "Runnable Classes"
        ]),
        new Module("X++ Advanced", [
          "Classes and methods",
          "Inheritance",
          "Exception Handling",
          "Event Handlers",
          "The SysOperation framework",
          "Table Extension Classes",
          "Form Extension Classes",
          "Best Practices"
        ]),
        new Module("Storing Data", [
          "Creating table",
          "Adding fields",
          "Field groups",
          "Index",
          "Table relation",
          "Delete action",
          "Table inheritance",
          "Table Extensions",
          "Best Practices"
        ]),
        new Module("Searching for Data", [
          "Query",
          "Creating Static AOT query",
          "Creating dynamic query using X++"
        ]),
        new Module("Creating a view", [
          "          Working with Select statement",
          "Simple select statement",
          "filtering in the select statements",
          "sorting in the select statements",
          "joins in a select statement",
          "aggregate select statements"
        ]),
        new Module("Optimizing data retrieval", [
          "Manipulating Data",
          "The validation methods",
          "Record-based manipulation",
          "Insert",
          "Update ",
          "Delete ",
          "Set-based data manipulation ",
          "The insert_recordset",
          "The update_recordset",
          "The delete_from",
          "User interface",
          "form patterns",
          "creating forms",
          "Applying patterns to form",
          "Applying sub patterns to form controls",
          "Display and edit methods",
          "Menus",
          "Menu items",
          "Security",
          "Setting privileges for a Form/Class",
          "Assigning privileges to duty",
          "Assigning duty to role"
        ]),
        new Module("SSRS Reports", [
          "          Query based report",
          "RDP based report"
        ]),
        new Module("Data Management", [
          "Data Entities",
          "Building a Data Entity",
          "Using a Data Entity",
          "Composite Data Entity",
          "Basic data Import and Export",
          "Working with Data Management Platform"
        ])
      ]
    },
    {
      contentAvailable,
      name: "Security, Compliance, and Identity (SCI)",
      url: "/images/mtechnical/security.png",
      description: `This course is targeted to those looking to familiarize themselves with the fundamentals of security, compliance, and identity (SCI) across cloud-based and related Microsoft services.
This is a broad audience that may include business stakeholders, new or existing IT professionals, or students who have an interest in Microsoft security, compliance, and identity solutions.
Candidates should be familiar with Microsoft Azure and Microsoft 365 and want to understand how Microsoft security, compliance, and identity solutions can span across these solution areas to provide a holistic and end-to-end solution.


Part of the requirements for: Microsoft Certified: Security, Compliance, and Identity Fundamentals
Prerequisites
Candidates should be familiar with Microsoft Azure and Microsoft 365`,
      duration: "",
      modules: [
        new Module(
          "    Describe the Concepts of Security, Compliance, and Identity",
          [
            "Describe security methodologies",
            "describe the Zero-Trust methodology",
            "describe the shared responsibility model",
            "define defense in depth"
          ]
        ),
        new Module("    Describe security concepts", [
          "describe common threats",
          "describe encryption"
        ]),
        new Module(
          "    Describe Microsoft Security and compliance principles",
          [
            "describe Microsoft's privacy principles",
            "describe the offerings of the service trust portal"
          ]
        ),
        new Module(
          "    Describe the capabilities of Microsoft Identity and Access Management Solutions",
          [
            "Define identity principles/concepts",
            "define identity as the primary security perimeter",
            "define authentication",
            "define authorization",
            "describe what identity providers are",
            "describe what Active Directory is",
            "describe the concept of Federated services",
            "define common Identity Attacks"
          ]
        ),
        new Module(
          "    Describe the basic identity services and identity types of Azure AD",
          [
            "describe what Azure Active Directory is",
            "describe Azure AD identities (users, devices, groups, service principals/applications)",
            "describe what hybrid identity is",
            "describe the different external identity types (Guest Users)"
          ]
        ),
        new Module("    Describe the authentication capabilities of Azure AD", [
          "describe the different authentication methods",
          "describe self-service password reset",
          "describe password protection and management capabilities",
          "describe Multi-factor Authentication",
          "describe Windows Hello for Business"
        ]),
        new Module("    Describe access management capabilities of Azure AD", [
          "describe what conditional access is",
          "describe uses and benefits of conditional access",
          "describe the benefits of Azure AD roles"
        ]),

        new Module(
          "    Describe the identity protection & governance capabilities of Azure AD",
          [
            "describe what identity governance is",
            "describe what entitlement management and access reviews is",
            "describe the capabilities of PIM",
            "describe Azure AD Identity ProtectionDescribe the capabilities of Microsoft Security Solutions"
          ]
        ),
        new Module("    Describe basic security capabilities in Azure", [
          "describe Azure Network Security groups",
          "describe Azure DDoS protection",
          "describe what Azure Firewall is",
          "describe what Azure Bastion is",
          "describe what Web Application Firewall is",
          "describe ways Azure encrypts data"
        ]),
        new Module("    Describe security management capabilities of Azure", [
          "describe the Azure Security center",
          "describe Azure Secure score",
          "describe the benefit and use cases of Azure Defender - previously the cloud workload protection platform (CWPP)",
          "describe Cloud security posture management (CSPM)",
          "describe security baselines for Azure"
        ]),
        new Module("    Describe security capabilities of Azure Sentinel", [
          "define the concepts of SIEM, SOAR, XDR",
          "describe the role and value of Azure Sentinel to provide integrated threat protection"
        ]),
        new Module(
          "    Describe threat protection with Microsoft 365 Defender (formerly Microsoft Threat Protection)",
          [
            "describe Microsoft 365 Defender services",
            "describe Microsoft Defender for Identity (formerly Azure ATP)",
            "describe Microsoft Defender for Office 365 (formerly Office 365 ATP)",
            "describe Microsoft Defender for Endpoint (formerly Microsoft Defender ATP)",
            "describe Microsoft Cloud App Security"
          ]
        ),
        new Module(
          "    Describe security management capabilities of Microsoft 365",
          [
            "describe the Microsoft 365 Security Center",
            "describe how to use Microsoft Secure Score",
            "describe security reports and dashboards",
            "describe incidents and incident management capabilities"
          ]
        ),
        new Module("    Describe endpoint security with Microsoft Intune", [
          "describe what Intune isdescribe endpoint security with Intune",
          "describe the endpoint security with the Microsoft Endpoint Manager admin center"
        ]),
        new Module(
          "    Describe the Capabilities of Microsoft Compliance Solutions",
          [
            "Describe the compliance management capabilities in Microsoft",
            "describe the compliance center",
            "describe compliance manager",
            "describe use and benefits of compliance score"
          ]
        ),
        new Module(
          "    Describe information protection and governance capabilities of Microsoft 365",
          [
            "describe data classification capabilities",
            "describe the value of content and activity explorer",
            "describe sensitivity labels",
            "describe Retention Polices and Retention Labels",
            "describe Records Management",
            "describe Data Loss Prevention"
          ]
        ),
        new Module("    Describe insider risk capabilities in Microsoft 365", [
          "describe Insider risk management solution",
          "describe communication compliance",
          "describe information barriers",
          "describe privileged access management",
          "describe customer lockbox"
        ]),
        new Module(
          "    Describe the eDiscovery capabilities of Microsoft 365",
          [
            "describe the purpose of eDiscovery",
            "describe the capabilities of the content search tool",
            "describe the core eDiscovery workflow",
            "describe the advanced eDisovery workflow"
          ]
        ),
        new Module("    Describe the audit capabilities in Microsoft 365", [
          "describe the core audit capabilities of M365",
          "describe purpose and value of Advanced Auditing"
        ])
      ]
    },
    {
      contentAvailable,
      name: "PowerShell",
      duration: "",
      description: `PowerShell Course Content has been developed keeping in mind the various PowerShell Administrator job skills required across the globe. The curriculum covers in-depth concepts in PowerShell Scripting. Also, it includes PowerShell security goals, Debugging, Using the .NET framework in PowerShell, Visual Studio Git integration with a hands-on approach that enables participants to learn and execute automation tasks.`,
      url: "/images/mtechnical/powershell.png",
      modules: [
        new Module("    Getting started with Windows PowerShell", [
          "Overview and Background",
          "Philosophy of PowerShell (Why?) ",
          "What is PowerShell? ",
          "Evolution of PowerShell? "
        ]),
        new Module("    Setting Up the Environment", [
          "Introducing PowerShell Command line and ISE",
          "Visual Studio Code for PowerShell due to easy integration with Git",
          "Lab",
          "PowerShell installation",
          "Configuring the Windows PowerShell console",
          "Customizing Windows PowerShell console",
          "Configuring the Windows PowerShell ISE",
          "Customizing Windows PowerShell ISE",
          "Installing and configuring Visual Studio Code for PowerShell",
          "Customizing Visual Studio"
        ]),
        new Module("    Syntax of PowerShell", [
          "Getting Grasp of PowerShell commands.",
          "PowerShell help system for your rescue.",
          "Lab",
          "Finding commands using PowerShell help system.",
          "Recording commands for reference using PowerShell logging.",
          "Early training: Demo of some commonly used PowerShell commands."
        ]),
        new Module("    Cmdlets for Administration", [
          "Active Directory administration cmdlets",
          "Network configuration cmdlets",
          "Other server administration cmdlet",
          "Lab",
          "Creating an Active Directory lab.",
          "Basic Active Directory administration cmdlets",
          "Creating new user accounts using PowerShell",
          "Imports accounts using .CSV files",
          "Supplying credentials within a PowerShell script "
        ]),
        new Module("    Working with the Windows PowerShell Pipeline", [
          "Connecting commands using Pipeline",
          "Lab",
          "Selecting, sorting, and displaying data.",
          "Filtering objects.",
          "Enumerating objects.",
          "Exporting user information to a file."
        ]),
        new Module("    Pipeline in deep", [
          "Understanding how the pipeline works.",
          "Lab",
          "Pipeline input ByValue",
          "Pipeline input ByPropertyName",
          "Practical hands on commonly used Advance Pipeline Techniques in PowerShell."
        ]),
        new Module("    Working with Providers", [
          "Use PS Providers",
          "Use PS Drives",
          "Lab",
          "Using File System Provider",
          "Creating and navigating files and folders using PowerShell.",
          "Using Registry Provider",
          "Creating a registry keys using PowerShell scripts.",
          "Using Active Directory Provider"
        ]),
        new Module("    Working with variables, arrays, and hash tables", [
          "No fuzz data containers: variables.",
          "PowerShell collections. Arrays and hash tables.",
          "PowerShell types.",
          "Objects in PowerShell.",
          "Lab",
          "Working with variable types",
          "Using arrays",
          "Using hash tables "
        ]),
        new Module("    Basic Scripting", [
          "Input and output. ",
          "Accomplishing lot with PowerShell scripting.",
          "Flow control in scripts.",
          "Lab",
          "Setting a script.",
          "Input and output using PowerShell",
          "Processing an array with a ForEach loop",
          "Processing items by using If statements",
          "Creating a random password",
          "Text file processing"
        ]),
        new Module("    Advanced scripting", [
          "Advanced scripts.",
          "Functions in PowerShell.",
          "Errors and Exceptions.",
          "Getting grasp of PowerShell modules.",
          "Lab",
          "Creating simple functions",
          "Creating advanced functions",
          "Adding error handling to a script",
          "Converting a function to a module"
        ]),
        new Module("    Administering Remote Computers", [
          "Using basic Windows PowerShell remoting",
          "Using advanced Windows PowerShell remoting techniques",
          "Using PSSessions",
          "Lab ",
          "Enabling remoting on the computer.",
          "Disabling remoting on the computer.",
          "Hands on common PowerShell remoting commands."
        ]),
        new Module("    Getting real-life examples of scripting", [
          "Theory and Lab",
          "Using PowerShell to automate active directory related tasks",
          "Using PowerShell to automate Azure cloud related tasks.",
          "Using PowerShell to automate Monitoring related tasks.",
          "Using PowerShell to automate networking related tasks."
        ])
      ]
    },
    {
      contentAvailable,
      name: "Exchange",
      description: "",
      duration: "",
      url: "/images/mtechnical/exchange.png",
      modules: [
        new Module("     Deploying Exchange Server", [
          "This module explains the key features and architecture of Exchange Server. It also explains the prerequisites and requirements for deploying Exchange Server. Additionally, it explains how to use the Exchange admin center and the Exchange management shell to manage Exchange Server.",
          "Overview of Exchange Server",
          "Exchange Server architecture",
          "Requirements for Exchange Server",
          "Deploying Exchange Server",
          "Exchange Server Management Tools",
          "Lab: Deploying Exchange Server",
          "Evaluating requirements and prerequisites for an Exchange Server 2019 installation",
          "Deploying Exchange Server 2019",
          "Verifying Exchange Server functionality",
          "Installing Exchange Server 2019 on Windows Server Core 2019 (optional)",
          "After completing this module, students will be able to:",
          "Describe the key features and functionality of Exchange Server.",
          "Describe the Exchange Server architecture.",
          "Describe the requirements and options for deploying Exchange Server.",
          "Deploy Exchange Server.",
          "Describe how to use management tools to manage Exchange Server."
        ]),
        new Module("     Managing Exchange Server 2016 storage", [
          "This module explains the features of Exchange Server mailbox databases and the storage options available for Exchange Server. It also explains how to configure Exchange Server mailbox databases and storage.",
          "Exchange Server mailbox databases",
          "Exchange Server storage",
          "Configuring Exchange Server mailbox databases and storage",
          "Lab: Configuring Exchange Server storage",
          "Creating and configuring mailbox databases",
          "After completing this module, students will be able to:",
          "Describe the features of Exchange Server mailbox databases.",
          "Explain the storage options available for Exchange Server.",
          "Configure Exchange Server mailbox databases and storage."
        ]),
        new Module("     Managing recipient objects", [
          "This module explains how to manage the user, shared, resource, public folder, arbitration mailboxes in Exchange Server. It also explains how to manage contacts, mail users, and distribution groups in Exchange Server. Finally, it explains how to configure address lists and email address and address book policies in Exchange Server.",
          "Managing user mailboxes",
          "Managing other types of mailboxes",
          "Managing other recipients objects",
          "Configuring policies and adress lists",
          "Lab : Managing recipient objects",
          "Configuring recipient objects",
          "Managing public folder mailboxes",
          "Lab: Configuring address lists and policies",
          "Managing email-address policies",
          "Managing address lists and address book policies",
          "After completing this module, students will be able to:",
          "Manage user mailboxes in Exchange Server.",
          "Manage shared, resource, public folder, and arbitration mailboxes in Exchange Server.",
          "Manage contacts, mail users, and distribution groups in Exchange Server.",
          "Configure address lists, and email address and address book policies in Exchange Server."
        ]),
        new Module(
          "     Managing recipients and Exchange servers by using Exchange Server cmdlets",
          [
            "This module describes how to manage recipients by using Exchange Server cmdlets. It also explains how to manage Exchange servers by using Exchange Server cmdlets and scripts.",
            "Overview of the Exchange Management Shell",
            "Managing Exchange Servers by using Exchange Management Shell cmdlets",
            "Managing Exchange servers by using scripts",
            "Lab: Managing Exchange Server and recipient objects by using Exchange Management Shell",
            "Using Exchange Management Shell to manage recipients",
            "Using Exchange Management Shell to manage Exchange Server",
            "After completing this module, students will be able to:",
            "Manage recipients by using Exchange Server cmdlets.",
            "Manage Exchange servers by using Exchange Server cmdlets.",
            "Manage Exchange servers by using scripts."
          ]
        ),
        new Module("     Implementing client connectivity", [
          "This module explains how to configure and manage client access services in Exchange Server. It also explains the client connectivity options for Exchange Server and how to configure Outlook on the web. Additionally, it explains how to configure mobile messaging for Exchange Server.",
          "Configuring client access services",
          "Managing client access services",
          "Client connectivity in Exchange Server",
          "Configuring Outlook on the web",
          "Configuring mobile messaging",
          "Lab: Configuring client access services",
          "Configuring namespaces for client access",
          "Configuring certificates for client access",
          "Configuring custom MailTips",
          "Lab: Deploying and configuring client access services on Exchange Server",
          "Configuring Exchange Server for Outlook",
          "Configuring Outlook on the web",
          "Configuring Microsoft Exchange ActiveSync",
          "After completing this module, students will be able to:",
          "Configure client access services in Exchange Server.",
          "Manage client access services.",
          "Describe client connectivity and publishing of Exchange Server services.",
          "Configure Outlook on the web.",
          "Configure mobile messaging on Exchange Server."
        ]),
        new Module("     Managing high availability in Exchange Server", [
          "This module describes the high availability options for Exchange Server. It also explains how to configure highly available mailbox databases and Client Access services by using load balancing methods.",
          "High availability on Exchange Server",
          "Configuring highly available mailbox databases",
          "Configuring high availability of Client Access services",
          "Lab: Implementing DAGs",
          "Creating and configuring a DAG",
          "Lab: Implementing and testing high availability",
          "Deploying a high availability solution for Client Access services",
          "Testing the high availability configuration",
          "After completing this module, students will be able to:",
          "Describe the high availability in Exchange Server.",
          "Configure highly available mailbox databases.",
          "Configure high available Client Access services."
        ]),
        new Module("     Implementing disaster recovery for Exchange Server", [
          "This module describes Exchange Server backup and restore features and the details that you need to consider when you create a backup plan.",
          "Implementing Exchange Server backup",
          "Implementing Exchange Server recovery",
          "Lab: Backing up Exchange Server data",
          "Backing up an Exchange Server mailbox database",
          "Lab: Restoring Exchange Server data",
          "Restoring Exchange Server mailbox",
          "Restoring a database availability group (DAG) member (optional)",
          "After completing this module, students will be able to:",
          "Back up Exchange Server data.",
          "Restore Exchange Server data by using the configured backups."
        ]),
        new Module("     Configuring and managing message transport", [
          "This module explains messaging transport in Exchange Server. It also explains how to configure message transport in Exchange Server and manage transport rules in Exchange Server.",
          "Overview of message transport",
          "Configuring message transport",
          "Managing transport rules",
          "Lab: Configuring and managing message transport",
          "Configuring message transport",
          "Monitoring and verifying message delivery",
          "Configuring a disclaimer transport rule",
          "Configuring a DLP policy for financial data",
          "After completing this module, students will be able to:",
          "Describe messaging transport in Exchange Server.",
          "Configure message transport in Exchange Server.",
          "Manage transport rules in Exchange Server."
        ]),
        new Module("     Configuring message security", [
          "This module describes how to deploy and manage an Edge Transport server for message security. It also explains how to implement antivirus and antispam solutions for Exchange Server.",
          "Deploying and managing an Edge Transport server for message security",
          "Implementing an antivirus solution for Exchange Server",
          "Implementing an antispam solution for Exchange Server",
          "Lab: Configuring message security in Exchange Server",
          "Configuring and testing EdgeSync",
          "Configuring antivirus, antispam and malware protection features",
          "After completing this module, students will be able to:",
          "Deploy and manage an Edge Transport server for message security.",
          "Implement an antivirus solution for Exchange Server.",
          "Implement an antispam solution for Exchange Server."
        ]),
        new Module("     Monitoring and troubleshooting Exchange Server", [
          "This module explains how to configure performance monitoring and troubleshoot issues in Exchange Server.",
          "Monitoring Exchange Server",
          "Troubleshooting Exchange Server",
          "Lab: Monitoring and troubleshooting Exchange Server",
          "Monitoring Exchange Server",
          "Troubleshooting database availability",
          "Troubleshooting Client Access servers",
          "After completing this module, students will be able to:",
          "Configure performance monitoring in Exchange Server.",
          "Troubleshoot issues in Exchange Server."
        ]),
        new Module("     Securing and maintaining Exchange Server", [
          "This module explains how to secure Exchange Server by using role-based access control (RBAC). It also explains how to configure audit logging in Exchange Server and how to maintain and update Exchange Server.",
          "Securing Exchange Server by using RBAC",
          "Configuring audit logging in Exchange Server",
          "Maintaining Exchange Server",
          "Lab: Securing and maintaining Exchange Server",
          "Configuring Exchange Server permissions",
          "Configuring audit logging",
          "Maintaining Exchange Server",
          "After completing this module, students will be able to:",
          "Secure Exchange Server by using RBAC.",
          "Configure audit logging in Exchange Server.",
          "Maintain and update Exchange Server."
        ]),
        new Module(
          "     Implementing and managing Exchange Online deployments",
          [
            "This module explains Exchange Online and Office 365 and how to manage it. It also explains how to implement a migration to Exchange Online.",
            "Overview of Exchange Online and Office 365",
            "Managing Exchange Online",
            "Implementing the migration to Exchange Online",
            "Managing a hybrid environment",
            "Lab: Managing Exchange Online",
            "Managing Exchange Online",
            "After completing this module, students will be able to:",
            "Provide an overview of Exchange Online and Office 365.",
            "Manage Exchange Online.",
            "Implement a migration to Exchange Online."
          ]
        )
      ]
    },
    {
      contentAvailable,
      duration: "",
      name: "SharePoint",
      description: `
      This course will introduce the audience to SharePoint Online Administration in Office 365 and explain and demonstrate the configuration options for SharePoint Online. The course is appropriate for existing SharePoint on-premises administrators and new administrators to Office 365 who need to understand how to correctly setup SharePoint Online for their company. The course will also help SharePoint on-premise administrators understand the differences between SharePoint on-premises and SharePoint Online.

Audience
The course is appropriate for existing SharePoint on-premises administrators and new administrators to Office 365 who need to understand how to correctly setup SharePoint Online for their company. The course will also help SharePoint on-premise administrators understand the differences between SharePoint on-premises and SharePoint Online.

Prerequisites
This course is designed for administrators who need to setup, configure and manage SharePoint Online. Attendees need to have a basic understanding of Office 365 and a basic understanding of using PowerShell.

At course completion
After completing this course, students will be able to:
• Understand the architecture of SharePoint Online
• Have knowledge of all the components in SharePoint Online
• Have on hands on experience configuring the components of SharePoint Online
• Have hands on experience configuring the options
Work with Site Collections and storage options
• Manage user profiles and social profiling
• Understand and configure data connectivity in SharePoint Online
• Build a taxonomy structure
• Understand and configure Search in SharePoint Online
• Configure and deploy apps
• Understand and define Enterprise content management and data loss prevention.
• Configure additional options and features in SharePoint Online such as Information Rights Management`,
      url: "/images/mtechnical/sharepoint.png",
      modules: [
        new Module(
          "    Introduction to Office 365 and SharePoint Online:This first module will take you on a tour of Office 365 and SharePoint Online and ensure you are familiar with all the components that will be covered in later modules. You will understand the way identity management works in Office 365 and also the tools required to manage the environment. You will also learn about the options for migrating to SharePoint Online and building hybrid scenarios. ",
          [
            "Introduction to the Office 365 Administration Center",
            "Configure Reporting",
            "Accessing SharePoint management tools",
            "Accessing security and compliancy",
            "Managing Office 365 and SharePoint Online with PowerShell",
            "Comparing On Premises SharePoint with SharePoint Online",
            "User identity in Office 365 and SharePoint Online",
            "Manging user domains",
            "Building Hybrid scenarios",
            "OneDrive and Sites redirection",
            "Yammer redirection",
            "Understand hybrid search",
            "Hybrid business data connectivity",
            "Hybrid taxonomy",
            "Lab : Configuring the Office 365 environment",
            "Create a new Outlook.com account",
            "Create a new Office 365 Trial",
            "Install Azure Active Directory PowerShell",
            "Install SharePoint Online Management Shell",
            "Create test users",
            "Install Office 2016 on to your client"
          ]
        ),

        new Module(
          "Working with Site Collections: This module with help you to understand the topology of site collections and how to create and manage them. You will learn how to define delegated control and administration plus configure storage options and quotas for different site collections. You will learn how to configure external access to your content and sharing with external identities and finally how to delete and recover site site collections including PowerShell management.",
          [
            "Understand the topology of site collections",
            "Creating Site Collections",
            "Defining ownership and security for site collections",
            "Configuring Storage",
            "Configure External Access to site collections",
            "Recovering site collections",
            "Configure external sharing",
            "Managing site collections with PowerShell",
            "Lab : Managing Site Collections",
            "Create a new site collection using the UI",
            "Create a new site collection using PowerShell",
            "Configure Storage Quotas",
            "Configure external sharing",
            "Restore site collections"
          ]
        ),
        "Create a sub site and deploy content for later labs",
        new Module(
          "    Managing User Profiles : User Profiles are a key part of any social and collaboration platform and in this module you will learn how to manage the user profile options in SharePoint Online including the building of custom profile properties. You will also learn how to create and configure audiences for targeted content and then use the audiences for personal site redirection. Finally you will learn how to configure the search options and cleanup jobs for the profile service.",
          [
            "Overview of the profile service",
            "Defining profile properties",
            "Map profile properties to a term store",
            "Creating custom profile properties",
            "Managing audiences",
            "Creating audiences",
            "Managing user profile policies",
            "Configure trusted my site host locations",
            "Configure preferred search center locations",
            "Defining read access permission levels",
            "Configuring newsfeed options",
            "Setup email notifications",
            "Configure my site cleanup",
            "Lab : Managing the User Profile service",
            "Create a new custom user profile property",
            "Create a custom property mapped to a metadata term",
            "Create an Audience using profile properties and target content",
            "Configure My Site cleanup accounts"
          ]
        ),
        new Module(
          "Manage Business Connectivity Services : This module focuses on the challenge of SharePoint of displaying data that resides in other data sources and then displaying that data in SharePoint sites. The business connectivity service is designed to allow data connections to be defined in order to display data from other locations such as Azure SQL and then allow users to add data web parts without the need to understand data connection configuration. You will also learn the importance of using the secure store service along side business data connections to define data access to remote data storage using single sign on.",
          [
            "Overview of the business connectivity service",
            "Introduction to BDC definition files",
            "Creating BDC definition files",
            "Introduction to the secure store service",
            "Configuring the secure store service",
            "Creating secure store target application settings",
            "Configure connections to cloud services",
            "Configure connections to on-premises services",
            "Tools to build data connections",
            "Creating external content types",
            "Building external lists using external data",
            "Lab : Managing the business data connectivity service",
            "Create a new secure store application",
            "Create a new BCS BDC connection",
            "Create an external content type",
            "Create a new external list to leverage the external data"
          ]
        ),
        new Module(
          "Managing the Term store: The term store is a key component of Enterprise Content Management and findability and this module will cover the creation of a term store through to building term sets and applying them to content. Terms can also be part of a social profile structure as well and you will learn how to inject terms through the UI and via PowerShell.",
          [
            "Overview of the term store",
            "Understanding terms and life cycle management",
            "Creating term groups",
            "Creating the term store",
            "Creating Term Sets in the UI",
            "Creating Term Sets via importing via a CSV",
            "Creating terms in the UI",
            "Creating terms via PowerShell and CSOM",
            "Manage terms with synonyms and pinning",
            "Configure delegated administration",
            "Lab : Creating and Managing the Term Store",
            "Create a Term Group and Term Set",
            "Manage Terms with PowerShell and CSOM",
            "Manage Terms with synonyms and pinning",
            "Configure delegated administration"
          ]
        ),
        new Module(
          "Configuring Search: Search is one of the most important tools available to a user in SharePoint as it enables data to be found and targeted in various ways. This module will show what options are available to extend the search service with powerful search optimization tools such as result sources and managed properties to enable search web parts to be used as part of a targeted content deployment. You will also learn about exporting the search configuration and importing it to other site collections or even other tenants.",
          [
            "An Introduction to the search service",
            "Understanding Managed Properties",
            "Create Managed Properties",
            "Manage Authoritative pages",
            "Understand Result sources",
            "Create and configure result sources",
            "Understand Query rules",
            "Promoting results through query rules",
            "Remove search results from the index",
            "Exporting search configurations",
            "Importing search configurations",
            "Lab : Managing and configuring the Search Service",
            "Create a new managed property",
            "Create a new result source",
            "Create a query rule",
            "Create a custom search web part",
            "Export the search configuration"
          ]
        ),
        new Module(
          "Configuring Apps:    This module will focus on the configuration and deployment of the application management service in SharePoint Online. Apps are a great way to add features and functionality to SharePoint and Apps can be deployed in several ways into SharePoint Online including via the store and via the Application catalog. You will learn how to configure apps from both environments as well as deploying a full commercial app from a 3rd party.",
          [
            "    An Introduction to Apps",
            "    Understanding the App Catalog",
            "    Building the App catalog",
            "    Adding Apps to the catalog",
            "    Add Apps to your SharePoint sites",
            "    Adding Apps via the marketplace store",
            "    Manage App licensing",
            "    Configure store access settings",
            "    Monitoring app usage",
            "    Lab : Configuring Apps",
            "    Create and configure an app catalog",
            "    Add an Office 365 store app",
            "    Add an app via the app catalog",
            "    Add an Azure app",
            "    Monitor and Manage app usage"
          ]
        ),
        new Module(
          "     Enterprise Content Management in SharePoint Online: Enterprise Content Management (ECM) deals with the control and management of data as it is created and stored in SharePoint Online. In this module you will learn about lifecycle management, document management and data loss prevention capabilities in SharePoint Online. You will learn how to build various components to help manage ECM such as records centers, policy centers and visit the compliancy and security center to configure eDiscovery and data loss prevention.",
          [
            "An Introduction to ECM in SharePoint Online",
            "Components of ECM",
            "Understanding In-Place records management",
            "Configure In-Place records management",
            "Understanding the records center",
            "Build and configure a records center",
            "Understanding the compliancy policy center",
            "Build a compliancy policy center and configure policies",
            "Discover the security and compliancy center",
            "Configure an eDiscovery center",
            "Build an eDiscovery case",
            "Understand data loss prevention",
            "Build a data loss prevention policy and query",
            "Lab : Configuring ECM in SharePoint Online",
            "Configure In-Place Records Management",
            "Create a Records Center",
            "Create an eDiscovery case",
            "Create a compliance policy center",
            "Configure DLP"
          ]
        ),

        new Module(
          `Manage options for SharePoint Online: There are several additional options available for SharePoint Online that are not configured in a specific category. This module will cover the configuration and options available in SharePoint and Office 365 for these components. Specific components can
include options like classic look libraries and site classification options through to the enabling and configuration of Information Rights Management that allows additional security options on items in SharePoint. Finally you will understand the
difference and reasons for using early release feature options for Office 365 which can affect SharePoint features to your users.`,
          [
            "Configure OneDrive features",
            "Understand list and library experience",
            "Configure classic versus new experience",
            "Configure use of Yammer or Newsfeeds",
            "Understand Information Rights Management",
            "Configure Information Rights Management",
            "Define site classification options",
            "Understand early release options for Office 365",
            "Configure Early release options for your Office 365 tenant",
            "Lab : Configure options for SharePoint Online",
            "Configure Tenant wide classic list and library experience",
            "Define Site creation options",
            "Configure Information Rights Management"
          ]
        )
      ]
    },
    {
      contentAvailable,
      name: "Visual Studio",
      duration: "",
      description:
        "This Visual Basic three day programming course will introduce your to writing console applications using the Visual Studio IDE. Learn how to program the graphical user interfaces for Visual Basic programs.",
      url: "/images/mtechnical/visualstudio.png",
      modules: [
        new Module(
          "The following modules will be will be covered on the course.",
          [
            "Getting Started with Visual Basic and the Visual Studio IDE",
            "Working with Forms and Controls",
            "Using Variables and Arrays",
            "Working with Procedures",
            "Decision Structures and Loops",
            "Validating User Input",
            "Object-Oriented Programming in Visual Basic.NET",
            "Handling Errors and Exceptions",
            "Enhancing the User Interface",
            "Web Forms and XML Web Services",
            "Using ADO.NET",
            "Deploying Applications",
            "Target Audience",
            "This course is intended for new users to the Visual Basic language who want a thorough understanding of Visual Basic fundamentals, perhaps before moving on to developing web and desktop applications using Visual Studio."
          ]
        )
      ]
    },
    {
      contentAvailable,
      name: "DB2 SQL Training",
      url: "/images/mtechnical/sql-server.png",
      duration: "5 Days",
      description: `• Learn how to use SQL arithmetic operations.
    • Learn how to use scalar and column functions.
    • Learn how to use UNION and UNION ALL.`,
      modules: [
        new Module("The course covers the following topics:", [
          "    • Introduction",
          "    • Simple SQL Queries",
          "    • Retrieving Data from Multiple Tables",
          "    • Scalar Functions and Arithmetic",
          "    • Column Functions and Grouping",
          "    • UNION and UNION ALL",
          "    • Using Subqueries",
          "    • Maintaining data"
        ]),
        new Module("By the end of the course, you will be able to:", [
          "    • Code SQL statements to retrieve data from a DB2 or Informix table, including the SELECT, FROM, WHERE, GROUP BY, HAVING and ORDER BY clauses",
          "    • Code inner joins and non-correlated subqueries",
          "    • Use SQL arithmetic operations",
          "    • Use scalar and column functions",
          "    • Use UNION and UNION ALL",
          "    • INSERT, UPDATE and DELETE rows",
          "    • Code simple CREATE TABLE and CREATE VIEW statements"
        ])
      ]
    },
    {
      contentAvailable,
      description: "",
      duration: "",
      name: "System Center",
      url: "/images/mtechnical/system-center.png",
      modules: [
        new Module(
          "     Extending the Configuration Manager infrastructure to support Internet-based and mobile devices",
          [
            "This module describes the challenges in managing a mobile and Internet-based workforce and how Configuration Manager integrated with MDM and cloud services solutions can address these challenges.",
            "Lessons:",
            "Managing a mobile and distributed workforce",
            "Integrating Configuration Manager with cloud services and Internet-based management solutions",
            "PKI requirements to support the Internet and MDM",
            "Expanding content availability by using cloud-based distribution points",
            "Lab: Preparing for cloud integration",
            "Activating an Azure trial subscription",
            "Configuring and enabling directory syncing",
            "Lab: Implementing PKI for Configuration Manager site systems and clients",
            "Creating certificate templates for Configuration Manager services",
            "Deploying certificates to Configuration Manager",
            "Lab: Configuring cloud-based distribution points",
            "Creating and exporting an Azure management certificate for cloud-based distribution points",
            "Setting up Azure and creating a cloud-based distribution point"
          ]
        ),
        new Module("     Managing clients on the Internet", [
          "This module explains how to manage client devices that are located outside of the corporate network and connected to the Internet.",
          "Lessons:",
          "Methods for managing Internet-based clients",
          "Planning and implementing Internet-based client management",
          "Planning and implementing Cloud Management Gateway",
          "Lab: Configuring IBCM",
          "Configuring the Configuration Manager site systems to support IBCM",
          "Verify the client settings for IBCM",
          "Lab: Configuring Cloud Management Gateway for managing clients on the Internet",
          "Enabling the Cloud Management Gateway feature",
          "Creating and exporting the Azure management certificate for cloud-based distribution points",
          "Setting up the Cloud Management Gateway"
        ]),
        new Module(
          "     Managing Microsoft Store for Business apps by using Configuration Manager",
          [
            "This module explains how to deploy and manage Microsoft Store for Business apps by using Configuration Manager.",
            "Lessons:",
            "Overview of Microsoft Store for Business",
            "Managing Microsoft Store for Business apps by using Configuration Manager",
            "Lab: Microsoft Store for Business",
            "Signing up for Microsoft Store for Business",
            "Microsoft Store for Business",
            "Lab: Deploying Microsoft Store for Business apps by using Configuration Manager",
            "Setting up syncing with Microsoft Store for Business",
            "Microsoft Store for Business apps",
            "Module 4: Managing Office 365 apps by using Configuration Manager",
            "This module explains how to deploy and manage Office 365 apps by using Configuration Manager.",
            "Lessons:",
            "Overview of Office 365 ProPlus",
            "Deploying Office 365 client applications by using Configuration Manager",
            "Managing and updating an Office 365 client deployment",
            "Lab: Office 365 for to support application deployment by using Configuration Manager",
            "Signing up for an Office 365 trial subscription",
            "Assigning Office 365 ProPlus licenses to users",
            "Modifying Office 365 ProPlus options for manual downloads",
            "Lab: Deploying and managing Office 365 client applications by using Configuration Manager",
            "Configuring infrastructure requirements to support",
            "Deploying the Office 365 ProPlus to client devices application",
            "Configuring software updates to support Office 365"
          ]
        ),
        new Module(
          "     Mobile device management by using Configuration Manager",
          [
            "This module describes the methods and technologies used to manage mobile devices by using Configuration Manager.",
            "Lessons:",
            "Overview of mobile device management",
            "Configuring the Exchange Server connector for mobile device management",
            "Lab: Managing mobile devices by using the Exchange Server connector",
            "Configuring security permissions for Exchange integration",
            "Configuring the Exchange Server connector",
            "Managing mobile devices by using Configuration Manager"
          ]
        ),
        new Module("     Hybrid MDM with Configuration Manager and Intune", [
          "This module describes how to integrate Configuration Manager with Intune and provide the foundation for device enrolment and management capabilities.",
          "Lessons:",
          "Planning and preparing for hybrid MDM",
          "Configuring hybrid MDM with Configuration Manager and Intune",
          "Lab: Configuring hybrid MDM",
          "Validating and configuring prerequisites for Configuration Manager and Intune integration",
          "Adding the Intune subscription to Configuration Manager",
          "Adding terms and conditions for MDM users"
        ]),
        new Module(
          "     Device platform enrolment by using Configuration Manager MDM",
          [
            "This module explains how to enrol iOS, Android, and Windows-based devices in a hybrid Configuration Manager and Intune MDM solution.",
            "Lessons:",
            "Enrolling Windows devices into MDM",
            "Enrolling Android devices into MDM",
            "Enrolling iOS devices into MDM",
            "Managing mobile devices in Configuration Manager",
            "Lab: Enrolling Windows devices into hybrid mobile device management (MDM) environment",
            "Enrolling Windows devices into a hybrid MDM environment",
            "Configuring automatic MDM enrolment for Windows 10 devices",
            "Enrolling Windows 10 and Windows 10 Mobile devices into MDM",
            "Lab: Enrolling Android devices into a hybrid MDM environment",
            "Enabling Android enrolment for MDM by using Configuration Manager and Microsoft Intune",
            "Enrolling an Android device into MDM",
            "Lab: Managing mobile devices in hybrid MDM",
            "Configuring compliance settings for devices enrolled into MDM",
            "Deploying and managing applications to devices enrolled into MDM",
            "Performing on-demand management on devices enrolled into MDM"
          ]
        ),
        new Module(
          "     On-premises mobile device management using Configuration Manager",
          [
            "This module explains on-premises MDM, its requirements, the types of devices it can manage, and how to configure on-premises mobile device management by using Configuration Manager. It also explains how to implement on-premises MDM in an existing Configuration Manager environment and the different ways to enrol Windows 10 devices.",
            "Lessons:",
            "Overview of on-premises mobile device management",
            "Configuring on-premises MDM by using Configuration Manager",
            "Lab: Managing mobile devices with an on-premises infrastructure",
            "Configuring PKI for On-premises MDM",
            "Preparing Configuration Manager prerequisites for on-premises MDM",
            "Enrolling a standalone Windows 10 devices for On-premises MDM as a mobile client"
          ]
        )
      ]
    },
    { name: "Windows", url: "/images/mtechnical/windows.png" },
    { name: "Windows Server", url: "/images/mtechnical/w-server.png" }
  ],
  adobe,
  project: [
    { name: "COBIT", url: "/images/project-mgt/cobit.png" },
    {
      contentAvailable,
      description: ``,
      duration: "",
      name: "DevOps",
      url: "/images/project-mgt/devops.png",
      modules: [
        new Module("    Introduction to Devops", [
          "What Is Devops",
          "History of Devops",
          "Devops definition",
          "DevOps Main Objectives",
          "DevOps and Software Development Life Cycle",
          "Waterfall Model",
          "Agile Model",
          "Continuous Integration & Deployment",
          "Jenkins",
          "Containers and Virtual Development",
          "Docker",
          "Vagrant",
          "Configuration Management Tools",
          "Ansible",
          "Puppet",
          "Chef"
        ]),
        new Module("    Cloud Computing", [
          "What is Cloud?",
          "Evolution of Cloud Computing",
          "IAAS (Infrastructure as a Service)",
          "SAAS (Software as a Service)",
          "PAAS (Platform as a Service)",
          "Private, Public and Hybrid Cloud",
          "Public Clouds",
          "Amazon Web Services",
          "Microsoft Azure",
          "Google Cloud Services"
        ]),
        new Module("    LINUX Basic and Admin", [
          "Linux OS Introduction",
          "Importance of Linux in DevOps",
          "Linux Basic Command Utilities",
          "Linux Administration",
          "Environment Variables",
          "Networking"
        ]),
        new Module("    Linux Server Installation", [
          "RPM and YUM Installation",
          "Shell Scripting",
          "Introduction",
          "Variables",
          "Flow Controls",
          "Loops",
          "Functions",
          "Lists",
          "Manipulating Strings",
          "Reading and Writing Files",
          "Positional Parameters",
          "Continuous Integration – Jenkins",
          "Introduction to Jenkins",
          "Continuous Integration with Jenkins",
          "Configure Jenkins"
        ]),
        new Module("    Jenkins Management", [
          "Scheduling build Jobs",
          "POLL SCM",
          "Build Periodically",
          "Maven Build Scripts",
          "Support for the GIT version control System",
          "Different types of Jenkins Jobs",
          "Jenkins Build Pipe Line",
          "Parent and Child Builds",
          "Sequential Builds",
          "Jenkins Master & Slave Node Configuration",
          "Jenkins Workspace Management",
          "Securing Jenkins",
          "Authentication",
          "Authorization",
          "Confidentiality",
          "Creating Users",
          "Jenkins Plugins",
          "Installing Jenkins Plugins",
          "SCM plugin",
          "Build and test"
        ]),
        new Module("    Version Control-GIT", [
          "GIT Features",
          "3-Tree Architecture",
          "GIT – Clone /Commit / Push",
          "GIT Hub Projects",
          "GIT Hub Management",
          "GIT Rebase & Merge",
          "GIT Stash, Reset, Checkout",
          "GIT Clone, Fetch, Pull"
        ]),
        new Module("    Build tool- Maven", [
          "Maven Installation",
          "Maven Build requirements",
          "Maven POM Builds (pom.xml)",
          "Maven Build Life Cycle",
          "Maven Local Repository (.m2)",
          "Maven Global Repository",
          "Group ID, Artifact ID, Snapshot",
          "Maven Dependencies",
          "Maven Plugins"
        ]),
        new Module("    ANSIBLE", [
          "Introduction to Ansible",
          "Ansible Server Configuration",
          "Infrastructure Management",
          "SSH Connection in Ansible Master"
        ]),
        new Module("    YAML Scripts", [
          "Host Inventory",
          "Hosts and Groups",
          "Host Variables",
          "Group Variables",
          "Host and Group Specific Data",
          "Ad-hoc Commands",
          "Playbooks",
          "Variables",
          "Conditionals",
          "Loops",
          "Blocks",
          "Handlers",
          "Templates",
          "Modules",
          "Core Modules",
          "Extra Modules",
          "Ansible Roles"
        ]),
        new Module("    Docker", [
          "How to get Docker Image?",
          "What is Docker Image",
          "Docker Installation",
          "Working with Docker Containers",
          "What is Container",
          "Docker Engine",
          "Crating Containers with an Image",
          "Working with Images",
          "Docker Command Line Interphase",
          "Docker Compose",
          "Docker Hub",
          "Docker Trusted Registry",
          "Docker swarm",
          "Docker attach",
          "Docker File & Commands"
        ])
      ]
    },
    {
      contentAvailable,
      description: `A practical one-day change management training course, which can be tailored to your needs. The training focuses on developing the critical skills needed to effectively manage change in the workplace. It also covers how to motivate people through the change process.
By the end of this one-day change management course, the participants will have:
An appreciation of the impact of organisational change on people
Identified ways they can positively lead and motivate people through cultural or organisational change
Developed skills for effectively communicating change
Identified ways they can help team members cope with change`,
      duration: "",
      name: "Change Management",
      url: "/images/project-mgt/change-mgt.png",
      modules: [
        new Module("    The case for managing change", [
          "Experiencing change",
          "Recognising the impact change can have on standards",
          "Facilitator presentation, The ‘Change Game’ exercise and group review"
        ]),
        new Module(
          "    Our experience of change/change management principles",
          [
            "Drawing upon past experiences of change",
            "Nine key principles of managing change",
            "Small group exercise, facilitator review and presentation"
          ]
        ),
        new Module("    Emotional responses to change", [
          "Business and personal impact of failing to deal with people’s needs & concerns",
          "Identifying our own response to change",
          "DREC change curve",
          "Practical activity in small groups with group learning review"
        ]),
        new Module("    Compelling reasons for change", [
          "Responding to resistance",
          "Conveying compelling reasons for change",
          "Video clip, small group review of case study, group discussion"
        ]),
        new Module("    Clear vision and objectives for change", [
          "Three steps to creating a clear vision",
          "Imaging your vision",
          "Facilitator presentation, imaging exercise in small groups, group presentations and feedback"
        ]),
        new Module("    Building momentum and managing resistance to change", [
          "Driving momentum",
          "Recognising the reasons for resistance",
          "Our reactions to resistance",
          "Dealing with resistance with the right change management strategy",
          "Brainstorming exercise, ‘Blankety Blank’ exercise, group discussion, ‘Wall of Resistance’ exercise and review"
        ]),
        new Module("    Applying the learning and next steps", [
          "Review of learning and action planning"
        ]),
        new Module("    The managing change training will be supported with:", [
          "An optional participant pre-course questionnaire and/or pre-course reading",
          "A colour printed workbook with tips, techniques and space for personal notes"
        ])
      ]
    },
    { name: "Project Management", url: "/images/project-mgt/project-mgt.png" },
    {
      contentAvailable,
      description: `ITIL 4 expands the scope of the world’s leading best practice framework for IT to incorporate many new ways of working, including Agile, LEAN, DevOps, and other innovative approaches. In this course you will learn the core aspects of the ITIL Framework and how to use it to improve the quality of services you deliver to your customers.`,
      duration: "",
      name: "ITIL",
      url: "/images/project-mgt/itil.png",
      modules: [
        new Module("    ITIL 4 Overview", [
          "Introduction to ITIL",
          "Key Concepts of ITIL"
        ]),
        new Module("    The ITIL Framework", [
          "The Four Dimensions of Service Management",
          "The ITIL Service Value System (SVS)"
        ]),
        new Module("    The ITIL Guiding Principles", [
          "Focus on Value",
          "Start Where You Are",
          "Progress Iteratively with Feedback",
          "Collaborate and Promote Visibility",
          "Think and Work Holistically",
          "Keep It Simple and Practical",
          "Optimize and Automate"
        ]),
        new Module("    The ITIL Service Value System (SVS)", [
          "Governance",
          "The Service Value Chain",
          "Continual Improvement"
        ]),
        new Module("    Key ITIL Practices", [
          "Continual Improvement",
          "Service Level Management",
          "Change Control",
          "Incident Management",
          "Service Request Management",
          "Service Desk",
          "Problem Management"
        ]),
        new Module("    Other ITIL Practices", [
          "General Management Practices",
          "Service Management Practices",
          "Technical Management Practices"
        ])
      ]
    },
    { name: "Product Management", url: "/images/project-mgt/product-mgt.png" },
    {
      name: "Business Analysis",
      url: "/images/project-mgt/business-analysis.png"
    },
    { name: "IAITAM", url: "/images/project-mgt/iaitam.png" },
    { name: "Six Sigma", url: "/images/project-mgt/6sigma.png" }
  ],
  digital,
  business,
  leadership,
  technical,
  analytic: [
    {
      contentAvailable,
      description:
        "Analyzing Data with Microsoft Power BI certification training course is one of the popular certification courses from Microsoft for today’s professionals who want to gain a proper understanding of knowledge and skills to analyze business data with Power BI to create custom visualization in dashboards and reports. Take part in this 4-day instructor-led DA 100 certification training that is ideal for Business Intelligence professionals who wants to maximize the value of their data assets by using Microsoft Power BI. If you are looking to get certified in Analyzing Data with Microsoft Power BI course, then look no further.  In an evolving business landscape, for businesses to stay relevant and competitive, it is critical to embrace cloud solutions to ensure business continuity at all costs. With data becoming the new oil required to run the next-gen digital economy, it is imperative for businesses to utilize untapped data assets spread across physical, cloud, and hybrid environments.",
      duration: "",
      name: "Power BI",
      url: "/images/analytic/power-bi.png",
      modules: [
        new Module("     Get Started with Microsoft Data Analytics.", [
          "Data analytics and Microsoft.",
          "Getting Started with Power BI."
        ]),
        new Module("     Prepare Data in Power BI.", [
          "Get Data from Various Data Sources.",
          "Optimize Performance.",
          "Resolve Data Errors."
        ]),
        new Module("     Clean, Transform, and Load Data in Power BI .", [
          "Data Shaping.",
          "Enhance the Data Structure.",
          "Data Profiling."
        ]),
        new Module("     Designing a Data Model in Power BI .", [
          "Introduction to Data Modeling.",
          "Working with Tables.",
          "Dimensions and Hierarchies."
        ]),
        new Module("    Create Measures using DAX in Power BI .", [
          "Introduction to DAX.",
          "DAX Content.",
          "Advanced DAX."
        ]),
        new Module("    Optimize Model Performance.", [
          "Optimize the data model for Performance.",
          "Optimize DirectQuery Models.",
          "Create and manage Aggregations."
        ]),
        new Module("    Create Reports.", [
          "Design a Report.",
          "Enhance the Report."
        ]),
        new Module("    Create Dashboards .", [
          "Create a Dashboard.",
          "Real-time Dashboards.",
          "Enhance a Dashboard."
        ]),
        new Module("    Create Paginated Reports in Power BI.", [
          "Paginated Report Overview.",
          "Creating Paginated reports."
        ]),
        new Module("    Perform Advanced Analytics .", [
          "Advanced Analytics.",
          "Data Insights Through AI Visuals."
        ]),
        new Module("    Create and Manage Workspaces.", [
          "Creating Workspaces.",
          "Sharing and Managing Assets."
        ]),
        new Module("    Manage Datasets in Power BI .", [
          "Parameters.",
          "Datasets."
        ]),
        new Module("    Row-level Security .", ["Security in Power BI ."])
      ]
    },
    {
      contentAvailable,
      description: `Tableau certification training courses are a helpful way to gain a deeper understanding of what the tool is used for. There are different levels of certifications involved for learners to complete. Each level will further the candidate’s expertise level and make them experts with the tool. Since Tableau is a popular tool but it is an emerging field for certifications, the certificate holders are few and high in demand. Large enterprises want to invest in the most optimal way of visualizing their data and insights, making Tableau certification training courses a viable option to further one’s career.
The most widely recognized Tableau certification training courses are:
Analyze and Visualize Data using Tableau
Tableau Server Certified Associate
Tableau Desktop Specialist
Tableau Server Certified Professional
Tableau Desktop Certified Associate
Tableau Desktop Certified Professional
Popular Tableau Certification Training Courses
Analyze and Visualize Data using Tableau
Analyze and Visualize Data using Tableau certification training course is for professionals who want to gain expertise on how to use different types of data sources for their presentations with Tableau. They learn about how to use files from Microsoft Excel, R data files and other database files to create a variety of different charts for visualization. The data visualization includes learning how to create line graphs, box charts, pie charts and more with Tableau. Users also learn how to build interactive dashboards. This certification training course is available for all those who are interested in learning the Tableau interface so it has no prerequisites.
Tableau Server Certified Associate
The Tableau Server Certified Associate certification exam is for working professionals who want to advocate their proficiency in the Tableau software. Since more and more organizations are using Tableau platforms to showcase and visualize their data, this certification can help in increasing one’s demand in the job market. The certification training course includes advanced data visualization concepts that are used in Tableau, concepts on how to conduct data mapping and strategic statistical analysis of information and data. This training course will give employees and job applicants an in-depth knowledge on obtaining and presenting valuable insights as well as best practices and strategies on how to gather business intelligence effectively.
Tableau Desktop Specialist
The Tableau Desktop Specialist certification training course is open for all those who want to become experts in Tableau Desktop. There are no prerequisites for this certification examination, although prior training and experience in the Tableau platform come highly recommended. There are a lot of free training tutorials and study material available for those who are interested in gaining this certification. The certification training course is mainly focused on improving one’s working and fundamental knowledge of the functionalities of Tableau. Candidates gain a deeper understanding of what Tableau is, what it does for companies, and how to use the business intelligence tool to generate meaningful insights.
Tableau Server Certified Professional
The Tableau Server Certified Professional certification training course is for advanced working professionals who have already worked with Tableau extensively in the past. This certification shows the skills of the professional and expertise in the Tableau server, its functionality, and more. After obtaining this certification, a working professional will have in-depth knowledge in the following mediums:
Configuration of a production environment
Planning of a high-availability installation
Implementation of a high-availability installation
Monitoring and maintenance of a production environment`,
      duration: "",
      name: "Tableau",
      url: "/images/analytic/tableau.png",
      modules: [
        new Module("Troubleshooting", [
          "One will be an expert in Tableau Server configuration, management, administration, installation, deployment, and maintenance. This certification training course is a great way to kick start or advance in one’s career in data analysis."
        ]),
        new Module("Tableau Desktop Certified Associate", [
          "The Tableau Desktop Certified Associate certification training course is for those working professionals who want to take on a more focused and comprehensive approach to learning about the Tableau Desktop platform. It is a foundational course that teaches learners about the core concepts of Tableau and its functionalities. Since this is a foundational course, it does not have any prerequisites that are necessary for this certification.",
          "This course is usually taken up by those working professionals who want to get a certification to become a Tableau Desktop Certified Professional. The Tableau Desktop Certified Associate certification holders will have working knowledge on how to use Tableau Desktop to create analysis reports and solve problems using the various mapping, advanced data analysis, calculation, and data preparation tools they will learn about in the certification training course."
        ]),
        new Module("Tableau Desktop Certified Professional", [
          "The Tableau Desktop Certified Professional certification training course is for working professionals and Tableau Desktop Certified Associates who want to further their expertise in Tableau Desktop and learn about making advanced charts, using the Story feature and more using Tableau. The certification training course teaches learners about the following aspects of Tableau Desktop:",
          "Story feature in Tableau Desktop"
        ]),
        new Module("Advanced dashboards and charts in Tableau", [
          "Using the Actions feature in Tableau Desktop",
          "Using Tableau for HR and forecasting"
        ]),
        new Module("Mapping using Tableau Desktop", [
          "Using the Education dashboard in Tableau Desktop"
        ]),
        new Module("Who can take up Tableau Certification Training?", [
          "A wide range of professionals who can take up Tableau Certification training and below are some of the standard job roles that will be benefitted by it but, in general, it is not limited to only the professionals listed below:",
          "System Administrator",
          "Analytics manager",
          "Tableau consultant",
          "Business consultant",
          "IT consultant",
          "Analytics consultant",
          "System Architect",
          "Data analyst",
          "Senior data analyst",
          "IT Representative",
          "Data scientist",
          "Business intelligence analyst",
          "IT Implementer"
        ]),
        new Module("Business Intelligence developer", [
          "Any professional who wants to learn Tableau and its uses",
          "Professionals who want to clear their respective Tableau certification exams",
          "Reasons to choose Tableau Certification Courses from Peakware Techschool ",
          "A wide range of Tableau certification courses for professionals across varied career paths",
          "Choose relevant Tableau Certifications pathway across Associate, Professional, and Specialist levels",
          "Expert Tableau instructors to clear your doubts and help in exam preparation",
          "Tableau training material prepared by SMEs with regular updates in coordination with the parent body",
          "Industry-recognized Tableau Certification training from an Accredited Training Organization",
          "Flexible dates of your choice for Tableau training through multiple training deliver modes that include 1-on-1 training, classroom, online, and corporate training programs",
          "You have the option to take your Tableau certification in 4 hours/day and 8 hours/day timeslots",
          "Take part in Tableau certification training in ‘Guaranteed to Run’ sessions with ‘Exam Pass Guarantee’",
          "Demonstrate your proficiency in Data Visualization skills and knowledge by taking part in popular Tableau training programs"
        ]),
        new Module("Benefits of Tableau Certification training", [
          "There are many benefits to completing the different certification training courses offered in Tableau. Creating inspiring and insightful data visualizations can go a long way in advancing one’s career, especially if the working professional is currently or wishes to aspire in the field of data analytics and data science. Some of the benefits of completing a certification training course in Tableau are:",
          "Achieve a holistic understanding of data visualizations used for business intelligence purpose",
          "Gain expertise in the workings of Tableau, a platform widely used by large-scale enterprises by connecting and interpreting huge amounts of complex data",
          "Become an expert in an emerging field of data interpretation which is becoming more and more popular in enterprises across industry sectors",
          "Gain a deeper understanding of trends and forecasting with Tableau Certification Courses",
          "A great demand for Tableau certified professionals who can easily analyse data and create actionable insights from it",
          "As a Tableau certified professional you are now responsible for an enterprise to take data-driven decisions and help non-technical people understand data",
          "Earn higher salary with Tableau certification. According to job portal indeed.com, a Tableau certified professional earns anywhere between USD 83,000 to USD 110,000 per annum in the US.",
          "Achieve a varied career path as Tableau certified professionals are eligible for job roles in Big Data, Cloud Computing, Machine Learning, Internet of Things (IoT), Artificial Intelligence (AI), and Business Intelligence (BI)"
        ])
      ]
    },
    {
      contentAvailable,
      name: "Python",
      url: "/images/analytic/python.png",
      description: `The PCAP: Programming Essentials in Python course (short form: Python Essentials) covers all the basics of programming in Python, as well as general computer programming concepts and techniques.

The course also familiarizes the student with object-oriented approach. The course is broken down into six modules.

Each student has access to hands-on practice materials, labs, quizzes, and assessments to learn how to utilize the skills and knowledge gained on the course and interact with some real-life programming tasks and situations.

Students who complete the course will be able to accomplish coding tasks related to the basics of programming in the Python language, and to understand the fundamental notions and techniques used in object-oriented programming.

Furthermore, they will be ready to attempt the following qualifications:

PCEP - Certified Entry-Level Python Programmer;
PCAP - Python Certified Associate Programmer.
`,
      duration: "",
      modules: [
        new Module("    Introduction to Python and Computer Programming", [
          "Python - a tool, not a reptile",
          "There is more than one Python",
          "Let's start our Python adventure"
        ]),
        new Module(
          "     Data Types, Variables, Basic Input-Output Operations, Basic Operators",
          [
            "Your first program",
            "Python literals",
            "Operators - data manipulation tools",
            "Variables - data-shaped boxes",
            "How to talk to computer?"
          ]
        ),
        new Module(
          "     Boolean Values, Conditional Execution, Loops, Lists and List Processing, Logical and Bitwise Operations",
          [
            "Making decisions in Python",
            "Python's loops",
            "Logic and bit operations in Python",
            "Lists - collections of data",
            "Sorting simple lists - the bubble sort algorithm",
            "Lists - some more details",
            "Lists in advanced applications"
          ]
        ),
        new Module(
          "     Functions, Tuples, Dictionaries, and Data Processing",
          [
            "Writing functions in Python",
            "How functions communicate with their environment?",
            "Returning a result from a function",
            "Scopes in Python",
            "Let's make some fun... sorry, functions",
            "Tuples and dictionaries"
          ]
        ),
        new Module(
          "    Modules, Packages, String and List Methods, and Exceptions",
          [
            "Using modules",
            "Some useful modules",
            "What is package?",
            "Errors - the programmer's daily bread",
            "The anatomy of exception",
            "Some of the most useful exceptions",
            "Characters and strings vs. computers",
            "Python's nature of strings",
            "String methods",
            "Strings in action",
            "Four simple programs"
          ]
        ),
        new Module(
          "    The Object-Oriented Approach: Classes, Methods, Objects, and the Standard Objective Features; Exception Handling, and Working with Files",
          [
            "Basic concepts of object programming",
            "A short journey from procedural to object approach",
            "Properties",
            "Methods",
            "Inheritance - one of object programming foundations",
            "Exceptions once again",
            "Generators and closures",
            "Processing files",
            "Working with real files"
          ]
        )
      ]
    },
    {
      contentAvailable,
      description: `SAP Business Objects Business Intelligence is a centralized suite for data reporting, visualization, and sharing. It turns information into valuable insights, accessible anytime, wherever, as the on-premise BI layer for SAP's Business Technology Platform. It assists in sharing the insights and making informed decisions with the Business Intelligence (BI) suite of SAP BusinessObjects. The analytics framework can help your growth by offering a scalable architecture - from a few users to tens of thousands of users, and from a single tool to multiple tools and interfaces.
PEAKWARE TECHSCHOOL  trainings delivers the best industry-oriented SAP Business Objects training course that is in line with the certification exam. This SAP Business Objects certification training course provides you in-depth knowledge of the content required for learning SAP Business Objects which incorporates the concepts such as SAP Business Object Architecture, Business data modeling, built-in functions, joins, set operators, Business Object information designing tool, dashboards, administration, etc. During the training period, you can get full support and real-time project assistance from experienced professionals. Enroll today at PEAKWARE TECHSCHOOL  for accepting the new challenges to make the best outcome out of our SAP Business Objects online training course.
The SAP Business Objects training course curriculum is structured to streamline the learning process by a team of experts. You can find the complete course details in the modules mentioned below: And SAP Business Objects learning track includes several certifications and now let's explore one after the other. `,
      duration: "",
      name: "SAP Business Object",
      url: "/images/analytic/sap.png",
      modules: [
        new Module([
          "    Introduction to Business Objects",
          "New features in SAP BO BI 4.0.",
          "Data Warehousing Architecture.",
          "Business Objects Architecture.",
          "SAP BO Data Modelling",
          "SAP BO ER Modelling",
          "SAP BO Dimensional Modelling",
          "Dimensional Tables.",
          "Fact Tables.",
          "Different types of Dimension Tables",
          "Conformed Dimension Tables",
          "Junk Dimension Tables",
          "Degenerate Dimension Table",
          "SchemaStar Schema",
          "Snowflake Schema",
          "Galaxy Schema",
          "Slowly Changing Dimensional Tables.",
          "Fact Table.",
          "Fact less Fact Table.",
          "SAP BO Different Types of Facts or Measures",
          "Bridge tables.",
          "Lookup Tables.",
          "Top-Down Approach",
          "SAP BO Bottom-Up Approach",
          "ODSSAP BO Data Mart",
          "Dependent Data Mart.",
          "SAP BO Independent Data Mart",
          "Staging Area",
          "Granularity",
          "Normalization",
          "De normalization",
          "OLTP",
          "OLAP"
        ]),
        new Module("    Types of OLAPs", [
          "Oracle 10g (SQL)",
          "SAP BO Introduction to Oracle Database",
          "Data Types",
          "SQL Statements",
          "DDL – Data Definition Language",
          "DML – Data Manipulation Language",
          "DQL – Data Query language",
          "DCL – Data Controlling language",
          "TCS – Transaction Controlling Language",
          "Module 3: Built-in functions",
          "SAP BO Character Functions",
          "Numeric Functions",
          "Data Functions",
          "Conversion Functions",
          "Aggregate Functions"
        ]),
        new Module("     Joins", [
          "SAP BO Inner Join",
          "Left Outer Join",
          "Right outer Join",
          "Full outer Join",
          "Cartesian Join",
          "Self JoinNatural Join"
        ]),
        new Module("    Set Operators", [
          "Union",
          "Union All",
          "Intersect",
          "Minus"
        ]),
        new Module("    SAP BOBI 4.0 – Information Design Tool", [
          "SAP BO Creation of Project",
          "Relational Connection",
          "OLAP Connection",
          "Data Foundation Layer",
          "Business Layer",
          "Edit Connection",
          "Shortcut Connection",
          "Secured Connection",
          "Publishing Connection",
          "Publishing the Business layer",
          "Converting Repository Universe from Unv to Unx",
          "Publishing the Universe to Repository",
          "Publishing the Universe to Local",
          "Retrieving the Universe from Repository",
          "Multi-Source Universe",
          "Data Foundation",
          "Insert tables in Data Foundation",
          "Define Joins in Data Foundation",
          "Cordiality setting in Data Foundation",
          "Arrange Tables",
          "View Table values in Data Foundation",
          "Filter Table values in Data Foundation (won’t Impact in Reports O/P)",
          "Edit Table values (Removing Columns, Changing Data types & Keys)",
          "Calculated Column in Tables",
          "Sort and re-ordering the columns in Data Foundation",
          "Refresh Structure",
          "Derived tables",
          "Create Views",
          "Detect Join / Cordiality / Alias / Keys / Row Counts",
          "Resolving Loops",
          "AliasContext",
          "Business Layer",
          "Folders (Class)",
          "Sub Folder (Sub Class)",
          "Objects",
          "Dimension",
          "Measure",
          "Attribute",
          "Filter",
          "Native Filter",
          "Business Filter",
          "Hide Folders, Objects & filters",
          "Show Script",
          "Show Values",
          "View Tables and Object Dependency",
          "Custom Navigation Path",
          "Queries",
          "Parameters and List of values",
          "Check Integrity",
          "Data Security",
          "Business Security"
        ]),
        new Module(
          "    SAP BOBI 4.0 BI Launchpad & Web Intelligence Rich client",
          [
            "BI launch pad: What’s new in 4.0",
            "Introducing Web Intelligence",
            "Creating BI workspace",
            "Folders",
            "SAP Steam",
            "Scheduling a Document",
            "Working with Thin Clients",
            "Creating Web Intelligence Documents with Queries",
            "Report Design in the Java Report Panel",
            "Enhancing the Presentation of Reports",
            "Formatting Reports",
            "Creating Formulas and Variables",
            "Drilling",
            "Filtering data",
            "AlertsInput Control",
            "Scheduling",
            "Sharing Web Intelligence Documents",
            "FilterFormula",
            "FunctionsVariable",
            "Merge dimensions",
            "Alert",
            "Rank",
            "Sort",
            "Break",
            "Section",
            "Hyperlink",
            "Page view",
            "View Structure",
            "Refresh",
            "Purge",
            "Drill Filter Toolbar",
            "Drill",
            "Snapshot",
            "SAP BO Download to PDF,Excel & CSV",
            "Export to CSV",
            "Scope of Analysis",
            "Database Rank",
            "Sub Query",
            "Combined Query",
            "Custom SQL",
            "Changing report source",
            "Hyperlink"
          ]
        ),
        new Module("    SAP BOBI 4.0 Universe Design Tool", [
          "Connections",
          "Connection Types",
          "Universe parameters",
          "ParametersKinds of Joins",
          "Loops",
          "Context",
          "Aliases",
          "Class",
          "Sub Class",
          "Objects",
          "Condition Objects",
          "Functions",
          "@Functions",
          "@Prompts",
          "@Select",
          "@Where",
          "@Variable",
          "SAP BO Cascading Prompts",
          "Hierarchy",
          "LOV’s",
          "Cascading LOV’s",
          "Editing the LOV’s",
          "Derived tables",
          "Check Integrity",
          "Implementing Security",
          "Universe options",
          "Universe Locking",
          "Linking Universe",
          "Security Implementation"
        ]),
        new Module("    SAP BOBI 4.0 Dashboards", [
          "What’s new in SAP Business Objects Dashboards 4.0",
          "Connection to BO universe by using QAAWS Connection",
          "Using Live Office Data",
          "Connecting to Query Builder",
          "Canvas",
          "Components",
          "Component Properties",
          "Dynamic Visibility",
          "Drill option",
          "Developing Chart Dashboards",
          "Developing Maps Dashboards",
          "Using Containers",
          "Uploading Images",
          "Calling Hyperlinks in Dashboards",
          "Getting around in Xcelsius",
          "Working with your Excel workbook",
          "Visualizing data with charts",
          "Applying formatting options",
          "Using themes and templates to apply formatting",
          "Using selectorsV lookup in Excel",
          "Adding dynamic visibility",
          "Troubleshooting interactivity",
          "Working with Business Requirements"
        ]),
        new Module("    Administration", [
          "Setting up groups and users",
          "Taking Meta data backup",
          "Moving the code between environments",
          "Handling Services",
          "License Up-gradation",
          "Organizing and changing Folders & Categories",
          "Time Out sessions",
          "Instance Management",
          "Managing Servers",
          "Connections",
          "Migrating from Lower version to Existing version",
          "Controlling Universes",
          "Scheduling through CMC",
          "Publication",
          "User Security",
          "Modify Settings for Applications",
          "Access Levels",
          "Security"
        ])
      ]
    },
    {
      contentAvailable,
      description: `Right now will figure out how to program in R and how to utilize R for successful information examination. You will figure out how to introduce and arrange programming essential for a factual programming condition and depict conventional programming language ideas as they are executed in an elevated level measurable language. The course covers viable issues in factual figuring which remembers programming for R, adding information to R, getting to R bundles, composing R capacities, troubleshooting, profiling R code, and sorting out and remarking R code. Themes in measurable information examination will give working models. `,
      duration: "",
      name: "R-Programming",
      url: "/images/analytic/R.png/",
      modules: [
        new Module("    FUNDAMENTALS OF R", [
          "Installation of R & R Studio",
          "Features of R",
          "Variables in R",
          "Constants in R",
          "Operators in R",
          "Datatypes and R Objects",
          "Accepting Input from keyboard",
          "Important Built-in functions"
        ]),
        new Module("    VECTORS", [
          "Creating Vectors",
          "Accessing elements of a Vector",
          "Operations on Vectors",
          "Vector Arithmetic"
        ]),
        new Module("    CONTROL STATEMENTS", [
          "I statement",
          "if…else statement",
          "if else() function",
          "switch() function",
          "repeat loop",
          "while loop",
          "for loop",
          "break statement",
          "next statement"
        ]),
        new Module("    FUNCTIONS IN R", [
          "Formal and Actual arguments",
          "Named arguments",
          "Global and local variables",
          "Argument and lazy evaluation of functions",
          "Recursive functions"
        ]),
        new Module("    MATRICES", [
          "Creating matrices",
          "Accessing elements of a Matrix",
          "Operations on Matrices",
          "Matrix transpose"
        ]),
        new Module("    STRINGS", [
          "Creating strings",
          "paste() and paste0()",
          "Formatting numbers and string using format()",
          "String manipulation"
        ]),
        new Module("    LISTS", [
          "Creating lists",
          "Manipulating list elements",
          "Merging lists",
          "Converting lists to vectors"
        ]),
        new Module("    ARRAYS IN R", [
          "Creating arrays",
          "Accessing array elements",
          "Calculations across array elements"
        ]),
        new Module("    R FACTORS", [
          "Understanding factors",
          "Modifying factors",
          "Factors in Data frames"
        ]),
        new Module("    DATA FRAMES IN R", [
          "Creating data frame",
          "Operations on data frames",
          "Accessing data frames",
          "Creating data frames from various sources"
        ]),
        new Module("    DATA VISUALIZATION IN R", [
          "Need for data visualization",
          "Bar plot",
          "Plotting categorical data",
          "Stacked bar plot",
          "Histogram",
          "plot() function and line plot",
          "pie chart / 3D pie chart",
          "Scatter plot",
          "Box plot"
        ]),
        new Module("    STRINGR PACKAGE", [
          "Important functions in stringr",
          "Regular expressions"
        ]),
        new Module("    DPLYR PACKAGE", [
          "Load data into dataframe",
          "Viewing the data",
          "Selecting columns",
          "Selecting rows",
          "Reordering the rows",
          "Pipe operator",
          "Group operations"
        ])
      ]
    },
    {
      contentAvailable,
      description: `The literal meaning of ‘Big Data’ seems to have developed a myopic understanding in the minds of aspiring big data enthusiasts. When asked people about Big Data, all they know is, ‘It is referred to as massive collection of data which cannot be used for computations unless supplied operated with some unconventional ways’.
Big Data, is not just about, storing and extracting data, but much more than that. Big Data, itself comprises of so many technologies that it is difficult to recall which one to start learning with. No really! Some of the technologies big data consists of is Hadoop, MapReduce, Apache, Pig, Hive, Flume, Sqoop, Zookeeper, Oozie, Spark, Cassandra, Mongo DB and what not!
Companies are desperately in search of skilled big data analysts. Considering the fact, that data is being collected and stored at a velocity faster than ever, the urgency of such skilled professionals increases further. Before delving into big data, I’d suggest you capture a complete understanding of this topic i.e. the full syllabus of big data. So, that next time when you take up any course, you are confident that you’ve read every essential topic in big data. This becomes important when there are large numbers of training providers in the market and you don’t know, which one has covered the maximum of syllabus. Talking about training courses, the syllabus may vary depending on the course level (beginners or advanced). In here, I intend to provide a complete syllabus of mastering big data.
While searching for big data resources, I realized there isn’t a standard syllabus available which is globally recognized. The sequence may differ, depending on the course structure of training provider.
With the syllabus mentioned in this article, you should get a brief idea of all big data related technologies and what you should expect from you training provider. Recently, I read of ‘Black Book’ of Big Data and gathered some useful information parallel with internet search. Here’s the syllabus, covering beginners to advanced level concepts of Big Data:
`,
      duration: "",
      name: "Big Data Analytics",
      url: "images/analytic/big-data.png",
      modules: [
        new Module("    Overview of Big Data", [
          "This includes topics such as history of big data, its elements, career related knowledge, advantages, disadvantages and similar topics."
        ]),
        new Module("    Using Big Data in Businesses", [
          "This module should focus on the application perspective of Big Data covering topics such as using big data in marketing, analytics, retail, hospitality, consumer good, defense etc."
        ]),
        new Module("    Technologies for Handling Big Data", [
          "Big Data is primarily characterized by Hadoop. This module cover topics such as Introduction to Hadoop, functioning of Hadoop, Cloud computing (features, advantages, applications) etc"
        ]),
        new Module("    Understanding Hadoop Ecosystem", [
          "This includes learning about Hadoop and its ecosystem which includes HDFS, MapReduce, YARN, HBase, Hive, Pig, Sqoop, Zookeeper, Flume, Oozie etc."
        ]),
        new Module(
          "    Dig Deep to understand the fundamental of MapReduce and HBase",
          [
            "This module should cover the entire framework of MapReduce and uses of mapreduce."
          ]
        ),
        new Module("    Understanding Big Data Technology Foundations", [
          "This module covers the big data stack i.e. data source layer, ingestion layer, source layer, security layer, visualization layer, visualization approaches etc."
        ]),
        new Module("    Databases and Data Warehouses", [
          "This module should cover all about databases, polygot persistence and their related introductory knowledge"
        ]),
        new Module("    Using Hadoop to store data", [
          "This includes an entire module of HDFS, HBase and their respective ways to store and manage data along with their commands."
        ]),
        new Module("    Learn to Process Data using Map Reduce", [
          "This emphasizes on developing simple mapreduce framework and the concepts applied to it."
        ]),
        new Module("    Testing and Debugging Map Reduce Applications", [
          "After the applications are developed, the next step is to test and debug it. This modules imparts this knowledge."
        ]),
        new Module("    Learn Hadoop YARN Architechture", [
          "This module covers the background of YARN, advantages of YARN, working with YARN, backward compatibility with YARN, YARN Commands, log management etc."
        ]),
        new Module("    Exploring Hive", [
          "This modules introduces you with all the necessary knowledge of Hive."
        ]),
        new Module("    Exploring Pig", [
          "This modules introduces you with all the necessary knowledge of PIG."
        ]),
        new Module("    Exploring Oozie", [
          "This modules introduces you with all the necessary knowledge of Oozie."
        ]),
        new Module("    Learn NoSQL Data Management", [
          "This modules covers all about NoSQL including document databases, relationships, graph databases, schema less databases, CAP Theorem etc."
        ]),
        new Module(
          "    Integrating R and Hadoop and Understanding Hive in Detail",
          [
            "This module introduces you to RHadoop, ways to do text mining and related knowledge.",
            "In this article, I’ve covered the complete syllabus of Big Data Technologies. This syllabus should give you a comprehensive overview of the topics that you should cover in your upcoming big data training. If you realize, that your training doesn’t have any of the mentioned module in the syllabus, I’d recommend you to get in touch with the course administrator and get this thing sorted."
          ]
        )
      ]
    }
  ]
};

for (let i in courses) {
  let children = courses[i];
  children.forEach(child => {
    parent = i;
    child.path = `courses/${parent}/${child.name}`;
    let name = child.name.toLowerCase().split(" ").join("-");
    child.linkName = name;
  });
}

module.exports = courses;
