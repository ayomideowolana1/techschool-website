const express = require("express");
const path = require("path");
const courses = require("./data/courses");
const router = express.Router();

const app = express();

router.use(express.static("public"));
app.set("view engine", "ejs");

router.get("/", (req, res) => {
  res.render("landingpage");
});

router.get("/courses/:courseId/:courseName", (req, res) => {
  const { courseId, courseName } = req.params;

  const queryResult = { id: courseId, name: courseName };

  console.log("----------------- GET DATA-----------------------");

  let data = courses[courseId];
  // console.log(data)
  const [index] =   data.filter((x) => {
    if (x.linkName == courseName){
      return x
    }
  })
  if (index.contentAvailable) {
    res.render("courseView", { data: index });
  }else{
    res.redirect("/")
  };
});

app.use(router);

const port = process.env.PORT || 5500;

app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});

module.exports = { app, router };