/********************************* */
// SETUP - DECLARE DEPENDENCIES - CREATE APP OBJECT
/********************************* */
require("dotenv").config()
const express = require('express')
const morgan = require("morgan")
const budget = require("./models/budget")

const app = express()
/********************************* */
// MIDDLEWARE
/********************************* */
app.use(express.urlencoded({extended: true}))
app.use(morgan("dev"))
app.use("/static", express.static("public"))

/********************************* */
// ROUTES 
/********************************* */

// HOME ROUTE - GET
app.get("/", (req, res) => {
    res.send("WELCOME!")
})

// INDEX ROUTE - GET 
app.get("/budgets", (req, res) => {
    res.render(
        "index.ejs",
        {
            budget: budget
        }
    )
})

// NEW ROUTE - GET 
app.get("budgets/new", (req, res) => {
    res.render(
        "new.ejs",
        {

        }
    )
})

// CREATE ROUTE - POST
app.post("/budgets", (req, res) => {

})

// SHOW ROUTE - GET
app.get("/budgets/:index", (req, res) => {
    res.render(
        "show.ejs",
        {

        }
    )
})

/********************************* */
// SERVER LISTENER
/********************************* */
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Can you hear the love on port: ${PORT}`)
})