// Imports
const path = require('path');
const express = require('express');

// Constants 
const app = express()
const PORT  = 3000


// Routes 
app.use(express.static('public'))

app.use("/picture", (req, res)=>{
    res.send("Picture taken")
})


// Redirect to home-age for all other non-described routes 
// app.use("*", (req, res)=>{
//     res.redirect("/home")
// })

// Listening for requests
app.listen(PORT, ()=>{
    console.log("Listening on port", PORT);
})