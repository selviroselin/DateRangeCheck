var exp = require("express");
var app = exp();

app.get("/data", function(req,res){
	res.send("You called data");
});

app.get("/download",function(req,res) {
res.download("./package.json",function() {
	console.log("download is over");
});
});

app.listen("5555",function(){
 console.log("Server is ON at 5555");
});