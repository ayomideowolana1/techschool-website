const { Module } = require("../data/struct");
let contentAvailable = true;

module.exports = [
  { name: "Data Science", url: "/images/digital/data-science.png" },
  { name: "IoT – Internet of Things", url: "/images/digital/iot.png" },
  { name: "Cybersecurity", url: "/images/digital/cybersecurity.png" },
  { name: "Big Data", url: "/images/digital/big-data.png" },
  { name: "Cloud", url: "/images/digital/cloud.png" },
  {
    contentAvailable,
    name: "AGILE SOFTWARE DEVELOPMENT",
    url: "/images/agile.jpg",

    url: "/images/agile.jpg",
    description:
      "This course will teach you the best practices of scrum software development. Starting out this course, you will start by identifying scrum roles and following the scrum workflow. Then you will learn sprint plans, consider a daily scrum, a sprint review, and backlog refinement. Next you will take a look at scrum artifacts, weigh scrum limitations and scrum values. Other topics include Scrumban, and noticing how scrum of scrums helps improve team coordination. You&#39;ll also study two different large-scale scrum frameworks. Finally, as an exercise, you will identify key scrum features needed for Agile software development.",
    duration: "3",
    modules: [
      new Module("Agile Fundamentals", [
        "Introduction",
        "What software development looks like?",
        "Intro to Software Development Models",
        "Why Agile?",
        "Agile Manifesto: Principles",
        "Benefits and Challenges of Agile",
        "Agile: When to Use and When NOT to!",
        "Applying an Agile Mindset to a Project",
        "Agile Frameworks"
      ]),
      new Module("Requirements and Planning", [
        "Gathering Requirements: The agile way",
        "User Stories: The currency of agile development",
        "Characteristics of good user stories",
        "Generating User Stories",
        "Agile Estimation and Planning",
        "Estimation Styles and Process",
        "Velocity",
        "Release Planning",
        "Release Tracking"
      ]),
      new Module("Scrum", [
        "Scrum Overview",
        "Sprint Planning",
        "Sprint Tracking",
        "Sprint Execution and Daily Standups",
        "Sprint Review",
        "Sprint Retrospective",
        ""
      ]),
      new Module("XP and Course Wrap-up", [
        "XP Overview",
        "XP Values",
        "XP Practices - Part",
        "XP Practices - Part",
        "XP Process Model",
    
      ])
    ]
  }
];


