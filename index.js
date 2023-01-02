var express = require("express");
var path = require("path");
var hbs = require("hbs");
var bodyparser = require('body-parser')
var nodemailer = require("nodemailer")

var app = express();

var publicPath = path.join(__dirname, "./views/public");
var partialsPath = path.join(__dirname, "./views/partials");
var encoder = bodyparser.urlencoded()

app.set("view engine", "hbs");

app.use(express.static(publicPath));
hbs.registerPartials(partialsPath);

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about", {name:"Ashfaq Akhtar"});
});
app.get("/contact", (req, res) => {
  res.render("contact");
});
app.post("/contact",encoder, (req, res) => {
  console.log(req.body);
  res.render("contact");
});
 

app.listen(8000, "localhost", () => {
  console.log("Running");
});
