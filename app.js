var exp=require("express");
var app=exp();
app.get('/players',function(req,res) {
 var query =  req.query;
 console.log('query value = ' + query);
});
var port =process.env.PORT || 40000;
app.listen(port,function(){
	console.log("server is listening on port " + port);
});