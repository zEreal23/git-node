const express = require('express');
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const authRoute = require("./routes/auth");
const homeController = require("./controllers/home-controller");
const pageNotFoundController = require("./controllers/page-not-found-controller")

const port = process.env.port || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine" , "ejs");
app.set("views" , "views"); 
app.use(authRoute);

app.get("/" , homeController);
app.get("/*" , pageNotFoundController);



mongoose
    .connect(
        'mongodb+srv://zEreal23:06311real@cluster0.5ijew.mongodb.net/house_app?retryWrites=true&w=majority',
        {useNewUrlParser: true , useCreateIndex: true}
    )
    .then(()=>{
        console.log("Database Connected!")
    })
    .catch(()=>{
        console.log("Cannot Connect to Database!!!")
    });

app.listen(port, function(){
    console.log("Listening on port" , port);
});