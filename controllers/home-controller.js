const verifyToken = require("../utilites/verify");

const home = (req , res ,next) =>{
    const status = verifyToken(req);
    res.render("home" ,{
        data:{
            pageName: "home",
            message: "Home page",
            loginStatus: status
        }
    });
};

module.exports = home;