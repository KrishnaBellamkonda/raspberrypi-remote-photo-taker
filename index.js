// Imports
const path = require('path');
const express = require('express');
const exec = require('await-exec');
const fs = require('fs');

// Constants 
const app = express()
const PORT  = 3000

// Utility 
async function readPath(){
    const json_path = path.join(__dirname, 'public/image_path.json');
    const obj = await JSON.parse(fs.readFileSync(json_path))
    return obj["path"]
}

async function runCapture(){
	await exec('python capture.py');
}

// Routes 
app.use(express.static('public'))

app.use("/picture", async (req, res)=>{
    // Take Picture 
    await runCapture()
    const imagePath = await readPath()
    
    // Send picture path as response
    let dataObject = {"time":Date.now(), "path":imagePath}
    res.json(dataObject)
})


// Redirect to home-age for all other non-described routes 
 app.use("*", (req, res)=>{
    res.redirect("/home.html")
 })

// Listening for requests
app.listen(PORT, ()=>{
    console.log("Listening on port", PORT);
})
