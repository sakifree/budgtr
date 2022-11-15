///////////////////////////////////
// SETUP - DECLARE DEPENDENCIES - CREATE APP OBJECT
///////////////////////////////////
require("dotenv").config()
const express = require('express')
const app = express()
const morgan = require("morgan")

///////////////////////////////////
// MIDDLEWARE
///////////////////////////////////
app.use(morgan("dev"))

///////////////////////////////////
// ROUTES 
///////////////////////////////////

// HOME ROUTE - GET
app.get("/", (req, res) => {
    res.send("WELCOME!")
})

// INDEX ROUTE - GET 
app.get("", (req, res) => {
    res.render(
        "index.ejs",
        {

        }
    )
})

// NEW ROUTE - GET 
app.get("", (req, res) => {
    res.render(
        "new.ejs",
        {

        }
    )
})

// CREATE ROUTE - POST
app.post("", (req, res) => {

})

// SHOW ROUTE - GET
app.get("", (req, res) => {
    res.render(
        "show.ejs",
        {
            
        }
    )
})

///////////////////////////////////
// SERVER LISTENER
///////////////////////////////////
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Listening on planet ${PORT}`)
})