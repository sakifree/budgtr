/********************************* */
// SETUP - DECLARE DEPENDENCIES - CREATE APP OBJECT
/********************************* */
require("dotenv").config()
const express = require('express')
const morgan = require("morgan")
const budget = require("./models/budget")
let bankAccount = 0

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
    res.render("index.ejs", {
            budget: budget,
            bankAccount: budget.reduce((acc, budgetItem) => {
                return acc + Number(budgetItem.amount)
            },0)
        })
})

// NEW ROUTE - GET 
app.get("/budgets/new", (req, res) => {
    res.render("new.ejs")
})

// CREATE ROUTE - POST
app.post("/budgets", (req, res) => {
    budget.push(req.body)
    res.redirect("/budgets")
})

// SHOW ROUTE - GET
app.get("/budgets/:id", (req, res) => {
    res.render("show.ejs", {
            item: budget[req.params.id],
            index: req.params.id
        })
})

/********************************* */
// SERVER LISTENER
/********************************* */
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Can you hear the love on port: ${PORT}`)
})