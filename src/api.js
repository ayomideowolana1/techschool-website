const {app,router} =  require("../app")
const serverless = require("serverless-http")

router.get("/test",(req,res)=>{
    res.send("test")
})

app.use("/.netlify/functions/api", router);

module.exports.handler = serverless(app); 