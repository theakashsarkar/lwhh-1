module.exports = function(app){
    app.get("/",(req,res)=>{
        res.end("hello everyone how are you?")
    })
    app.post('/me',(req,res)=>{
        let MyAnswar ={
            time:Date.now(),
            gretting: `Hello ${req.body.name} have good day`
        }
        res.json(MyAnswar);
    })
    
}