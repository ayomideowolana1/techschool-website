const express = require("express")
const serverless = require("serverless-http")
const {app,router} =  require("../app")

app.use("/",router)

module.exports.handler = serverless(app) 