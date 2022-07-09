const express = require("express");
const path = require("path");
const courses = require("./data/courses");
const router = express.Router();


const app = express();

let staticPath = path.join('dist','public')
router.use(express.static("public"));
app.set("view engine", "ejs");

router.get("/", (req, res) => {
  res.render("landingpage");
});

router.get("/courses/:courseId/:courseName", (req, res) => {
  const { courseId, courseName } = req.params;
  const queryResult = { id: courseId, name: courseName };

  const dataToRender = courses[queryResult.id].map((course, index) => {
    if (course.linkName == courseName) {
      return index;
    }
  });

  let info = data => {
    let result = "0";
    data.forEach(i => {
      if (i) {
        result = i;
      }
    });
    return courses[courseId][result];
  };

  let placeholders = {
    duration: "3 days",
    level: "Beginner",
    platform: "Instructor-led",
    learn: [
      "Describe self-service BI",
      "Describe the Power BI suite of products",
      "Connect to data sources and optimize data models",
      "Shape and combine data from different sources",
      "Model data",
      "Create reports and manage solutions",
      "Describe the Power BI developer API",
      "Describe the Power BI mobile app"
    ],
    more: [
      "Module 1: Introduction to self-service BI solutions",
      "Module 2: Introducing power BI",
      "Module 3: Power BI data",
      "Module 4: Shaping and combining data",
      "Module 5: Modeling data",
      "Module 6: Interactive data visualizations",
      "Module 7: Direct connectivity",
      "Module 8: Development with power BI",
      "Module 9: Power BI mobile"
    ]
  };

  res.render("courseView", { data: info(dataToRender), placeholders });
});

app.use(router)


const port = process.env.PORT || 5500;

app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});


module.exports = {app,router}