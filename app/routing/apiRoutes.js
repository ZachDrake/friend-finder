var path = require("path");
var userInformation = require("./../data/friends");

module.exports = (app) => {
    app.get("/api/friends", (req, res) => {
         res.json(userInformation);
    });

    app.post("/api/friends", (req, res) => {
        var userInput = req.body;

        var userResponse = userInput.scores;

        var matchName = "";
        var matchImage = "";
        var totalDifference = 1000;

        for (var i = 0; i < userInformation.length; i++){
            var diff = 0;
            for (var j = 0; userResponse.length; j++){
                diff += Math.abs(userInformation[i].scores[j] - userResponse[j]);
            }

            if (diff < totalDifference) {
                totalDifference = diff;
                matchName = userInformation[i].name;
                matchImage = userInformation[i].photo;
            }
        }
        


        userInformation.push(userInput);
        
        res.json({status: 200, matchName: matchName, matchImage: matchImage});
    });
};