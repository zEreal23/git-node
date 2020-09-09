const jwt = require("jsonwebtoken");
const profile = (req , res , next) =>{
    console.log("test");
    try{
        const token = req.get("Cookie").split("token=")[1].trim();
        const user = jwt.verify(token, "SECRETKEY");
        res.render("profile",{
            data:{
                pageName: "Profile",
                meassage: "",
                class:"alert alert-primary",
                username: user.username,
                loginStatus: user.loginStatus,
            }
        })
    } catch (error){
        res.render("login",{
            data:{
                pageName: "Login",
                meassage: "กรุณาล็อกอินเข้าสู่ระบบ",
                class:"alert alert-warning",
            }
        })
    }
}
module.exports = profile;