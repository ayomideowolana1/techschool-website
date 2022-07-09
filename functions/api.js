const express = require("express")
const serverless = require("serverless-http")
const {app,router} =  require("../server")

app.use('/.netlify/functions/api',router)

module.exports.handler = serverless(app) 