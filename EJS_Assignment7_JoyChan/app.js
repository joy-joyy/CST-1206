 
// STEP 1: Watch chunk 1 to chunk 2 from https://www.youtube.com/watch?v=JpcLd5UrDOQ
// i.e. prepare the form (name, email, contact details), enable the server to receive data from client
// You should see the input data from the VS code console 

// STEP 2: Add date picker with default as today te
// https://www.npmjs.com/package/js-datepicker#installation


const express = require('express');
const app = express();
const PORT = 5000;


app.set("view engine", "ejs");
app.set('views', __dirname + '/views');


// Chunk 2
// Data Parsing:
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());


// app.get("/", (req, res) => {
//     res.render("index", { name: "Prabh"} )
// })

let listOfNames = ["Prabh", "Daniel", "MaC"];
let html = "Hello I am HTML"

let reqname =

app.get("/", (req, res) => {
    res.render("index", {name: html} )
})

app.get("/displayresult", (req, res) => {
    res.render("displayresult", {reqname: "Joy", reqemail: "tszyuk@gmail.com", reqdate: "11 Nov 2022"} )
})


app.post("/showresult", (req, res) => {
    // TODO:
    // send email here

    console.log("Data: ", req.body);

    // res.json({message: "Message received.!!!"})
    res.redirect("/displayresult");
    console.log("Finish app.post");
})

app.get('/favicon.ico', (req, res) => res.status(204));

app.listen(PORT, () => {
    console.log(`Server Running at port ${PORT}`);
})