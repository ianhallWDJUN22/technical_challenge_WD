require("dotenv/config")

const express = require ("express")

const app = express()

const phoneRoutes = require("./routes/phone.routes")
app.use("/api", phoneRoutes)

module.exports = app;