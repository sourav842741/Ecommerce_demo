const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const ejsMate = require("ejs-mate");

const MONGO_URL = ("mongodb://127.0.0.1:27017/ecommerece");

main()
.then(()=>{
    console.log("connected to DB");
})
.catch((err)=>{
    console.log(err);
});

async function main() {
    await mongoose.connect(MONGO_URL);
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));

app.engine('ejs',ejsMate);
app.use(express.static(path.join(__dirname,"/public")));

app.listen(8080,()=>{
    console.log("server is listing to port 8080");
});

app.get("/",(req,res)=>{
    res.render("./listings/index.ejs");
});

app.get("/ecommerce/mobileSection",(req,res)=>{
    res.render("./listings/mobileSection.ejs");
});

app.get("/ecommerce/electronicSection",(req,res)=>{
    res.render("./listings/electronicSection.ejs");
});

app.get("/ecommerce/grocery",(req,res)=>{
    res.render("./listings/grocery.ejs");
});

app.get("/ecommerce/men",(req,res)=>{
    res.render("./listings/men.ejs");
});

app.get("/ecommerce/women",(req,res)=>{
    res.render("./listings/women.ejs");
});

app.get("/ecommerce/beautyProduct",(req,res)=>{
    res.render("./listings/beautyProduct.ejs");
});

app.get("/ecommerce/aboutus",(req,res)=>{
    const about ="&copy; 2025 ZepCart Store. All Rights Reserved.</p>"
    res.send(about);
});

app.get("/ecommerce/blog",(req,res)=>{
    res.render("./listings/blog.ejs");
});

app.get("/ecommerce/contactus",(req,res)=>{
    const contact ="<h1>Contact Us :-</h1><h3>forplacement90@gmail.com</h3>"
    res.send(contact);
});

app.use("/owner", (req, res) => {
    const owner = "<h1 style='color: red;'>This Website is Developed by the Sourav Kumar & Sujit Som.</h1>"
    res.send(owner);
})



 

app.use((req, res) => {
    res.status(404).send("<h3>404 Error - Page Not Found</h3>");
});