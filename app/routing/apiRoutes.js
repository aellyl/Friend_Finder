
//Get Data
var friendsArr=require("../data/friends.js");

//Routing for API
//

module.exports=function(app)
{

    app.get("/api/friends",function(req,res){

        res.json(friendsArr);

    });

    //Post data from survey
    app.post("/api/new",function(req,res){

        var newFriend=req.body;
        //console.log(findTopMatch(newFriend));
        res.send(findTopMatch(newFriend));
        friendsArr.push(newFriend);


    });

};

function findTopMatch(newFriend){

    var totalDiff=0;
    var preDiff;
    var topMatch;
    for(var i=0;i<friendsArr.length;i++)
    {
        for(var j=0;j<friendsArr[i].scores.length;j++)
        {
            totalDiff+=getDiff(parseInt(friendsArr[i].scores[j]),newFriend.scores[j]);
            
        }
        //console.log("totalDiff: "+ totalDiff+" for "+friendsArr[i].name);
        if(preDiff)
        {
            if(preDiff>totalDiff)
            { 
                //set the new top match when there is new lower socre
                topMatch=friendsArr[i];
                preDiff=totalDiff;
            }

        }else
        {
            //console.log("else fo prediff");
            topMatch=friendsArr[i];
            preDiff=totalDiff;
            
        }
        totalDiff=0;
    }

    return topMatch;

};

function getDiff(currFS,newFS){
    //make it absolute value
    //console.log("currFS:"+currFS+"\nnewFS"+newFS);
    //console.log("diff: "+Math.abs(currFS - newFS));
    return Math.abs(currFS - newFS);
}



