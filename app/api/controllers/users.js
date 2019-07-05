const userModel = require("../models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


module.exports = {
  signUpUser: function(req, res, next){
      userModel.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      },(err,result)=>{
          if(err)next(err);
          else res.json({ status: "success" });
      });
  },
  signInUser: (req, res, next) => {
      userModel.findOne({email:req.body.email},(err,userAuthInformation)=>{
          if(err)next(err);
          else{
    
              if(!userAuthInformation){
                res.json({
                  status: "error",
                  message: "OOPS Invalid email/password",
                  data: null
                });
                return;
              }
               
              if(bcrypt.compareSync(req.body.password, userAuthInformation.password)){
                  const token = jwt.sign(
                    { id: userAuthInformation._id },
                    req.app.get("secretKey"),
                    { expiresIn: "24hr" }
                  );

                  res.json({
                    status: "success",
                    message:"Successfully Authed",
                    data: {
                      user: userAuthInformation,
                      token: token
                    }
                  });
              }else{
                  res.json({
                      status:"error", 
                      message: "Invalid email/password!!!", 
                      data:null
                  });
              }
          }
      });
  }
};