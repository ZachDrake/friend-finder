var express = require("express");
var path = require("path");
var { static, json, urlencoded } = express;
var { join } = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(json());

var pathToRoutingFolder = join(__dirname + "/routing");
app.use(static(pathToRoutingFolder));

require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);


app.listen(PORT, () => {
    console.log(`express app listening on port ${PORT}`);
})

