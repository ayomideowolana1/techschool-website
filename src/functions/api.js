const express = require("express")
const serverless = require("serverless-http")
const {app,router} =  require("../../server")

app.use("/",router)

module.exports.handler = serverless(app) 