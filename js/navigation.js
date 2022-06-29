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

// click navigations
// couple = { button, element to navigate to }
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
    position: trainingSection.y-100
  }
];

// global navigation function
const navigateTo = sectionPosition => {
  console.log(sectionPosition);
  window.scrollTo(0, sectionPosition);
};

couples.forEach(couple => {
  couple.button.addEventListener("click", () => {
    navigateTo(couple.position);
  });
});
