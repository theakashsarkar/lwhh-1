const express      = require("express");
const app          = express();
const Token        = "abc123"
const bodyParser   = require("body-parser");
const routes       = require("./routes");
app.use(bodyParser.json())
app.use('/pub',express.static("public"));

app.use("/api",(req,res,next)=>{
    let token = req.header('token');
    if(!token){
      return res.json({
            message:"User not authorized"
        }).status(401);
        
    }else{
        if(token === Token){
           return next();
        }
        else{
            return res.json({
                message:"Wrong token provided"
            }).status(401);
            
        }
    }
});
app.get("/api/hello",(req,res)=>{
    res.json({
        message:"hello world"
    })
})
// app.get("/pub/style.css",(req,res)=>{
//     res.sendFile("./public/style.css", { root: __dirname });
// })
routes(app);
app.listen(8000);