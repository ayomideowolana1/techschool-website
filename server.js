const express = require("express");
const path = require("path")

const app = express();
app.use(express.static("public"));
app.set("view engine","ejs")

app.get("/", (req, res) => {
  res.render("landingpage");
});

app.get("/courses",(req,res)=>{
    res.send("test")
})

const port = process.env.PORT || 3000;


app.listen(port,()=>{
    console.log(`Listening on port:${port}`)
})