const { Module } = require("../data/struct");
let contentAvailable = true;
// duration:"",
// description:``,

module.exports = [
  {
    contentAvailable,
    name: "AWS Certified Cloud Practitioner",
    url: "/images/technical/aws.png",
    duration: "3 Days",
    description: `This course is for individuals who seek an overall understanding of the Amazon Web Services (AWS) Cloud, independent of specific technical roles. You will learn about AWS Cloud concepts, AWS services, security, architecture, pricing, and support to build your AWS Cloud knowledge. This course also helps you prepare for the AWS Certified Cloud Practitioner exam.`,
    modules: [
      new Module(" Introduction to Amazon Web Services", [
        "Summarize the benefits of AWS",
        "Describe differences between on-demand delivery and cloud deployments",
        "Summarize the pay-as-you-go pricing model"
      ]),
      new Module(" Compute in the Cloud", [
        "Describe the benefits of Amazon Elastic Compute Cloud (Amazon EC2) at a basic level",
        "Identify the different Amazon EC2 instance types",
        "Differentiate between the various billing options for Amazon EC2",
        "Describe the benefits of Amazon EC2 Auto Scaling",
        "Summarize the benefits of Elastic Load Balancing",
        "Give an example of the uses for Elastic Load Balancing",
        "Summarize the differences between Amazon Simple Notification Service (Amazon SNS) and Amazon Simple Queue Services (Amazon SQS)",
        "Summarize additional AWS compute options"
      ]),
      new Module(" Global Infrastructure and Reliability", [
        "Summarize the benefits of the AWS Global Infrastructure",
        "Describe the basic concept of Availability Zones",
        "Describe the benefits of Amazon CloudFront and Edge locations",
        "Compare different methods for provisioning AWS services"
      ]),
      new Module(" Networking", [
        "Describe the basic concepts of networking",
        "Describe the difference between public and private networking resources",
        "Explain a virtual private gateway using a real life scenario",
        "Explain a virtual private network (VPN) using a real life scenario",
        "Describe the benefit of AWS Direct Connect",
        "Describe the benefit of hybrid deployments",
        "Describe the layers of security used in an IT strategy",
        "Describe which services are used to interact with the AWS global network"
      ]),
      new Module(" Storage and Databases", [
        "Summarize the basic concept of storage and databases",
        "Describe benefits of Amazon Elastic Block Store (Amazon EBS)",
        "Describe benefits of Amazon Simple Storage Service (Amazon S3)",
        "Describe the benefits of Amazon Elastic File System (Amazon EFS)",
        "Summarize various storage solutions",
        "Describe the benefits of Amazon Relational Database Service (Amazon RDS)",
        "Describe the benefits of Amazon DynamoDB",
        "Summarize various database services"
      ]),
      new Module(" Security", [
        "Explain the benefits of the shared responsibility model",
        "Describe multi-factor authentication (MFA)",
        "Differentiate between the AWS Identity and Access Management (IAM) security levels",
        "Describe security policies at a basic level",
        "Explain the benefits of AWS Organizations",
        "Summarize the benefits of compliance with AWS",
        "Explain primary AWS security services at a basic level"
      ]),
      new Module(" Monitoring and Analytics", [
        "Summarize approaches to monitoring your AWS environment",
        "Describe the benefits of Amazon CloudWatch",
        "Describe the benefits of AWS CloudTrail",
        "Describe the benefits of AWS Trusted Advisor"
      ]),
      new Module(" Pricing and Support", [
        "Understand AWS pricing and support models",
        "Describe the AWS Free Tier",
        "Describe key benefits of AWS Organizations and consolidated billing",
        "Explain the benefits of AWS Budgets",
        "Explain the benefits of AWS Cost Explorer",
        "Explain the primary benefits of the AWS Pricing Calculator",
        "Distinguish between the various AWS Support Plans",
        "Describe the benefits of AWS Marketplace"
      ]),
      new Module(" Migration and Innovation", [
        "Understand migration and innovation in the AWS Cloud",
        "Summarize the AWS Cloud Adoption Framework (AWS CAF)",
        "Summarize six key factors of a cloud migration strategy",
        "Describe the benefits of various AWS data migration solutions, such as AWS Snowcone, AWS Snowball, and AWS Snowmobile",
        "Summarize the broad scope of innovative solutions that AWS offers",
        "Summarize the five pillars of the AWS Well-Architected Framework",
        "0 AWS Certified Cloud Practitioner Basics",
        "Determine resources for preparing for the AWS Certified Cloud Practitioner examination",
        "Describe benefits of becoming AWS Certified"
      ])
    ]
  },
  { name: "Google Cloud", url: "/images/technical/google-cloud.png" },
  {
    contentAvailable,
    name: "Citrix Virtual Apps and Desktops 7 Administration",
    duration: "5 Days",
    url: "/images/technical/citrix.png",
    description: `The CWS-215: Citrix Virtual Apps and Desktops 7 Administration On-Premises and in Citrix Cloud training and certification course will give you a detailed overview on the aspects of installing, configuring and managing a Citrix Virtual Apps and Desktops 7 environment. During the training you will also learn to deploy, install, configure, set-up profile management, configure policies, printing and basic security features for on-premises Virtual Apps and Desktop solution building, and then migrating to Citrix Cloud.
Course Contents `,
    modules: [
      new Module("   Architecture Overview", [
        " Introduction to Citrix Virtual Apps and Desktops",
        " Architecture Overview",
        " Features",
        " Hosting Platform Considerations",
        " Citrix Virtual Apps and Desktops Service",
        " Connection Flow Process Introduction"
      ]),
      new Module("   Deploy the Site", [
        " Pre-Deployment Considerations",
        " Citrix Licensing Setup",
        " Delivery Controller Setup",
        " Site Setup And Management",
        " Redundancy Considerations",
        "   The Apps and Desktops Images",
        " Consider Master Image Creation Methods",
        " Master Image Requirements"
      ]),
      new Module("   Provision and Deliver App and Desktop Resources", [
        " Machine Catalogs and Delivery Groups",
        " Provisioning Methods and Considerations",
        " Machine Creation Services (MCS) Deep Dive",
        " MCS Environment Considerations",
        " Resource Locations"
      ]),
      new Module("   Provide Access to App and Desktop Resources", [
        " Consider Workspace Experience versus StoreFront",
        " Workspace Experience User Authentication",
        " Workspace App",
        " Communication Flow"
      ]),
      new Module("   Manage the User Experience", [
        " Methods to Manage the User Experience",
        " Common User Experience Settings"
      ]),
      new Module("   Published App and Desktop Presentation and Management", [
        " Published App Properties",
        " Server OS Published App Optimizations",
        " Published App Presentation",
        " Application Groups",
        " Apps and Desktops Presentation"
      ]),
      new Module("   Manage Printing for User Sessions", [
        " Map Printers to the User Session",
        " Printer Drivers",
        " Print Environment Considerations"
      ]),
      new Module("   Citrix Profile Management", [
        " Introduction and Considerations",
        " Configure Citrix Profile Management"
      ]),
      new Module("Manage the Site", [
        " Delegated Administration",
        " Use PowerShell with Citrix Virtual Apps and Desktops",
        " Power Management Considerations"
      ]),
      new Module(
        "Citrix Virtual Apps and Desktops Basic Security Considerations",
        [
          " Citrix Admin Security Considerations",
          " XML Service Security Considerations",
          " Secure HDX External Traffic"
        ]
      ),
      new Module("Monitor the Site", [
        " Citrix Director Introduction",
        " Monitor and Interact with User Sessions",
        " Published Apps Analysis",
        " Monitor the Machines Running the VDA",
        " Site Specific Common Monitoring",
        " Alerts and Notifications",
        " Optimize Citrix Director Monitoring with Citrix ADM"
      ]),
      new Module(
        "Introduction to Supporting and Troubleshooting Citrix Virtual Apps and Desktops",
        [
          " Introduction to Supporting a Citrix Virtual Apps and Desktops Site",
          " Tools",
          " Proactive Administration Common Tasks"
        ]
      ),
      new Module("Migrate To Citrix Cloud", [
        " Migration Considerations",
        " Citrix Cloud Connector Deployment",
        " Citrix Virtual Apps and Desktops with an On-Premises Resource Location",
        " The Migration Process"
      ]),
      new Module("Citrix Analytics", [
        " Citrix Analytics Introduction",
        " Prepare to Use Citrix Analytics",
        " Types of Analytics"
      ])
    ]
  },
  {
    contentAvailable,
    name:
      "Moving to the Citrix Virtual Apps and Desktop Service on Citrix Cloud with Microsoft Azure",
    url: "/images/technical/citrix.png",
    description: `Enroll for the 5-day CXD-252 Moving to the Citrix Virtual Apps and Desktops Service on Citrix Cloud with Microsoft Azure certification training course from Peakware Academyaccredited by Citrix. In this course you will learn how to move from an on-premises environment into Citrix Cloud and learn to deploy resource locations onto Microsoft Azure and guides you through the architecture, communications, and management of Citrix Cloud and the Citrix Virtual Apps and Desktops Service and then migrate existing infrastructure and settings into Citrix Cloud.
Through a blend of hands-on labs and interactive lectures, you will learn necessary steps to understand, manage, and deliver successfully the move to Citrix Cloud and also learn to plan machine catalog and virtual machine design based in Microsoft’s public cloud and deploy those machines using Machine Creation Services. Learn to configure the access layer as a service within Citrix Cloud, as managed machines in your datacenter, or on the Azure platform.
After the training to earn the certification for CC-VAD-CC Pass the 1Y0-130: Citrix Virtual Apps and Desktops Service on Citrix Cloud certification assessment and for CC-VAD-MA Pass the 1Y0-150: Citrix Virtual Apps and Desktops Service Integration with Microsoft Azure certification assessment`,
    duration: "5 Days",
    modules: [
      new Module("Introduction to Citrix Cloud", [
        " What is Citrix Cloud",
        " Citrix Cloud Services",
        " Citrix Cloud Operation and Architecture",
        " Citrix Cloud Administration"
      ]),
      new Module("Citrix Cloud Connectors", [
        " Cloud Connector Architecture",
        " Installing and configuring Citrix Cloud Connectors",
        " Securing Citrix Cloud Connectors",
        " Citrix Cloud with Multiple Domains"
      ]),
      new Module(
        "Introduction to the Citrix Virtual Apps and Desktops Service",
        [
          " Citrix Virtual Apps and Desktops Deployment Models",
          " Citrix Virtual Apps and Desktops Service with On-Premises Resources",
          " Configuring the Citrix Virtual Apps and Desktops Service",
          " Delivering Apps and Desktop to End-Users Using On-Premises Resources with MCS"
        ]
      ),

      new Module("Managing the Citrix Virtual Apps and Desktops Service", [
        " Citrix Studio and Director",
        " Citrix Virtual Apps and Desktops Remote PowerShell SDK",
        " Managing Multiple Resource Locations",
        " Using PVS with the Citrix Virtual Apps and Desktops Services"
      ]),
      new Module("Providing Access in Citrix Cloud", [
        " Selecting Between Workspace Experience and On-premises StoreFront",
        " Consideration for Citrix ADC Gateway Locations",
        " User Authentication"
      ]),

      new Module("Operations and Support in Citrix Cloud", [
        " Citrix Smart Tools",
        " Cloud Connector Operations",
        " Monitoring your Environment"
      ]),

      new Module("Public Cloud Considerations", [
        " General Public Cloud Considerations",
        " Microsoft Azure as a Citrix Cloud Resource Location (Lecture only)",
        " Amazon Web Services as a Citrix Cloud Resource Location (Lecture only)"
      ]),

      new Module(
        "On-Premises Migration to the Citrix Virtual Apps and Desktops Service",
        [
          " Citrix Cloud Migration Options and Considerations",
          " Migrating Machine Catalogs and Delivery Groups",
          " Migrating Policies and Settings",
          " Considerations for Migrating to a Public Cloud"
        ]
      ),

      new Module("Citrix Virtual Apps and Desktops on Azure Overview", [
        " Defining IAAS",
        " Citrix Virtual Apps and Desktops Azure Deployment Models",
        " Azure Fundamentals Review",
        " Azure Management",
        " Azure Locations"
      ]),
      new Module(
        " Citrix Virtual Apps and Desktops Integration with Azure Active Directory",
        [
          " Active Directory Basics",
          " Active Directory Usage",
          " Connecting On-premises Active Directory to Azure",
          " Azure Role Based Access Control",
          " Azure Locations"
        ]
      ),
      new Module("Connecting to Microsoft Azure", [
        "  Azure Connectivity",
        "  Cloud Connectors in Azure",
        "  Creating Citrix Virtual Apps and Desktops Host Connections to Azure"
      ]),
      new Module(
        " Deploying Apps and Desktops using Machine Creation Services",
        [
          "  Master Image Preparation",
          "  Machine Creation Services in Azure",
          "  Considerations for Deploying onto Azure"
        ]
      ),

      new Module(" Providing Access to End Users", [
        "  StoreFront Locations",
        "  Citrix ADC Locations",
        "  Multiple Citrix Virtual Apps and Desktops Zones in Azure Regions"
      ]),
      new Module(" Maintaining Infrastructure and VDAs in Microsoft Azure", [
        "  Maintaining Infrastructure",
        "  Maintaining Resources",
        "  Power Management"
      ]),
      new Module(" Plan for a Successful POC", ["  Planning your next steps"])
    ]
  },
  {
    contentAvailable,
    name: "Manage Citrix Endpoint Management",
    url: "/images/technical/citrix.png",
    duration: "5 Days",
    description: `The Manage Citrix Endpoint Management training and certification course will give you a detailed overview of managing Citrix Endpoint Management, manage devices, apps, and users. During the training, you will learn to administer their Citrix Endpoint Management environment and support your end users, as well as working with applications and securing multiple endpoints.`,
    modules: [
      new Module(" Citrix Endpoint Management Architecture", [
        "Citrix Endpoint Management Prerequisites",
        "Citrix Endpoint Management Server",
        "Citrix Endpoint Management and Microsoft Intune",
        "Apple APNs and Google Firebase Cloud Messaging",
        "MDX Architecture and Features"
      ]),
      new Module("  Cloud Components", [
        "Cloud Component Overview",
        "Onboarding and Access",
        "Cloud Connector and Cloud Resource Locations",
        "Cloud Migration",
        "Cloud Updates and Features"
      ]),
      new Module(" Common Device Management Tasks", [
        "Administrative Console Overview",
        "Delivery Groups",
        "Device Policies"
      ]),
      new Module("  Device Enrollment", [
        "Enrollment Methods",
        "iOS Device Enrollment",
        "Android Device Enrollment",
        "Windows 10 Enrollment",
        "Other Devices"
      ]),

      new Module("  Managing Device Security", [
        "Security Policies",
        "Automated Actions",
        "Android for Work",
        "ActiveSync Filtering",
        "Shared Devices"
      ]),

      new Module("  Working with Apps", [
        "Application Integration",
        "Citrix Endpoint Management Productivity Apps",
        "Application Security with MDX",
        "3rd Part Applications"
      ]),

      new Module(" Integrating Citrix Content Collaboration", [
        "Citrix Content Collaboration Overview",
        "Integrating Citrix Endpoint Management with Content Collaboration",
        "Content Collaboration Workflows"
      ]),
      new Module(" Maintaining and Troubleshooting", [
        "Maintaining Citrix Endpoint Management",
        "Maintaining Certificates",
        "Troubleshooting Citrix Gateway (formerly NetScaler Gateway)",
        "Troubleshooting Tools for Citrix Productivity Apps",
        "Firewall Issues"
      ]),

      new Module("  Monitoring and Reporting", [
        "Monitoring and Reporting of Devices",
        "Monitoring and Reporting of Citrix Content Collaboration"
      ])
    ]
  },
  {
    contentAvailable,
    name: "Citrix Networking Assessment, Design, and Advanced Configuration ",
    url: "/images/technical/citrix.png",
    duration: "5 Days",
    description: `The CNS-420 Citrix Networking Assessment, Design, and Advanced Configuration training course is an expert level training course and will give a detailed overview of advanced networking and Citrix ADC concepts and configurations, multi-site and multi-tenant deployments, advanced authentication and load balancing, and automation and orchestration and advanced troubleshooting.`,
    modules: [
      new Module("   Networking Methodology and Assessment", [
        " Understanding the Citrix methodology",
        " Business Drivers and Requirementrs",
        " User Segmentation",
        " Application Assessmen",
        " Capabilities Assessment"
      ]),
      new Module("  Citrix Networking Deployment Architecture and Topology", [
        " Multi-Site Deployments",
        " Multi Tennant Infrastructure",
        " Cloud Deployments",
        " High Availability",
        " Citrix ADC Double-Hop Scenarios",
        " Secure Web Gateway"
      ]),
      new Module("  Advanced Authentication and Authorization", [
        " Authorization Policies",
        " Access Policies",
        " Advanced Authentication Options",
        " Multi-Factor Authentication",
        " nFactor Authentication",
        " AAA Session Management"
      ]),

      new Module("   Citrix ADC Security", [
        " Authorization",
        " Pre-authentication and Endpoint Analysis Scans",
        " Protection against Layer 4-7 Attacks",
        " Web App Firewall"
      ]),
      new Module("  Citrix Gateway Configuration Considerations", [
        " ICA Proxy Configuration",
        " VPN Access",
        " Clientless Access",
        " Split Tunneling",
        " RDP Proxy Deployment and Configuration"
      ]),
      new Module("   Advanced Load Distribution and Link Load balancing", [
        " Advanced Load Balancing",
        " Link Load Balancing",
        " Firewall Load Balancing",
        " Microsoft Exchange Load Balancing",
        " Advanced Global Server Load Balancing",
        " Global Server Load Balancing Persistence",
        " DNS, Policies, Expressions, Actions, and Views",
        " GSLB Monitoring and Considerations"
      ]),
      new Module(
        "   Application Delivery Management Automation and Orchestration",
        [
          " Application Delivery Management Outbound Traffic Dashboard",
          " Automation",
          " Orchestration",
          " Configuration Jobs",
          " Configuration Audit",
          " NITRO API",
          " StyleBooks (Net-new)"
        ]
      )
    ]
  },
  {
    contentAvailable,
    duration: "5 Days",
    name:
      "Moving to the Citrix Virtual Apps and Desktops Service on Citrix Cloud with Amazon Web Services",
    url: "/images/technical/citrix.png",
    description: `Enroll for the 5-day CXD-254: Moving to the Citrix Virtual Apps and Desktops Service on Citrix Cloud with Amazon Web Services certification training course from Koenig Solutions accredited by Citrix. This course is designed to explore the move from an on-premises environment into Citrix Cloud and learn to deploy resource locations onto Amazon Web Services and Learn the architecture, communications, and management of Citrix Cloud and the Citrix Virtual Apps and Desktops Service and then migrate existing infrastructure and settings into Citrix Cloud.
Through a blend of hands-on labs and interactive lectures, you will learn valuable leading practices for maintaining and managing your Citrix Virtual Apps and Desktops Service deployment, including deployments integrated with AWS, such as power management and the use of Autoscale. Together with the hands-on lab exercises, this course gives you the opportunity to create a successful Citrix Virtual Apps and Desktops Service deployment on AWS.
After the training to earn the certification for CC-VAD-CC Pass the 1Y0-130: Citrix Virtual Apps and Desktops Service on Citrix Cloud certification assessment and for CC-VAD-AWS Pass the 1Y0-160: Citrix Virtual Apps and Desktops Service on Amazon Web Services assessment`,
    modules: [
      new Module(" Introduction to Citrix Cloud", [
        " What is Citrix Cloud",
        " Citrix Cloud Services",
        " Citrix Cloud Operation and Architecture",
        " Citrix Cloud Administration"
      ]),

      new Module(" Citrix Cloud Connectors", [
        " Cloud Connector Architecture",
        " Installing and configuring Citrix Cloud Connectors",
        " Securing Citrix Cloud Connectors",
        " Citrix Cloud with Multiple Domains"
      ]),
      new Module(
        " Introduction to the Citrix Virtual Apps and Desktops Service",
        [
          " Citrix Virtual Apps and Desktops 7 Deployment Models",
          " Citrix Virtual Apps and Desktops 7 Service with",
          " On-Premises Resources",
          " Configuring the Citrix Virtual Apps and Desktops 7 Service",
          " Delivering Apps and Desktop to End-Users Using",
          " On-Premises Resources with MCS"
        ]
      ),

      new Module(" Managing the Citrix Virtual Apps and Desktops Service", [
        " Citrix Studio and Director",
        " Citrix Virtual Apps and Desktops 7 Remote",
        " PowerShell SDK",
        " Managing Multiple Resource Locations",
        " Using PVS with the Citrix Virtual Apps and",
        " Desktops 7 Services"
      ]),
      new Module(" Providing Access in Citrix Cloud", [
        " Selecting Between Workspace Experience and",
        " On-premises StoreFront",
        " Consideration for Citrix Gateway Locations",
        " User Authentication"
      ]),
      new Module("Operations and Support in", [
        " Citrix Cloud",
        " Citrix Smart Tools",
        " Cloud Connector Operations",
        " Monitoring your Environment"
      ]),
      new Module(" Public Cloud Considerations", [
        " General Public Cloud Considerations",
        " Microsoft Azure as a Citrix Cloud Resource Location",
        " (Lecture only)",
        " Amazon Web Services as a Citrix Cloud Resource Location",
        " (Lecture only)"
      ]),
      new Module(
        "On-Premises Migration to the Citrix Virtual Apps and Desktops Service",
        [
          " Citrix Cloud Migration Options and Considerations",
          " Migrating Machine Catalogs and Delivery Groups",
          " Migrating Policies and Settings",
          " Considerations for Migrating to a Public Cloud"
        ]
      ),
      new Module(" Deployment models and migration paths", [
        " CVAD Service on AWS and Cloud Computing",
        " Citrix Virtual Apps and Desktops Service on AWS Deployment Options",
        " Supported migration paths to a CVAD Service on AWS deployment"
      ]),
      new Module(
        " Components, Products and Services required for a CVAD Service on AWS",
        [
          " AWS products, components, and services",
          " Citrix components, products, and services",
          " Active Directory requirements and options",
          " Integration between CVAD Service and AWS Resource Locations",
          " Management consoles",
          " Control billing costs within an AWS Resource Location"
        ]
      ),
      new Module(" Creating Resource Locations on AWS", [
        " Set up a resource location in AWS",
        " Install Cloud Connectors",
        " Creating a Master image on AWS for use with MCS"
      ]),

      new Module("Connecting CVAD Service to AWS and MCS Provisioning", [
        " Host Connections Connecting CVAD Service to AWS Cloud",
        " Provisioning VMs in AWS using MCS"
      ]),
      new Module(" Providing Access to End Users", [
        " Workspace and StoreFront in CVAD Service Deployments",
        " Gateway Service vs Gateway on-premise",
        " Connectivity options for multi-location deployments"
      ]),
      new Module(" Maintaining a CVAD Service on AWS Deployment", [
        " Infrastructure maintenance requirements for Citrix Cloud and with AWS as a Best practices for maintaining AWSbased resource locations",
        " Power management options for VDAs in AWS-based resource locations"
      ]),
      new Module(" Supporting your Deployment", [
        " Citrix Self-Help Support Offerings",
        " Common deployment problem resolution examples"
      ])
    ]
  },
  {
    contentAvailable,
    duration: "5 Days",
    name: "Deploy and Manage Citrix ADC 13.x with Citrix Gateway",
    url: "/images/technical/citrix.png",
    description: `Enroll for the 5-days CNS-227: Deploy and Manage Citrix ADC 13.x with Citrix Gateway certification training course from Koenig solutions accredited by Citrix. This course covers Citrix ADC essentials, including secure load balancing, high availability and operations management, and also focuses on Citrix Gateway. You will learn to deliver secure remote access to apps and desktops integrating Citrix Virtual Apps and Citrix Desktops with Citrix Gateway.`,
    modules: [
      new Module(" Getting Started", [
        "Introduction to Citrix ADC",
        "Feature and Platform Overview",
        "Deployment Options",
        "Architectural Overview",
        "Setup and Management"
      ]),

      new Module("Basic Networking", [
        "Networking Topology",
        "Citrix ADC Components",
        "Routing",
        "Access Control Lists"
      ]),
      new Module("   ADC Platforms", [
        "Citrix ADC MPX",
        "Citrix ADC VPX",
        "Citrix ADC CPX",
        "Citrix ADC SDX",
        "Citrix ADC BLX"
      ]),
      new Module("  High Availability", [
        "Citrix ADC High Availability",
        "High Availability Configuration",
        "Managing High Availability",
        "In Service Software Upgrade",
        "Troubleshooting High Availability"
      ]),
      new Module("   Load balancing", [
        "Load Balancing Overview",
        "Load Balancing Methods and Monitors",
        "Load Balancing Traffic Types",
        "Load Balancing Protection",
        "Priority Load Balancing",
        "Load Balancing Troubleshooting"
      ]),
      new Module("   SSL Offloading", [
        "SSL Overview",
        "SSL Configuration",
        "SSL Offload",
        "Troubleshooting SSL Offload",
        "SSL Vulnerabilities and Protections"
      ]),

      new Module("   Security", [
        "Authentication, Authorization, and Auditing",
        "Configuring External Authentication",
        "Admin Partitions"
      ]),

      new Module("   Monitoring and Troubleshooting", [
        "Citrix ADC Logging",
        "Monitoring with SNMP",
        "Reporting and Diagnostics",
        "AppFlow Functions",
        "Citrix Application Delivery Management",
        "Troubleshooting"
      ]),

      new Module("   Citrix Gateway", [
        "Introduction to Citrix Gateway",
        "Advantages and Utilities of Citrix Gateway",
        "Citrix Gateway Configuration",
        "Common Deployments"
      ]),
      new Module("   AppExpert Expressions", [
        "Introduction to AppExpert Policies",
        "Default Policies",
        "Explore Citrix ADC Gateway Policies",
        "Policy Bind Points",
        "Using AppExpert with Citrix Gateway"
      ]),
      new Module("   Authentication, Authorization,", [
        "Authentication and Authorization",
        "Multi-Factor Authentication",
        "nFactor Visualizer",
        "SAML authentication"
      ]),
      new Module("  Managing Client Connections", [
        "Introduction to Client Connections",
        "Session Policies and Profiles",
        "Pre and Post Authentication Policies",
        "Citrix Gateway Deployment Options",
        "Managing User Sessions"
      ]),
      new Module("  Integration for Citrix Virtual Apps", [
        "Virtual Apps and Desktop Integration",
        "Citrix Gateway Integration",
        "Citrix Gateway WebFront",
        "ICA Proxy",
        "Clientless Access and Workspace App",
        "Access Fallback",
        "SmartControl and SmartAccess for ICA"
      ]),
      new Module("  Configuring Citrix Gateway", [
        "Working with Apps on Citrix Gateway",
        "RDP Proxy",
        "Portal Themes and EULA"
      ])
    ]
  },
  {
    contentAvailable,
    duration: "5 Days",
    name:
      "Citrix Virtual Apps and Desktops 7, App Layering, and WEM Administration (Fast-Track)",
    url: "/images/technical/citrix.png",
    description: `Enroll for 5-day CMB-318: Citrix Virtual Apps and Desktops 7, App Layering, and WEM Administration (Fast-Track) certification training course from Koenig Solutions accredited by Citrix. CMB-318: Citrix Virtual Apps and Desktops 7, App Layering, and WEM Administration (Fast-Track) course is designed for experienced IT professionals to build the foundational administration aspects of installing, configuring and managing a Citrix Virtual Apps and Desktops 7 environment.
Through a blend of hands-on labs and interactive lectures, you will be able to Gain an understanding of the solution architecture and communications, and the factors that contribute to a successful deployment. Monitoring and troubleshooting the environment with Citrix Director and Citrix Analytics is also incorporated in this course.`,
    modules: [
      new Module("   Architecture Overview", [
        "Introduction to Citrix Virtual Apps and Desktops",
        "Architecture Overview",
        "Features",
        "Hosting Platform Considerations",
        "Citrix Virtual Apps and Desktops Service",
        "Connection Flow Process Introduction"
      ]),
      new Module("   Deploy the Site", [
        "Pre-Deployment Considerations",
        "Citrix Licensing Setup",
        "Delivery Controller Setup",
        "Site Setup and Management",
        "Redundancy Considerations"
      ]),
      new Module("  The Apps and Desktops Images", [
        "Consider Master Image Creation Methods",
        "Master Image Requirements"
      ]),
      new Module("  Provision and Deliver App and Desktop Resources", [
        "Learning Objectives",
        "Machine Catalogs and Delivery Groups",
        "Provisioning Methods and Considerations",
        "Machine Creation Services (MCS) Deep Dive",
        "MCS Environment Considerations",
        "Resource Locations"
      ]),
      new Module("  Provide Access to App and Desktop Resources", [
        "Consider Workspace Experience versus StoreFront",
        "Workspace App"
      ]),
      new Module("  Manage the User Experience", [
        "Methods to Manage the User Experience"
      ]),
      new Module("  Published App and Desktop Presentation and Management", [
        "Published App Properties",
        "Server OS Published App Optimizations",
        "Published App Presentation",
        "Application Groups",
        "Apps and Desktops Presentation"
      ]),
      new Module("  Manage Printing for User Sessions", [
        "Map Printers to the User Session",
        "Printer Drivers",
        "Print Environment Considerations"
      ]),
      new Module("  Citrix Profile Management", [
        "Introduction and Considerations",
        "Configure Citrix Profile Management"
      ]),

      new Module("  Manage the Site", [
        "Delegated Administration",
        "Power Management Considerations"
      ]),

      new Module(
        "  Citrix Virtual Apps and Desktops Basic Security Considerations",
        [
          "Citrix Admin Security Considerations",
          "XML Service Security Considerations",
          "Secure HDX External Traffic"
        ]
      ),

      new Module("  Monitor the Site", [
        "Citrix Director Introduction",
        "Monitor and Interact with User Sessions",
        "Published Apps Analysis",
        "Monitor the Machines Running the VDA",
        "Alerts and Notifications"
      ]),
      new Module(
        "  Introduction to Supporting and Troubleshooting Citrix Virtual Apps and Desktops",
        [
          "Introduction to Supporting a Citrix Virtual Apps and Desktops Site",
          "Tools"
        ]
      ),
      new Module("  Migrate to Citrix Cloud", [
        "Migration Considerations",
        "Citrix Cloud Connector Deployment",
        "Citrix Virtual Apps and Desktops with an On-Premises Resource Location",
        "The Migration Process"
      ]),
      new Module("  Citrix Analytics", [
        "Citrix Analytics Introduction",
        "Types of Analytics"
      ]),
      new Module("  Introduction to App Layering", [
        "App Layering Introduction",
        "Architecture and How it Works"
      ]),
      new Module("  Create an OS Layer", ["The OS Layer"]),
      new Module("  Create a Platform Layer", ["The Platform Layer"]),
      new Module("  Create App Layers", ["The App Layers"]),
      new Module("  Create Elastic App and User Layers", [
        "Elastic App Layering",
        "User Layers"
      ]),
      new Module(
        "  Deploy a Layered Image using Citrix Virtual Apps and Desktops",
        [
          "Using Templates in App Layering",
          "Using Layered Images in a Citrix Virtual Apps and Desktops Site"
        ]
      ),
      new Module(
        "  Explore Layer Priority and Maintain an App Layering Environment",
        [
          "Layer Priority",
          "Updating Layers",
          "Maintaining and Updating the App Layering Environment",
          "Common App Layering Considerations and Additional Resources"
        ]
      ),
      new Module("  Introduction to Workspace Environment Management (WEM)", [
        "Workspace Environment Management (WEM) Introduction",
        "WEM Administration"
      ]),
      new Module("  Use WEM to Centralize Environment Management", [
        "Managing User Resources with WEM",
        "Managing Profiles with WEM",
        "Managing Endpoints with the WEM Transformer Feature"
      ]),
      new Module("  Use WEM for Performance Optimization", [
        "Learning Objectives",
        "Optimizing Machine Performance with WEM",
        "Optimizing User Experience with WEM"
      ]),
      new Module("  Use WEM to Secure Environment", [
        "Use WEM to Secure Environments",
        "WEM Security Features"
      ]),

      new Module("  Migrate and Upgrade WEM", [
        "Migrating to WEM",
        "Upgrading a WEM Deployment",
        "WEM Multi-Location Considerations"
      ])
    ]
  },
  {
    contentAvailable,
    duration: "3 Days",
    name: "Implement Citrix ADC 13.x",
    url: "/images/technical/citrix.png",
    description: `Enroll for the 3-days CNS-223: Implement Citrix ADC 13.x certification training course from Koenig solutions accredited by Citrix. In this course, you will learn the skills required to implement Citrix ADC Essential components including secure Load Balancing, High Availability, and Citrix ADC Management. At the end of the course, students will be able to configure their Citrix ADC environments to address traffic delivery and management requirements including Load Balancing, Availability, and ADC Operation Management.`,
    modules: [
      new Module("  Getting Started", [
        "Introduction to Citrix ADC",
        "Feature and Platform Overview",
        "Deployment Options",
        "Architectural Overview",
        "Setup and Management"
      ]),
      new Module("  Basic Networking", [
        "Networking Topology",
        "Citrix ADC Components",
        "Routing",
        "Access Control Lists"
      ]),
      new Module("  ADC Platforms", [
        "Citrix ADC MPX",
        "Citrix ADC VPX",
        "Citrix ADC CPX",
        "Citrix ADC SDX",
        "Citrix ADC BLX"
      ]),
      new Module("  High Availability", [
        "Citrix ADC High Availability",
        "High Availability Configuration",
        "Managing High Availability",
        "In Service Software Upgrade",
        "Troubleshooting High Availability"
      ]),
      new Module("  Load balancing", [
        "Load Balancing Overview",
        "Load Balancing Methods and Monitor",
        "Load Balancing Traffic Types",
        "Load Balancing Protection",
        "Priority Load Balancing",
        "Load Balancing Troubleshooting"
      ]),
      new Module("  SSL Offloading", [
        "SSL Overview",
        "SSL Configuration",
        "SSL Offload",
        "Troubleshooting SSL Offload",
        "SSL Vulnerabilities and Protections"
      ]),
      new Module("  Security", [
        "Authentication, Authorization, and Auditing",
        "Configuring External Authentication",
        "Admin Partitions"
      ]),
      new Module("  Monitoring and Troubleshooting", [
        "Citrix ADC Logging",
        "Monitoring with SNMP",
        "Reporting and Diagnostics",
        "AppFlow Functions",
        "Citrix Application Delivery Management",
        "Troubleshooting"
      ])
    ]
  },
  //   ------------------------------------------------------

  {
    name: "CompTIA Network+",
    url: "/images/technical/compTIA.png",
    contentAvailable,
    duration: "5 Days",
    description: `Enroll for 5-day CompTIA Network+ (N10-008) course from Koenig Solutions accredited by CompTIA.  In this course you will learn technical skills needed to securely establish, maintain and troubleshoot the essential networks that businesses rely on. The new CompTIA Network+ (N10-008) vendor-neutral networking certification prepares candidates to support networks on any platform. It provides the foundation you need to work on networks anytime and anywhere. This CompTIA N+ course provides the necessary foundation to individuals about networking before venturing out to get trained in vendor-specific solutions. CompTIA Network+ is the only certification that covers the specific skills that network engineers need. Check out the dates below for the CompTIA Network+ certification training to enrol and take your career to greater heights.
Here are some of the additions to the newest version of CompTIA Network+ (N10-008):
     Network architecture included for the first time, including software-defined networking, ensuring that candidates understand network integrations and the cutting-edge technologies being used in deployments.
     Emerging wireless standards and technologies are covered to allow business flexibility and maximum security when deploying networks.
     Because constant access to both internal networks and SaaS applications drives productivity, network performance monitoring and high availability are covered as separate objectives.
     Network security has been streamlined to focus on the critical aspects of hardening networks against malicious attacks and the secure execution of network deployments to protect against unintended data breaches.`,
    modules: [
      new Module(" Networking Fundamentals", [
        "Compare and contrast the Open Systems Interconnection (OSI) model layers and encapsulation concepts.",
        "Explain the characteristics of network topologies and network types.",
        "Summarize the types of cables and connectors and explain which is the appropriate type for a solution.",
        "Given a scenario, configure a subnet and use appropriate IP addressing schemes",
        "Explain common ports and protocols, their application, and encrypted alternatives.",
        "Explain the use and purpose of network services.",
        "Explain basic corporate and datacenter network architecture.",
        "Summarize cloud concepts and connectivity options"
      ]),
      new Module("  Network Implementations", [
        "Compare and contrast various devices, their features, and their appropriate placement on the network.",
        "Compare and contrast routing technologies and bandwidth management concepts.",
        "Given a scenario, configure and deploy common Ethernet switching features.",
        "Given a scenario, install and configure the appropriate wireless standards and technologies."
      ]),
      new Module("  Network Operations", [
        "Given a scenario, use the appropriate statistics and sensors to ensure network availability.",
        "Explain the purpose of organizational documents and policies.",
        "Explain high availability and disaster recovery concepts and summarize which is the best solution."
      ]),
      new Module("  Network Security", [
        "Explain common security concepts",
        "Compare and contrast common types of attacks.",
        "Given a scenario, apply network hardening techniques",
        "Compare and contrast remote access methods and security implications",
        "Explain the importance of physical security."
      ]),
      new Module("  Network Troubleshooting", [
        "Explain the network troubleshooting methodology",
        "Given a scenario, troubleshoot common cable connectivity issues and select the appropriate tools.",
        "Given a scenario, use the appropriate network software tools and commands",
        "Given a scenario, troubleshoot common wireless connectivity issues.",
        "Given a scenario, troubleshoot general networking issues."
      ])
    ]
  },
  {
    contentAvailable,
    name: "CompTIA Security+ Training",
    url: "/images/technical/compTIA.png",
    duration: "5 Days",
    description: `This latest version course expands the coverage of cybersecurity threats, risk management, and IoT threats. This CompTIA course prepares exam candidates for the first domain of the exam, Threats, Attacks, and Vulnerabilities. By learning about malware, networking and application security exploitations, and social engineering, participants will be prepared to answer questions from the exam and strengthen your own organization's systems and defenses`,
    modules: [
      new Module(" Attacks, Threats, and Vulnerabilities", [
        "Compare and contrast different types of social engineering techniques.",
        "Given a scenario, analyze potential indicators to determine the type of attack.",
        "Given a scenario, analyze potential indicators associated with application attacks.",
        "Given a scenario, analyze potential indicators associated with network attacks.",
        "Explain different threat actors, vectors, and intelligence sources.",
        "Explain the security concerns associated with various types of vulnerabilities.",
        "Summarize the techniques used in security assessments.",
        "Explain the techniques used in penetration testing."
      ]),
      new Module(" Architecture and Design", [
        "Explain the importance of security concepts in an enterprise environment.",
        "Summarize virtualization and cloud computing concepts.",
        "Summarize secure application development, deployment, and automation concepts.",
        "Summarize authentication and authorization design concepts.",
        "Given a scenario, implement cybersecurity resilience.",
        "Explain the security implications of embedded and specialized systems.",
        "Explain the importance of physical security controls.",
        "Summarize the basics of cryptographic concepts."
      ]),
      new Module(" Implementation", [
        "Given a scenario, implement secure protocols.",
        "Given a scenario, implement host or application security solutions",
        "Given a scenario, implement secure network designs.",
        "Given a scenario, install and configure wireless security settings.",
        "Given a scenario, implement secure mobile solutions.",
        "Given a scenario, apply cybersecurity solutions to the cloud.",
        "Given a scenario, implement identity and account management controls.",
        "Given a scenario, implement authentication and authorization solutions.",
        "Given a scenario, implement public key infrastructure."
      ]),
      new Module("  Operations and Incident Response", [
        "Given a scenario, use the appropriate tool to assess organizational security.",
        "Summarize the importance of policies, processes, and procedures for incident response.",
        "Given an incident, utilize appropriate data sources to support an investigation.",
        "Given an incident, apply mitigation techniques or controls to secure an environment.",
        "Explain the key aspects of digital forensics."
      ]),
      new Module("  Governance, Risk, and Compliance", [
        "Compare and contrast various types of controls.",
        "Explain the importance of applicable regulations, standards, or frameworks that impact organizational security posture.",
        "Explain the importance of policies to organizational security",
        "Summarize risk management processes and concepts.",
        "Explain privacy and sensitive data concepts in relation to security"
      ])
    ]
  },
  {
    contentAvailable,
    name: "CompTIA A+ Training ",
    url: "/images/technical/compTIA.png",
    duration: "5 Days",
    description: `The CompTIA A+ certification training course is created for all entry-level and aspiring IT professionals to validate their skills and knowledge in the IT domain. The certification course is made for learners to properly understand the hardware and software technologies that they will be working with so that they can support various IT infrastructures. Organizations often look for this certification as a marker and validation of the prospective employee’s skills. The certification has two examinations that candidates need to clear to become certified CompTIA A+ professionals.`,
    modules: [
      new Module("Mobile Devices", [
        "    Given a scenario, install and configure laptop hardware and components",
        "    Given a scenario, install components within the display of a laptop",
        "    Given a scenario, use appropriate laptop features",
        "    Compare and contrast characteristics of various types of other mobile devices",
        "    Given a scenario, connect and configure accessories and ports of other mobile devices",
        "    Given a scenario, configure basic mobile device network connectivity and application support",
        "    Given a scenario, use methods to perform mobile device synchronization"
      ]),
      new Module("Networking", [
        "    Compare and contrast TCP and UDP ports, protocols, and their purpose",
        "    Compare and contrast common networking hardware devices",
        "    Given a scenario, install and configure a basic wired/wireless SOHO network",
        "    Compare and contrast wireless networking protocols",
        "    Summarize the properties and purposes of services provided by networked hosts",
        "    Explain common network configuration concepts",
        "    Compare and contrast Internet connection types, network types, and their features",
        "    Given a scenario, use appropriate networking tools"
      ]),
      new Module("Hardware", [
        "    Explain basic cable types, features, and their purposes",
        "    Identify common connector types",
        "    Given a scenario, install RAM types",
        "    Given a scenario, select, install and configure storage devices",
        "    Given a scenario, install and configure motherboards, CPUs, and add-on cards",
        "    Explain the purposes and uses of various peripheral types",
        "    Summarize power supply types and features",
        "    Given a scenario, select and configure appropriate components for a custom PC configuration to meet customer specifications or needs",
        "    Given a scenario, install and configure common devices",
        "    Given a scenario, configure SOHO multifunction devices/printers and settings",
        "    Given a scenario, install and maintain various print technologies"
      ]),
      new Module("Virtualization and Cloud Computing", [
        "    Compare and contrast cloud computing concepts",
        "    Given a scenario, set up and configure client-side virtualization"
      ]),
      new Module("Hardware and Network Troubleshooting", [
        "    Given a scenario, use the best practice methodology to resolve problems",
        "    Given a scenario, troubleshoot problems related to motherboards, RAM, CPUs, and power",
        "    Given a scenario, troubleshoot hard drives and RAID arrays",
        "    Given a scenario, troubleshoot video, projector, and display issues",
        "    Given a scenario, troubleshoot common mobile device issues while adhering to the appropriate procedures",
        "    Given a scenario, troubleshoot printers",
        "    Given a scenario, troubleshoot common wired and wireless network problems"
      ]),
      new Module(" Operating Systems", [
        "    Compare and contrast common operating system types and their purposes"
      ])
    ]
  },
  {
    contentAvailable,
    name: "CompTIA IT Fundamentals+",
    url: "/images/technical/compTIA.png",
    duration: "5 Days",
    description: `CompTIA IT Fundamentals certification is designed to help you to become in the world of information technology (IT). It helps to decide if a career in IT is right for them or to build up a more extensive understanding of IT. CompTIA IT Fundamentals likewise be a venturing stone to further developed certifications such as CompTIA A+, and, with particular experience, CompTIA Network+ and CompTIA Security+.`,
    modules: [
      new Module("Using Computers", [
        "    Computing Devices",
        "    Information Technology",
        "    Personal Computers (PC)",
        "    Mobile and IoT Devices",
        "    Workstation",
        "    Setting up a PC System",
        "    Ergonomic Concepts",
        "    Navigating an OS",
        "    Using Input Devices",
        "    Icons and Windows",
        "    Functions of an Operating System",
        "    Types of Operating System",
        "    Virtualization",
        "    Microsoft Windows",
        "    Apple macOS and iOS",
        "    Linux, Chrome, and Android",
        "    File Explorer",
        "    Windows Settings and Control Panel",
        "    Using a Web Browser",
        "    Management Interfaces",
        "    Process and Service Management",
        "    Memory and Disk Management",
        "    Command Line Interfaces",
        "    Access Control and Protection",
        "    Support and Troubleshooting",
        "    Identifying the Problem",
        "    Understanding the Problem",
        "    Resolving and Documenting the Problem",
        "    Developing a Troubleshooting Approach",
        "    Troubleshooting PC Issues",
        "    Getting Support",
        "    Using a Search Engine"
      ]),

      new Module("Using Apps and Databases", [
        "    Notational Systems",
        "    Units of Measure",
        "    Data Types",
        "    Data Representation",
        "    The Value of Data",
        "    Intellectual Property",
        "    Data-driven Business Decisions",
        "    Installing Applications",
        "    Application Management",
        "    Managing Software Licensing",
        "    Productivity Software",
        "    Collaboration Software",
        "    Business Software",
        "    Programming Logic",
        "    Programming Languages",
        "    Programming Concepts",
        "    Object-Oriented Programming",
        "    Scripting Languages",
        "    Application Platforms and Delivery",
        "    Database Concepts",
        "    Database Structures",
        "    Relational Methods",
        "    Database Access Methods",
        "    Application Architecture Models"
      ]),

      new Module("Using Computer Hardware", [
        "    Selecting a Computer",
        "    Motherboard Components",
        "    Processors",
        "    Features of Processors",
        "    Expansion Bus",
        "    System Cooling",
        "    BIOS and UEFI System Firmware",
        "    Computer Connector Types",
        "    USB and Firewire",
        "    Graphic Devices",
        "    Graphic Device Interfaces",
        "    Input Devices",
        "    Configuring Peripherals",
        "    Bluetooth and NFC",
        "    Networking Interfaces",
        "    Installing and Uninstalling",
        "    Peripherals",
        "    Display Devices",
        "    Display Settings",
        "    Multimedia Ports and Devices",
        "    Printer Types",
        "    Installing and Configuring a Printer",
        "    Scanners and Cameras",
        "    System Memory",
        "    Mass Storage Devices",
        "    Optical Discs and Drives",
        "    Flash Memory Devices",
        "    Managing the File System",
        "    Folders and Directories",
        "    File Explorer",
        "    Files",
        "    File Attributes and Permissions",
        "    Searching for Folders and Files",
        "    File Types and Extensions"
      ]),

      new Module("Using Networks", [
        "    Network Components",
        "    TCP/IP",
        "    Internet Protocol",
        "    Address Resolution Protocol",
        "    DNS and URLs",
        "    Internet Application Services",
        "    Internet Service Types",
        "    Wireless Internet Services",
        "    Setting Up a Wireless Network",
        "    Configuring a Wireless Client",
        "    Safe Browsing Practices",
        "    Configuring Browser Security",
        "    Managing Cookies and PII",
        "    Digital Certificates and Antiphishing",
        "    Enabling a Firewall",
        "    Local Sharing and Storage",
        "    Windows File Sharing",
        "    Hosted Sharing and Storage Backups",
        "    Windows Backup",
        "    Using a Mobile Device",
        "    Mobile Applications and App Stores",
        "    Network Connectivity",
        "    Email Configuration",
        "    Synchronization and Data Transfer"
      ]),

      new Module("Security Concepts", [
        "    Computer Security Basics",
        "    Social Engineering",
        "    Business Continuity",
        "    Disaster Recovery",
        "    Securing Devices Malware",
        "    Preventing Malware Infections Spam",
        "    Software Sources and Patch Management",
        "    Access Controls",
        "    User Account Types",
        "    Authentication Factors",
        "    Uses of Encryption",
        "    Password Cracking and Management",
        "    Policies and Procedures",
        "    Handling Confidential Information",
        "    Acceptable Use Policies",
        "    Expectations of Privacy",
        "    Taking the Exam",
        "    Career Advice",
        "    Glossary"
      ])
    ]
  },
  {
    contentAvailable,
    name: "CompTIA CASP+ Training ",
    url: "/images/technical/compTIA.png",
    duration: "5 Days",
    description: `Enroll for 5-day CompTIA Advanced Security Practitioner (CASP+) (CAS-004) course from Koenig Solutions accredited by CompTIA. The CompTIA Advanced Security Practitioner (CASP+) certification is an international, vendor-neutral exam that proves competency in enterprise security; risk management; research and analysis; and integration of computing, communications, and business disciplines. The exam covers the technical knowledge and skills required to conceptualize, design, and engineer secure solutions across complex enterprise environments.
 In this course, you will learn how to implement solutions within cybersecurity policies and frameworks & assess cyber readiness within an enterprise, and design and implement the proper solutions to ensure the organization is ready for the next attack. The CompTIA Advanced Security Practitioner (CASP+) certification was accredited by the International Organization for Standardization (ISO) and the American National Standards Institute (ANSI).
This course supports a certification that is a DoD Approved 8570 Baseline Certification and meets DoD 8570 training requirements`,
    modules: []
  },
  {
    contentAvailable,
    name: "CompTIA CySA+ Training ",
    url: "/images/technical/compTIA.png",
    duration: "5 Days",
    description: `The CompTIA CySA+ exam is an internationally targeted validation of intermediate-level security skills and knowledge. While there is no required prerequisite, the CompTIA CySA+ certification is intended to follow CompTIA Security+ or equivalent experience and has a technical, “hands-on” focus on IT security analytics. The CompTIA CySA+ examination is designed for IT security analysts, vulnerability analysts,or threat intelligence analysts. The exam will certify that the successful candidate has the knowledge and skills required to configure and use threat detection tools, perform data analysis and interpret the results to identify vulnerabilities, threats, and risks to an organization with theend goal of securing and protecting applications and systems within an organization.
This course supports a certification that is a DoD Approved 8570 Baseline Certification and meets DoD 8570 training requirements`,
    modules: [
      new Module("Threat Management 1", [
        "    Cybersecurity Analysts",
        "    Cybersecurity Roles and Responsibilities",
        "    Frameworks and Security Controls",
        "    Risk Evaluation",
        "    Penetration Testing Processes",
        "    Reconnaissance Techniques",
        "    The Kill Chain",
        "    Open Source Intelligence",
        "    Social Engineering",
        "    Topology Discovery",
        "    Service Discovery",
        "    OS Fingerprinting"
      ]),
      new Module("Threat Management 2", [
        "    Security Appliances",
        "    Configuring Firewalls",
        "    Intrusion Detection and Prevention",
        "    Configuring IDS",
        "    Malware Threats",
        "    Configuring Anti-virus Software",
        "    Sysinternals",
        "    Enhanced Mitigation Experience Toolkit",
        "    Logging and Analysis",
        "    Packet Capture",
        "    Packet Capture Tools",
        "    Monitoring Tools",
        "    Log Review and SIEM",
        "    SIEM Data Outputs",
        "    SIEM Data Analysis",
        "    Point-in-Time Data Analysis"
      ]),
      new Module("Vulnerability Management", [
        "    Managing Vulnerabilities",
        "    Vulnerability Management Requirements",
        "    Asset Inventory",
        "    Data Classification",
        "    Vulnerability Management Processes",
        "    Vulnerability Scanners",
        "    Microsoft Baseline Security Analyzer",
        "    Vulnerability Feeds and SCAP",
        "    Configuring Vulnerability Scans",
        "    Vulnerability Scanning Criteria",
        "    Exploit Frameworks",
        "    Remediating Vulnerabilities",
        "    Remediation and Change Control",
        "    Remediating Host Vulnerabilities",
        "    Remediating Network Vulnerabilities",
        "    Remediating Virtual Infrastructure Vulnerabilities",
        "    Secure Software Development",
        "    Software Development Lifecycle",
        "    Software Vulnerabilities",
        "    Software Security Testing",
        "    Interception Proxies",
        "    Web Application Firewalls",
        "    Source Authenticity",
        "    Reverse Engineering"
      ]),
      new Module("Cyber Incident Response", [
        "    Incident Response",
        "    Incident Response Processes",
        "    Threat Classification",
        "    Incident Severity and Prioritization",
        "    Types of Data",
        "    Forensics Tools",
        "    Digital Forensics Investigations",
        "    Documentation and Forms",
        "    Digital Forensics Crime Scene",
        "    Digital Forensics Kits",
        "    Image Acquisition",
        "    Password Cracking",
        "    Analysis Utilities",
        "    Incident Analysis and Recovery",
        "    Analysis and Recovery Frameworks",
        "    Analyzing Network Symptoms",
        "    Analyzing Host Symptoms",
        "    Analyzing Data Exfiltration",
        "    Analyzing Application Symptoms",
        "    Using Sysinternals",
        "    Containment Techniques",
        "    Eradication Techniques",
        "    Validation Techniques",
        "    Corrective Actions"
      ]),
      new Module("Security Architecture", [
        "    Secure Network Design",
        "    Network Segmentation",
        "    Blackholes, Sinkholes, and Honeypots",
        "    System Hardening",
        "    Group Policies and MAC",
        "    Endpoint Security",
        "    Managing Identities and Access",
        "    Network Access Control",
        "    Identity Management",
        "    Identity Security Issues",
        "    Identity Repositories",
        "    Context-based Authentication",
        "    Single Sign On and Federations",
        "    Exploiting Identities",
        "    Exploiting Web Browsers and Applications",
        "    Security Frameworks and Policies",
        "    Frameworks and Compliance",
        "    Reviewing Security Architecture",
        "    Procedures and Compensating Controls",
        "    Verifications and Quality Control",
        "    Security Policies and Procedures",
        "    Personnel Policies and Training"
      ])
    ]
  },
  {
    contentAvailable,
    name: "CompTIA PenTest+ Training ",
    url: "/images/technical/compTIA.png",
    duration: "5 Days",
    description: `Enroll for 5-day CompTIA Pentest+ (PT0-002) course from Koenig Solutions accredited by CompTIA.  In this course you will learn latest pen testing techniques, attack surfaces, vulnerability management, post-delivery and compliance tasks. The CompTIA PenTest+ certification is a vendor-neutral, internationally targeted validation of intermediate-level penetration testing (or pen testing) knowledge and skills.
The skills covered by CompTIA PenTest+ help companies comply with regulations, such as PCI-DSS and NIST 800-53 Risk Management Framework (RMF), which require pen tests, vulnerability assessments and reports. CompTIA PenTest+ is approved under the Department of Defense (DoD) Directive 8140/8570.01-M and under ANSI/ISO standard 17024.

`,
    modules: [
      new Module(
        "The new CompTIA PenTest+ (PT0-002) focuses on the most up to date and current skills needed for the following tasks:",
        [
          "Planning and scoping a penetration testing engagement",
          "Understanding legal and compliance requirements",
          "Performing vulnerability scanning and penetration testing using appropriate tools and techniques, and then analyzing the results",
          "Producing a written report containing proposed remediation techniques, effectively communicating results to the management team and providing practical recommendations"
        ]
      )
    ]
  },
  {
    contentAvailable,
    name: "CompTIA Server+ Training",
    url: "/images/technical/compTIA.png",
    duration: "5 Days",
    description: `Enroll for 5-day CompTIA Server+ (SK0-005) training course from Koenig Solutions accredited by CompTIA).  This Course validates the expertise of IT Professionals and Server Administrators in data centres or server environments. This is the only industry certification that features the newest server technologies such as network-attached storage, security and virtualization.`,
    modules: [
      new Module(" Server Hardware Installation and Management", [
        "Given a scenario, install physical hardware.",
        "Given a scenario, deploy and manage storage.",
        "Given a scenario, perform server hardware maintenance."
      ]),
      new Module(" Server Administration", [
        "Given a scenario, install server operating systems.",
        "Given a scenario, configure servers to use network infrastructure services.",
        "Given a scenario, configure and maintain server functions and features.",
        "Explain the key concepts of high availability for servers.",
        "Summarize the purpose and operation of virtualization.",
        "Summarize scripting basics for server administration.",
        "Explain the importance of asset management and documentation.",
        "Explain licensing concepts."
      ]),
      new Module(" Security and Disaster Recovery", [
        "Summarize data security concepts.",
        "Summarize physical security concepts.",
        "Explain important concepts pertaining to identity and access management for server administration.",
        "Explain data security risks and mitigation strategies.",
        "Given a scenario, apply server hardening methods.",
        "Summarize proper server decommissioning concepts.",
        "Explain the importance of backups and restores.",
        "Explain the importance of disaster recovery."
      ]),
      new Module(" Troubleshooting", [
        "Explain the troubleshooting theory and methodology.",
        "Given a scenario, troubleshoot common hardware failures.",
        "Given a scenario, troubleshoot storage problems.",
        "Given a scenario, troubleshoot common OS and software problems.",
        "Given a scenario, troubleshoot network connectivity issues.",
        "Given a scenario, troubleshoot security problems."
      ])
    ]
  },
  {
    contentAvailable,
    name: "CompTIA",
    url: "/images/technical/compTIA.png",
    duration: "",
    description: ``,
    modules: [
      new Module("Threat Management 1", [
        "    Cybersecurity Analysts",
        "    Cybersecurity Roles and Responsibilities",
        "    Frameworks and Security Controls",
        "    Risk Evaluation",
        "    Penetration Testing Processes",
        "    Reconnaissance Techniques",
        "    The Kill Chain",
        "    Open Source Intelligence",
        "    Social Engineering",
        "    Topology Discovery",
        "    Service Discovery",
        "    OS Fingerprinting"
      ]),
      new Module("Threat Management 2", [
        "    Security Appliances",
        "    Configuring Firewalls",
        "    Intrusion Detection and Prevention",
        "    Configuring IDS",
        "    Malware Threats",
        "    Configuring Anti-virus Software",
        "    Sysinternals",
        "    Enhanced Mitigation Experience Toolkit",
        "    Logging and Analysis",
        "    Packet Capture",
        "    Packet Capture Tools",
        "    Monitoring Tools",
        "    Log Review and SIEM",
        "    SIEM Data Outputs",
        "    SIEM Data Analysis",
        "    Point-in-Time Data Analysis"
      ]),
      new Module("Vulnerability Management", [
        "    Managing Vulnerabilities",
        "    Vulnerability Management Requirements",
        "    Asset Inventory",
        "    Data Classification",
        "    Vulnerability Management Processes",
        "    Vulnerability Scanners",
        "    Microsoft Baseline Security Analyzer",
        "    Vulnerability Feeds and SCAP",
        "    Configuring Vulnerability Scans",
        "    Vulnerability Scanning Criteria",
        "    Exploit Frameworks",
        "    Remediating Vulnerabilities",
        "    Remediation and Change Control",
        "    Remediating Host Vulnerabilities",
        "    Remediating Network Vulnerabilities",
        "    Remediating Virtual Infrastructure Vulnerabilities",
        "    Secure Software Development",
        "    Software Development Lifecycle",
        "    Software Vulnerabilities",
        "    Software Security Testing",
        "    Interception Proxies",
        "    Web Application Firewalls",
        "    Source Authenticity",
        "    Reverse Engineering"
      ]),
      new Module("Cyber Incident Response", [
        "    Incident Response",
        "    Incident Response Processes",
        "    Threat Classification",
        "    Incident Severity and Prioritization",
        "    Types of Data",
        "    Forensics Tools",
        "    Digital Forensics Investigations",
        "    Documentation and Forms",
        "    Digital Forensics Crime Scene",
        "    Digital Forensics Kits",
        "    Image Acquisition",
        "    Password Cracking",
        "    Analysis Utilities",
        "    Incident Analysis and Recovery",
        "    Analysis and Recovery Frameworks",
        "    Analyzing Network Symptoms",
        "    Analyzing Host Symptoms",
        "    Analyzing Data Exfiltration",
        "    Analyzing Application Symptoms",
        "    Using Sysinternals",
        "    Containment Techniques",
        "    Eradication Techniques",
        "    Validation Techniques",
        "    Corrective Actions"
      ]),
      new Module("Security Architecture", [
        "    Secure Network Design",
        "    Network Segmentation",
        "    Blackholes, Sinkholes, and Honeypots",
        "    System Hardening",
        "    Group Policies and MAC",
        "    Endpoint Security",
        "    Managing Identities and Access",
        "    Network Access Control",
        "    Identity Management",
        "    Identity Security Issues",
        "    Identity Repositories",
        "    Context-based Authentication",
        "    Single Sign On and Federations",
        "    Exploiting Identities",
        "    Exploiting Web Browsers and Applications",
        "    Security Frameworks and Policies",
        "    Frameworks and Compliance",
        "    Reviewing Security Architecture",
        "    Procedures and Compensating Controls",
        "    Verifications and Quality Control",
        "    Security Policies and Procedures",
        "    Personnel Policies and Training"
      ])
    ]
  },

  //   ------------------------------------------------------
  {
    contentAvailable,
    name: "IBM Cognos BI Administration (V10.2)",
    url: "/images/technical/ibm.png",
    description: `Learn how to Identify IBM Cognos BI Architecture.
Learn how to Secure the IBM Cognos BI Environment.
Learn how to Manage Content in IBM Cognos Administration.`,
    duration: "5 Days",
    modules: [
      new Module("Introduction to IBM Cognos BI Administration", [
        "Describe the role of the Administrator in relation to the IBM Cognos BI administration workflow process.",
        "Describe the role of IBM Cognos Administration and IBM Cognos Configuration user interface components"
      ]),
      new Module("Identify IBM Cognos BI Architecture", [
        "Identify features of the IBM Cognos BI architecture",
        "Examine Cognos BI servlets and services",
        "Identify an example of Cognos BI request processing",
        "Performance planning and installation options and configurations",
        "Examine the Cognos Application Firewall",
        "Perform a distributed installation and configuration of IBM Cognos BI"
      ]),
      new Module("Secure the IBM Cognos BI Environment", [
        "Identify the IBM Cognos BI security model",
        "Define authentication and authorization in IBM Cognos BI.",
        "Identify security policies",
        "Secure administrative capabilities (access to functionality)",
        "Specify security settings after installation.",
        "Implement security in IBM Cognos Framework Manager and IBM Cognos Transformer"
      ]),
      new Module("Administer the IBM Cognos BI Server Environment", [
        "Overview of administrative tasks that can be performed in IBM Cognos Administration",
        "Monitor system metrics",
        "Manage dispatchers and services",
        "Tune server performance",
        "Audit IBM Cognos BI",
        "Identify issues while troubleshooting the server environment",
        "Formulate the IBM Cognos BI backup strategy"
      ]),
      new Module("Manage Run Activities", [
        "Manage current, past, and upcoming run activities",
        "Manage schedules"
      ]),
      new Module("Manage Content in IBM Cognos Administration", [
        "Add and manage a data source",
        "Distribute data and create a distribution list and contacts",
        "Deploy IBM Cognos BI content",
        "Maintain the IBM Cognos BI content store",
        "Customize the appearance of IBM Cognos BI"
      ]),
      new Module("Drill-Through Definitions", [
        "Enable users to navigate to related data in IBM Cognos BI",
        "Parameter-driven drill through vs. dynamic drill through",
        "Steps to enable drill-through access for a package",
        "Limit the items that users can drill through from (set scope)",
        "Set a measure as the scope",
        "Drill Through Assistant"
      ]),
      new Module(
        "Additional Configuration and Customization of the Environment",
        [
          "Manage user profiles",
          "Add objects to the toolbox tab",
          "Create a custom template option",
          "Manage packages in IBM Cognos Connection"
        ]
      ),
      new Module("End-to-End Workshop", [
        "Create Roles",
        "Add members and define access permissions",
        "Set capabilities",
        "Create folders",
        "Define access to entries",
        "Create an export",
        "Create an import"
      ]),
      new Module("Optional Topics", [
        "IBM Cognos Map Manager (Optional)",
        "Overview of IBM Cognos BI (Optional)",
        "IBM Cognos BI for Consumers (Optional)"
      ])
    ]
  },
  {
    contentAvailable,
    name: "IBM I2 IBase Designer",
    description: `     Create and administer an i2 iBase database.
     Import and export data into an iBase database
     Create fields, datasheets, and code lists`,
    duration: "5 Days",
    url: "/images/technical/ibm.png",
    modules: [
      new Module("The course covers the following topics:", [
        "Learn the basic design process.",
        "Learn to create an iBase database",
        "Create record types",
        "Create fields, datasheets, and code lists.",
        "Learn how to import and export data.",
        "Learn how to upsize and manage a SQL database through iBase",
        "Learn how to set-up SQL functionality",
        "Learn how to generate reports.",
        "Learn how to manage the security of the database.",
        "Learn how to schedule a data import",
        "Learn how to administer and audit the database"
      ])
    ]
  },
  {
    contentAvailable,
    name: "IBM Tealeaf Implementation",
    description: `
     Describe the building of reports to monitor issues and key metrics.
     Relate to the maturity model of IBM Tealeaf.
     Identify the common uses for IBM Tealeaf and their benefits.
`,
    duration: "5 Days",
    url: "/images/technical/ibm.png",
    modules: [
      new Module("The course covers the following topics:", [
        "Course Overview",
        "Unit 1: Introduction to IBM Tealeaf Customer Experience",
        "Unit 2: Find and Replay Customer Sessions",
        "Unit 3: Monitor Customer Experience",
        "Unit 4: Putting IBM Tealeaf Customer Experience into Action",
        "Course Wrap Up"
      ])
    ]
  },
  {
    contentAvailable,
    name: "IBM I2 IBase Essentials",
    description: `
     Learn How to create queries.
     Learn How to use Search 360.
     Learn How to search and browse the database.
`,
    duration: "5 Days",
    url: "/images/technical/ibm.png",
    modules: [
      new Module("The course covers the following topics:", [
        "How to search and browse the database",
        "The ability to populate an iBase database manually (add, edit and delete records)",
        "How to create queries",
        "How to use Search 360",
        "How to visualize data and produce charts in Analyst's Notebook through iBase",
        "How to export data out of iBase"
      ])
    ]
  },
  {
    contentAvailable,
    name: "IBM I2 IBase Essentials",
    description: `
     Learn How to create queries.
     Learn How to use Search 360.
     Learn How to search and browse the database.
`,
    duration: "5 Days",
    url: "/images/technical/ibm.png",
    modules: [
      new Module("The course covers the following topics:", [
        "How to search and browse the database",
        "The ability to populate an iBase database manually (add, edit and delete records)",
        "How to create queries",
        "How to use Search 360",
        "How to visualize data and produce charts in Analyst's Notebook through iBase",
        "How to export data out of iBase"
      ])
    ]
  },
  {
    contentAvailable,
    name: "VMware vSphere: Install, Configure, Manage [V7]",
    description: `
This five-day course features intensive hands-on training that focuses on installing, configuring, and managing VMware vSphere 7, which includes VMware ESXi 7 and VMware vCenter Server 7. This course prepares you to administer a vSphere infrastructure for an organization of any size.
This course is the foundation for most of the other VMware technologies in the software-defined data center.
`,
    duration: "5 Days",
    url: "/images/technical/vmware-workstation-logo.jpeg",
    modules: [
      new Module("Course Introduction", [
        "Introductions and course logistics",
        "Course objectives"
      ]),
      new Module(
        "Introduction to vSphere and the Software-Defined Data Center",
        [
          "Explain basic virtualization concepts",
          "Describe how vSphere fits into the software-defined data center and the cloud infrastructure",
          "Explain how vSphere interacts with CPUs, memory, networks, and storage",
          "Recognize the user interfaces for accessing the vCenter Server system and ESXi hosts",
          "Use VMware Host Client to access and manage ESXi host"
        ]
      ),
      new Module("Virtual Machines", [
        "Create and remove a virtual machine",
        "Provision a virtual machine with virtual devices",
        "Identify the files that make up a virtual machine",
        "Explain the importance of VMware Tools"
      ]),
      new Module("vCenter Server", [
        "Describe the vCenter Server architecture",
        "Discuss how ESXi hosts communicate with vCenter Server",
        "Deploy and configure vCenter Server Appliance",
        "Use the vSphere Client to manage the vCenter Server inventory",
        "Add data center, organizational objects, and hosts to vCenter Server",
        "Use roles and permissions to enable users to access objects in the vCenter Server inventory",
        "Back up vCenter Server Appliance",
        "Monitor vCenter Server tasks, events, and appliance health",
        "Use vCenter Server High Availability to protect a vCenter Server Appliance"
      ]),
      new Module("Configuring and Managing Virtual Networks", [
        "Create and manage standard switches",
        "Describe the virtual switch connection types",
        "Configure virtual switch security, traffic-shaping and load-balancing policies",
        "Compare vSphere distributed switches and standard switches"
      ]),
      new Module("Configuring and Managing Virtual Storage", [
        "Identify storage protocols and storage device types",
        "Discuss ESXi hosts using iSCSI, NFS, and Fibre Channel storage",
        "Create and manage VMFS and NFS datastores",
        "Explain how multipathing works with iSCSI, NFS, and Fibre Channel storage",
        "Deploy virtual machines on a VMware vSAN datastore"
      ]),
      new Module("Virtual Machine Management", [
        "Use templates and cloning to deploy new virtual machines",
        "Modify and manage virtual machines",
        "Create a content library and deploy virtual machines from templates in the library",
        "Dynamically increase the size of a virtual disk",
        "Use customization specification files to customize a new virtual machine",
        "Perform vSphere vMotion and vSphere Storage vMotion migrations",
        "Create and manage virtual machine snapshots",
        "Examine the features and functions of VMware vSphere Replication"
      ]),
      new Module("Resource Management and Monitoring", [
        "Discuss CPU and memory concepts in a virtualized environment",
        "Describe what overcommitment of a resource means",
        "Describe methods for optimizing CPU and memory usage",
        "Use various tools to monitor resource use",
        "Create and use alarms to report certain conditions or events"
      ]),
      new Module("vSphere Cluster", [
        "Describe options for making a vSphere environment highly available",
        "Explain the vSphere HA architecture",
        "Configure and manage a vSphere HA cluster",
        "Examine the features and functions of VMware vSphere Fault Tolerance",
        "Configure a vSphere cluster using ESXi Cluster Quickstart",
        "Describe the functions of a vSphere DRS cluster",
        "Create a vSphere DRS cluster"
      ]),
      new Module("vSphere Lifecycle", [
        "Describe how VMware vSphere Lifecycle Manager works",
        "Use vSphere Lifecycle Manager to update ESXi hosts in a cluster"
      ])
    ]
  },
  {
    contentAvailable,
    name: "VMware NSX-T Data Center: Install, Configure, Manage ",
    description: `
This five-day, fast-paced course provides comprehensive training on how to install, configure, and manage a VMware NSX-T Data Center environment. This course covers key NSX-T Data Center features and functionality offered in the NSX-T Data Center 3.0 release, including the overall infrastructure, logical switching, logical routing, networking and security services, micro-segmentation and firewalls, and more. Access to a software-defined data center environment is provided through hands-on labs to reinforce the skills and concepts presented in the course.
`,
    duration: "5 Days",
    url: "/images/technical/vmware-workstation-logo.jpeg",
    modules: [
      new Module("Course Introduction ", [
        "     Introductions and course logistics",
        "     Course objectives"
      ]),
      new Module("VMware Virtual Cloud Network and NSX-T Data Center", [
        "     Introduce VMware’s Virtual Cloud Network vision",
        "     Discuss NSX-T Data Center solutions, use cases, and benefits",
        "     Explain NSX-T Data Center architecture and components",
        "     Describe VMware NSX product portfolio and features",
        "     Explain the management, control, data, and consumption planes and function"
      ]),
      new Module("Deployment Preparing the NSX-T Data Center Infrastructure", [
        "     Describe NSX Management Cluster",
        "     Deploy VMware NSX Manager nodes on VMware ESXi and KVM hypervisors",
        "     Navigate through the NSX Manager UI",
        "     Explain data plane components such as N-VDS, transport nodes, transport zones, profiles, and more",
        "     Perform transport node preparation and establish the data center infrastructure",
        "     Verify transport node status and connectivity"
      ]),
      new Module("NSX-T Data Center Logical Switching", [
        "     Introduce key components and terminology in logical switching",
        "     Describe the types of L2 segments and function",
        "     Explain tunneling and the GENEVE encapsulation",
        "     Configure logical segments and attach hosts using NSX Manager UI",
        "     Describe the function and types of segment profiles",
        "     Create segment profiles and apply them to segments and ports",
        "     Explain the function of MAC, ARP, and TEP tables used in packet forwarding",
        "     Demonstrate L2 unicast packet flow",
        "     Explain ARP suppression and BUM traffic handling"
      ]),
      new Module("NSX-T Data Center Logical Routing", [
        "     Describe the logical routing function and use cases",
        "     Introduce the two-tier routing architecture, topologies, and components",
        "     Explain the Tier-0 and Tier-1 Gateway functions",
        "     Describe the logical router components: Service Router and Distributed Router",
        "     Discuss the architecture and function of VMware NSX® Edge™ nodes",
        "     Discuss deployment options of NSX Edge nodes",
        "     Configure NSX Edge nodes and create NSX Edge clusters",
        "     Configure Tier-0 and Tier-1 Gateways",
        "     Examine the single-tier and multitier packet flow",
        "     Configure static routing and dynamic routing",
        "     Enable ECMP on Tier-0 Gateway",
        "     Describe NSX Edge HA, failure detection, and failback modes"
      ]),
      new Module("NSX-T Data Center Bridging", [
        "     Describe the function of logical bridging",
        "     Discuss the logical bridging use cases",
        "     Compare routing and bridging solutions",
        "     Explain the components of logical bridging",
        "     Create bridge clusters and bridge profiles"
      ]),
      new Module("NSX-T Data Center Security", [
        "     Introduce the NSX-T Data Center security approach and model",
        "     Describe the micro-segmentation benefits and use cases",
        "     Describe the Distributed Firewall architecture, components, and function",
        "     Configure Distributed Firewall sections and rules",
        "     Describe the Gateway Firewall architecture, components, and function",
        "     Configure Gateway Firewall sections and rules",
        "     Describe URL analysis and distributed intrusion system importance and use-cases.",
        "     Describe the service insertion functionality for east-west and north-south security",
        "     Discuss the integration and benefits of partner security solutions with NSX-T Data Center"
      ])
    ]
  },
  {
    contentAvailable,
    name: "VMware Cloud on AWS: Deploy, Configure, Manage 2021",
    description: `
You explore the common use cases of the VMware Cloud on AWS infrastructure that allows you to modernize, protect, and scale applications based on VMware vSphere® that leverage AWS.
In this course, you are introduced to various rapid and easy migration options for workloads based on vSphere to VMware Cloud on AWS. In addition, you are presented with VMware Cloud Disaster Recovery™, which is a Disaster Recovery as-a-service (DRaaS) solution, with fast recovery capabilities, that can be used to cost-effectively protect a broad set of your virtualized applications.
`,
    duration: "5 Days",
    url: "/images/technical/vmware-workstation-logo.jpeg",
    modules: [
      new Module("Course Introduction", [
        "   Introductions and course logistics",
        "   Course objectives"
      ]),
      new Module("Introduction to VMware Cloud on AWS", [
        "   Choosing VMware Cloud on AWS",
        "   Management and operational structure"
      ]),
      new Module(
        "VMware Cloud on AWS Platform and SDDC Deployment Preparation",
        [
          "   Getting started with VMware Cloud on AWS",
          "   Preparing AWS infrastructure for a VMware Cloud on AWS deployment",
          "   Setting up a VMware on Cloud AWS account",
          "   Billing and pricing on VMware Cloud services"
        ]
      ),
      new Module("Deploying and Scaling and SDDC", [
        "   Deploying and examining SDDC configurations",
        "   Sizing the SDDC",
        "   SDDC cluster management",
        "   SDDC host management",
        "   Optimizing and maintaining SDDC Cluster using Elastic DRS for VMware Cloud™ on AWS"
      ]),
      new Module("Accessing and Analyzing vCenter Configurations", [
        "   Accessing vCenter Server in the Cloud SDDC",
        "   Creating virtual machines in the Cloud SDDC",
        "   Analyzing resource management settings in the SDDC",
        "   Analyzing vSphere permissions"
      ]),
      new Module("Networking in VMware Cloud on AWS", [
        "   Internal SDDC network",
        "   Networking and security options",
        "   Inter-SDDC networking"
      ]),
      new Module("Storage on VMware Cloud on AWS", [
        "   vSAN storage in VMware Cloud on AWS",
        "   Attaching external storage to a VM running on an SDDC"
      ]),
      new Module("Working with On-Premises vSphere", [
        "   Hybrid linked mode",
        "   Migration solutions for VMware Cloud on AWS",
        "   VM migration with VMware HCX®"
      ]),
      new Module("Maintaining and Troubleshooting VMware Cloud on AWS", [
        "   Accessing API with VMware Cloud on AWS",
        "   Maintenance and support",
        "   Common troubleshooting steps"
      ]),
      new Module(" Disaster Recovery Solution", [
        "   Site Recovery add-on service",
        "   VMware Cloud Disaster Recovery™"
      ]),
      new Module(" Using Other VMware Products with the SDDC", [
        "   VMware vRealize® Log Insight Cloud™",
        "   VMware Horizon® with VMware Cloud on AWS",
        "   VMware vRealize® Automation Cloud™ add-on",
        "   Using VMware vRealize® Operations™ with VMware Cloud on AWS",
        "   Using VMware vRealize® Network Insight™ with VMware Cloud on AWS"
      ])
    ]
  },
  {
    contentAvailable,
    name: "VMware NSX: Install, Configure, Manage [V6.4]",
    description: `This five-day, comprehensive, fast-paced training course presents VMware NSX as a part of the software-defined data center. You will learn how to use logical switching in VMware NSX to virtualize your switching environment. The course also details logical routing to enable you to dynamically route between different virtual environments. You will also learn how to use gateway services, firewall configurations, and security services to help secure and optimize your VMware NSX environment. 
Access to a software-defined data center environment is provided through hands-on labs to reinforce the skills and concepts presented in the course.`,
    duration: "5 Days",
    url: "/images/technical/vmware-workstation-logo.jpeg",
    modules: [
      new Module("Course Introduction", [
        "     Introductions and course logistics",
        "     Review course objectives"
      ]),
      new Module("Introduction to vSphere Networking", [
        "     Describe VMware vSphere® networking components",
        "     Describe vSphere standard switches",
        "     Describe vSphere distributed switches",
        "     Explain the function VMkernel ports provide",
        "     Explain the services provided by VMkernel ports"
      ]),
      new Module("Introduction to NSX", [
        "     Explain what is missing in data centers today",
        "     Describe how network virtualization can help data centers",
        "     Explain how the new complete SDDC model improves data center operations",
        "     Describe the benefits of NSX",
        "     Identify NSX key use cases"
      ]),
      new Module("NSX Architecture", [
        "     Describe the NSX architecture",
        "     Identify the planes of NSX operations",
        "     Summarize the planes of NSX operations",
        "     Identify the components of each plane",
        "     Summarize the deployment of NSX Manager",
        "     Describe the deployment of the control plane",
        "     Identify and describe user world agents",
        "     List the data plane components"
      ]),
      new Module("NSX Infrastructure Preparation", [
        "     Describe the NSX installation overview",
        "     Identify what is involved in planning an NSX deployment",
        "     Verify the NSX Manager and vCenter Server registration",
        "     Describe the deployment and verification of the NSX Controller cluster"
      ]),
      new Module("NSX Logical Switch Networks", [
        "     Describe the switching challenges in current data centers",
        "     Explain TZ, VTEP, and VXLAN",
        "     Describe the procedure of preparing the infrastructure for virtual networking",
        "     Summarize logical switching segment ID pools and address ranges",
        "     Discuss the NSX replication modes",
        "     *Configure VXLAN transport parameters",
        "     Explain the VXLAN Network Identifier (VNI)",
        "     Define VLANs for VXLAN",
        "     Explain the special CDO logical switch and transport parameters",
        "     Explain logical switch packet walks"
      ]),
      new Module("NSX Logical Routing", [
        "     Describe the routing challenges in current data centers",
        "     Explain Hairpinning",
        "     Describe the East-West and North-South routing concepts",
        "     Define the NSX Distributed Logical Router",
        "     Define the NSX Edge services gateway",
        "     Explain the work flows of a DLR",
        "     Explain the logical router, interfaces, and interface addresses",
        "     Describe the logical router traffic flow on the same hosts and Between different hosts",
        "     Describe logical router deployment models",
        "     Explain the packet flows of an NSX Edge services gateway",
        "     Explain the common topologies of an NSX Edge services gateway"
      ]),
      new Module("Advanced NSX Logical Routing", [
        "     Explain static and dynamic routing",
        "     Describe DLR and NSX Edge static and dynamic routing configuration",
        "     Explain OSPF and BGP routing protocols",
        "     Explain ingress and egress traffic flows",
        "     Describe and configure Equal-Cost Multipathing",
        "     Describe high availability for DLR and NSX Edge service gateways"
      ]),
      new Module("NSX L2 Bridging", [
        "     Explain L2 bridging use cases",
        "     Describe software and hardware L2 bridging between VXLAN and VLANs",
        "     Discuss L2 bridging packet flows"
      ]),
      new Module("NSX Edge Services", [
        "     Describe the NSX Edge Services",
        "     Explain how Network Address Translation (NAT) works",
        "     Describe source and destination NAT",
        "     Explain NAT64"
      ]),
      new Module("NSX Edge VPN Services", [
        "     Describe the NSX Edge VPN Services",
        "     Describe the VPN use cases",
        "     Explain NSX IPsec VPN services",
        "     Describe the IPsec security protocols: Encapsulating Security Payload",
        "     Configure an NSX Edge for IPsec VPN services",
        "     Explain NSX Edge L2 VPN services",
        "     Configure a L2 VPN on an NSX Edge",
        "     Explain NSX Edge SSL VPN-Plus services",
        "     Explain the SSL VPN-Plus client and installation package",
        "     Configure NSX Edge SSL VPN-Plus server settings"
      ]),
      new Module("NSX Security Services", [
        "     Describe SDDC security challenges",
        "     Explain the evolution of firewalls",
        "     Describe the NSX logical firewalls",
        "     Describe the Distributed Firewall architecture",
        "     Explain how to work with firewall rule sections",
        "     Differentiate L2 and L3 firewall rules",
        "     Describe exclusion lists",
        "     Explain L7 filtering in the DFW",
        "     Define an IP address, MAC address, a security, and service group",
        "     Describe the VMware Tools IP address discovery method",
        "     Explain DHCP and ARP snooping"
      ]),
      new Module("NSX Advanced Security Services", [
        "     Describe NSX SpoofGuard",
        "     Explain how to enable NSX SpoofGuard",
        "     Describe the NSX Identity Firewall",
        "     Explain how Identity Firewall works with AD",
        "     Discuss RDSH and its use in Identity Firewall",
        "     Explain Application Rule Manager",
        "     Describe the selection of virtual machines for Application Rule Manager",
        "     Explain how to create a monitoring session",
        "     Describe the publication of firewall rules from Application Rule Manager"
      ]),
      new Module("NSX Introspection Services", [
        "     Describe the types of introspection services",
        "     Describe the installation and configuration of Guest and Network Introspection",
        "     Explain service chaining",
        "     Define the available advanced services",
        "     Describe Guest Introspection services",
        "     Describe Network Introspection services",
        "     Describe how to view the status of Guest and Network Introspection",
        "     Summarize Guest and Network Introspection alarms, events, and audit messages"
      ]),
      new Module("Cross-vCenter NSX", [
        "     Describe cross-vCenter features and use cases",
        "     Describe the components involved in cross-vCenter NSX",
        "     Identify NSX Manager roles and NSX Controller cluster placement",
        "     Deploy universal logical networks",
        "     Describe the deployment models available for cross-vCenter NSX",
        "     Explain the design considerations for cross-vCenter NSX"
      ])
    ]
  },
  {
    contentAvailable,
    name: "VMware vSphere: Design [V7]",
    description: `This three-day training course equips you with the knowledge, skills, and abilities to design a VMware vSphere® 7 virtual infrastructure. You follow a proven approach to design a virtualization solution that ensures availability, manageability, performance, recoverability, and security. The approach presented follows VMware best practices. This course discusses the benefits and risks of available design alternatives and provides information to support making sound design decisions. Given a case study, you practice your design skills by working with peers on a design project.`,
    duration: "5 Days",
    url: "/images/technical/vmware-workstation-logo.jpeg",
    modules: [
      new Module(". Infrastructure Assessment", [
        "    Follow a proven process to design a virtualization solution",
        "    Define customer business objectives",
        "    Gather and analyze business and application requirements",
        "    Document design requirements, constraints, assumptions, and risks",
        "    Use a systematic method to evaluate and document design decisions",
        "    Create a conceptual design"
      ]),
      new Module(" Core Management Infrastructure", [
        "    Determine the number of VMware vCenter® Server ApplianceTM instances to include in a design",
        "    Choose the appropriate single sign-on identity source",
        "    Choose the time synchronization method",
        "    Choose methods to collect log files and ESXi core dumps",
        "    Design a vCenter Server deployment topology that is appropriate for the size and requirements of the data center"
      ]),
      new Module(". Virtual Data Center Infrastructure", [
        "    Calculate total compute capacity requirements for a virtual data center",
        "    Create a virtual data center cluster design that meets business and workload requirements",
        "    Evaluate in the virtual data center the use of several management services, such as VMware vSphere® High Availability and VMware vSphere® Distributed Resource Scheduler™",
        "    Evaluate the use of resource pools in the virtual data center design"
      ]),
      new Module(". Compute Infrastructure", [
        "    Create a compute infrastructure design that includes the appropriate ESXi boot, installation, and configuration options",
        "    Choose the ESXi host hardware for the compute infrastructure"
      ]),
      new Module(". Storage Infrastructure", [
        "    Calculate storage capacity and performance requirements for a design",
        "    Evaluate the use of different storage platforms and storage management solutions",
        "    Design a storage platform infrastructure and storage management architecture that meets the needs of the vSphere environment"
      ]),
      new Module(". Network Infrastructure", [
        "    Evaluate the use of different network component and network management solutions",
        "    Design a network component architecture that includes information about network segmentation and virtual switch types",
        "    Design a network management architecture that meets the needs of the vSphere environment"
      ]),
      new Module(". Virtual Machine Design", [
        "    Make virtual machine design decisions, including decisions about resources",
        "    Design virtual machines that meet the needs of the applications in the vSphere environment and follow VMware best practices"
      ]),
      new Module(". Infrastructure Security", [
        "    Make security design decisions for various layers in the vSphere environment",
        "    Design a security strategy that meets the needs of the vSphere environment and follows VMware best practices"
      ]),
      new Module(". Infrastructure Manageability", [
        "    Make lifecycle management, scalability, and capacity planning design decisions that adhere to business requirements",
        "    Design lifecycle management, scalability, and capacity planning strategies that meet the needs of the vSphere environment and follow VMware best practices"
      ]),
      new Module(". Infrastructure Recoverability", [
        "    Make infrastructure recoverability design decisions that adhere to business requirements",
        "    Design an infrastructure recoverability strategy that meets the needs of the vSphere environment and follows VMware best practices"
      ])
    ]
  },

  //   ------------------------------------------------------
  { name: "Cisco", url: "/images/technical/cisco.png" },
  { name: "CertNexus", url: "/images/technical/certnexus.png" },
  {
    name: "Programming and Development",
    url: "/images/technical/programming.png"
  },
  {
    contentAvailable,
    name: "Red Hat Certified System Administrator (RHCSA)",
    url: "/images/technical/redhat.png",
    duration: "4 Days",
    description: `An IT professional who has earned the Red Hat Certified System Administrator (RHCSA®) is able to perform the core system administration skills required in Red Hat Enterprise Linux environments. The credential is earned after successfully passing the Red Hat Certified System Administrator (RHCSA) Exam (EX200).
A Red Hat® Certified System Administrator (RHCSA) is able to perform the following tasks:
Understand and use essential tools for handling files, directories, command-line environments, and documentation,
Operate running systems, including booting into different run levels, identifying processes, starting and stopping virtual machines, and controlling services,
Configure local storage using partitions and logical volumes,
Create and configure file systems and file system attributes, such as permissions, encryption, access control lists, and network file systems,
Deploy, configure, and maintain systems, including software installation, update, and core services,
Manage users and groups, including use of a centralized directory for authentication,
Manage security, including basic firewall and SELinux configuration`,
    modules: [
      new Module("Understand and use essential tools", [
        "     Access a shell prompt and issue commands with correct syntax",
        "     Use input-output redirection (>, >>, |, 2>, etc.)",
        "     Use grep and regular expressions to analyze text",
        "     Access remote systems using ssh",
        "     Log in and switch users in multiuser targets",
        "     Archive, compress, unpack, and uncompress files using tar, star, gzip, and bzip2",
        "     Create and edit text files",
        "     Create, delete, copy, and move files and directories",
        "     Create hard and soft links",
        "     List, set, and change standard ugo/rwx permissions",
        "     Locate, read, and use system documentation including man, info, and files in /usr/share/doc",
        "Note: Red Hat may use applications during the exam that are not included in Red Hat Enterprise Linux for the purpose of evaluating candidate’s abilities to meet this objective."
      ]),
      new Module("Operate running systems", [
        "     Boot, reboot, and shut down a system normally",
        "     Boot systems into different targets manually",
        "     Interrupt the boot process in order to gain access to a system",
        "     Identify CPU/memory intensive processes, adjust process priority with renice, and kill processes",
        "     Locate and interpret system log files and journals",
        "     Access a virtual machine’s console",
        "     Start and stop virtual machines",
        "     Start, stop, and check the status of network services",
        "     Securely transfer files between systems"
      ]),
      new Module("Configure local storage", [
        "     List, create, delete partitions on MBR and GPT disks",
        "     Create and remove physical volumes, assign physical volumes to volume groups, and create and delete logical volumes",
        "     Configure systems to mount file systems at boot by Universally Unique ID (UUID) or label",
        "     Add new partitions and logical volumes, and swap to a system non-destructively"
      ]),
      new Module("Create and configure file systems", [
        "     Create, mount, unmount, and use vfat, ext4, and xfs file systems",
        "     Mount and unmount CIFS and NFS network file systems",
        "     Extend existing logical volumes",
        "     Create and configure set-GID directories for collaboration",
        "     Create and manage Access Control Lists (ACLs)",
        "     Diagnose and correct file permission problems"
      ]),
      new Module("Deploy, configure, and maintain systems", [
        "     Configure networking and hostname resolution statically or dynamically",
        "     Schedule tasks using at and cron",
        "     Start and stop services and configure services to start automatically at boot",
        "     Configure systems to boot into a specific target automatically",
        "     Install Red Hat Enterprise Linux automatically using Kickstart",
        "     Configure a physical machine to host virtual guests",
        "     Install Red Hat Enterprise Linux systems as virtual guests",
        "     Configure systems to launch virtual machines at boot",
        "     Configure network services to start automatically at boot",
        "     Configure a system to use time services",
        "     Install and update software packages from Red Hat Network, a remote repository, or from the local file system",
        "     Update the kernel package appropriately to ensure a bootable system",
        "     Modify the system bootloader"
      ]),
      new Module("Manage users and groups", [
        "     Create, delete, and modify local user accounts",
        "     Change passwords and adjust password aging for local user accounts",
        "     Create, delete, and modify local groups and group memberships",
        "     Configure a system to use an existing authentication service for user and group information"
      ]),
      new Module("Manage security", [
        "     Configure firewall settings using firewall-config, firewall-cmd, or iptables",
        "     Configure key-based authentication for SSH",
        "     Set enforcing and permissive modes for SELinux",
        "     List and identify SELinux file and process context",
        "     Restore default file contexts",
        "     Use boolean settings to modify system SELinux settings",
        "     Diagnose and address routine SELinux policy violations"
      ])
    ]
  },
  {
    contentAvailable,
    name: "Red Hat Certified Engineer (RHCE)",
    url: "/images/technical/redhat.png",
    duration: "4 Days",
    description: `The RHCE exam is a performance-based evaluation of Red Hat Enterprise Linux system administration skills and knowledge. Candidates perform a number of routine system administration tasks and are evaluated on whether they have met specific objective criteria. Performance-based testing means that candidates must perform tasks similar to what they must perform on the job. RHCE exam candidates should be able to accomplish the following without assistance. These have been grouped into several categories.`,
    modules: [
      new Module("System configuration and management", [
        "     Use network teaming or bonding to configure aggregated network links between two Red Hat Enterprise Linux systems",
        "     Configure IPv6 addresses and perform basic IPv6 troubleshooting",
        "     Route IP traffic and create static routes",
        "     Use FirewallD, including Rich Rules, Zones and custom rules, to implement packet filtering and configure network address translation (NAT)",
        "     Use /proc/sys and sysctl to modify and set kernel runtime parameters",
        "     Configure a system to authenticate using Kerberos",
        "     Configure a systems as either an iSCSI target or initiator that persistently mounts an iSCSI target",
        "     Produce and deliver reports on system utilization (processor, memory, disk, and network)",
        "     Use shell scripting to automate system maintenance tasks",
        "     Configure a system to log to a remote system",
        "     Configure a system to accept logging from a remote system"
      ]),
      new Module(
        "Network Services -  Network services are an important subset of the exam objectives. RHCE candidates should be capable of meeting the following objectives for each of the network services listed below:",
        [
          "     Install the packages needed to provide the service",
          "     Configure SELinux to support the service",
          "     Use SELinux port labelling to allow services to use non-standard ports",
          "     Configure the service to start when the system is booted",
          "     Configure the service for basic operation",
          "     Configure host-based and user-based security for the service"
        ]
      ),
      new Module("HTTP/HTTPS", [
        "     Configure a virtual host",
        "     Configure private directories",
        "     Deploy a basic CGI application",
        "     Configure group-managed content",
        "     Configure TLS security"
      ]),
      new Module("DNS", [
        "     Configure a caching-only name server",
        "     Troubleshoot DNS client issues"
      ]),
      new Module("NFS", [
        "     Provide network shares to specific clients",
        "     Provide network shares suitable for group collaboration",
        "     Use Kerberos to control access to NFS network shares"
      ]),
      new Module("SMB", [
        "     Provide network shares to specific clients",
        "     Provide network shares suitable for group collaboration"
      ]),
      new Module("SMTP", [
        "     Configure a system to forward all email to a central mail server"
      ]),
      new Module("SSH", [
        "     Configure key-based authentication",
        "     Configure additional options described in documentation"
      ]),
      new Module("NTP", ["     Synchronize time using other NTP peers"]),
      new Module("Database Services", [
        "     Install and configure MariaDB",
        "     Backup and restore a database",
        "     Create a simple database schema",
        "     Perform simple SQL queries against a database"
      ])
    ]
  }
];
