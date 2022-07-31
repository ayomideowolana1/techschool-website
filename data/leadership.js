const { Module } = require("../data/struct");
let contentAvailable = true;

module.exports = [
  {
    name: "Leadership and Professional Development",
    url: "/images/leadership/leader.png"
  },
  { name: "Human Resource Management", url: "/images/leadership/hr.png" },
  {
    contentAvailable,
    name: "Business Analysis",
    url: "/images/leadership/ba.png",
    description:
      "Business Analysis training course provides the essentials of the business analysis process, incorporating industry best practices from IIBA®. Through interactive workshops you will conduct a business needs analysis to elicit stakeholder requirements, apply business analysis techniques to identify key problems and potential opportunities in your enterprise and create effective requirements and communication plans. Improve your analytical competencies by analyzing and specifying requirements using industry best practices The business analyst role has evolved from that of a business procedures analyst to that of a business liaison between the non-technical user community and the technical solution providers. This course provides proactive, introductory coverage of the knowledge and skills essential to business analysts today and the foreseeable future.",
    duration: "4 Days",

    modules: [
      new Module("Overview", [
        "BA Responsibilities",
        "Communications",
        "Information distribution",
        "Communications styles",
        "Documentation strategy",
        ""
      ]),
      new Module("Requirements Gathering", [
        "Levels of requirements on a project",
        "Identifying needs vs. wants",
        "Techniques for gathering requirements",
        "Interviewing",
        "Prototyping",
        "Use Cases",
        "Collaborative Workshops",
        "Work Breakdown Structure",
        "Business Process Analysis",
        "Use Cases",
        "Ranking requirements",
        ""
      ]),
      new Module("Modeling", [
        "Business Process Analysis",
        "Business Process Improvements (BPI)",
        "Business Process Reengineering (BPR)",
        "Data Modeling",
        "Fundamentals",
        "Entity Relationship Diagrams",
        ""
      ]),
      new Module("Fundamentals of testing", [
        "Testing strategy",
        "Ensure project quality and quality of the product",
        "Test scripts",
        ""
      ]),
      new Module("Templates", [
        "Software/Product Requirements Outline",
        "Use Case Template",
        "Test Plan Template",
        ""
      ]),
      new Module("Practical Application Sessions", [
        "Determine your own Communication Style",
        "Interview a project sponsor",
        "Develop Use Cases and a Use Case Diagram",
        "Gather requirements while developing a Work Breakdown Structure",
        "Create a Business Process model",
        "Design and facilitate a Requirements-Gathering session",
        "Develop a high-level Requirements Document",
        "Develop an Entity Relationship Diagram",
        "Create a Project Test Plan"
      ])
    ]
  }
];