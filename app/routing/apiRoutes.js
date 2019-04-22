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
            // console.log(userInformation[i].name);
            var diff = 0;
            for (var j = 0; j < userResponse.length; j++){
                // console.log(userInformation[i].scores[j]);
                diff += Math.abs(userInformation[i].scores[j] - userResponse[j]);
                // console.log(diff);
            }

            if (diff < totalDifference) {
                totalDifference = diff;
                matchName = userInformation[i].name;
                matchImage = userInformation[i].photo;
            }
        }

        // console.log(matchName);
        // console.log(matchImage);
        
        userInformation.push(userInput);
        
        res.json({status: 200, matchName: matchName, matchImage: matchImage});
    });
};