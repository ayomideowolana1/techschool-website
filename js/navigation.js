// DOM nodes
let x = document.getElementById("");
let logo = document.querySelector(".logo img");
let coursesButton = document.getElementById("courses-and-certification");
let coursesSection = document.querySelector("#courses").getBoundingClientRect();
let aboutBtn = document.getElementById("about-us-btn");
let aboutSection = document
  .getElementById("about-us-section")
  .getBoundingClientRect();
let contactBtn = document.getElementById("contact-us-btn");
let contactSection = document
  .getElementById("contact-us-section")
  .getBoundingClientRect();

let trainingBtn = document.getElementById("corporate-training");
let trainingSection = document
  .querySelector(".section1-cont")
  .getBoundingClientRect();

let couples = [
  {
    button: coursesButton,
    position: coursesSection.y - 110
  },
  {
    button: aboutBtn,
    position: aboutSection.y - 150
  },
  {
    button: contactBtn,
    position: contactSection.y - 100
  },
  {
    button: logo,
    position: 0
  },
  {
    button: trainingBtn,
    position: trainingSection.y - 100
  }
];

// global navigation function
const navigateTo = sectionPosition => {
  window.scrollTo(0, sectionPosition);
};

couples.forEach(couple => {
  couple.button.addEventListener("click", () => {
    navigateTo(couple.position);
  });
});

// Mobile
// DOM nodes
let sm_logo = document.querySelector(".sm .logo");
let sm_coursesButton = document.querySelector(
  "#dropdown .links #courses-and-certification"
);
let sm_aboutUs = document.querySelector("#dropdown .links #about-us");
let sm_contactUs = document.querySelector("#dropdown .links #contact-us");
let dropdown = document.getElementById("dropdown")
// console.log(sm_contactUs);

let sm_couples = [
  {
    button: sm_logo,
    position: 0
  },
  {
    button: sm_coursesButton,
    position: coursesSection.y + 130
  },
  {
    button: sm_aboutUs,
    position: aboutSection.y - 50
  },
  {
    button: sm_contactUs,
    position: contactSection.y + 140
  }
  // {
  //   button: trainingBtn,
  //   position: trainingSection.y - 100
  // }
];

sm_couples.forEach(couple => {
  couple.button.addEventListener("click", () => {
    dropdown.style.display =  "none"
    navigateTo(couple.position);
  });
});

console.log(sm_couples);

