
var path=require("path");

//Routing for html pages
//

module.exports=function(app)
{

    app.get("/survey",function(req, res){
        res.sendFile(path.join(__dirname, "../public/survey.html"));
        
    });

    app.get("/",function(req,res){
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    app.get("/ui", function(req,res){
        res.sendFile(path.join(__dirname, "../public/ui.js"));
    });

};